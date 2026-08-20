import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { FoodItem } from "@/data/food";

export type CartLine = { item: FoodItem; qty: number };

type CartState = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  isOpen: boolean;
  promo: string | null;
  setOpen: (open: boolean) => void;
  add: (item: FoodItem) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  applyPromo: (code: string, rate: number) => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [promo, setPromo] = useState<{ code: string; rate: number } | null>(null);

  const add = useCallback((item: FoodItem) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id);
      if (existing) {
        return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { item, qty: 1 }];
    });
  }, []);

  const increment = useCallback((id: string) => {
    setLines((prev) => prev.map((l) => (l.item.id === id ? { ...l, qty: l.qty + 1 } : l)));
  }, []);

  const decrement = useCallback((id: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.item.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id));
  }, []);

  const clear = useCallback(() => {
    setLines([]);
    setPromo(null);
  }, []);

  const applyPromo = useCallback((code: string, rate: number) => {
    setPromo({ code, rate });
  }, []);

  const value = useMemo<CartState>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.qty * l.item.price, 0);
    const deliveryFee = subtotal === 0 || subtotal >= 499 ? 0 : 39;
    const discount = promo ? Math.round(subtotal * promo.rate) : 0;
    return {
      lines,
      count,
      subtotal,
      deliveryFee,
      discount,
      total: Math.max(0, subtotal + deliveryFee - discount),
      isOpen,
      promo: promo?.code ?? null,
      setOpen,
      add,
      increment,
      decrement,
      remove,
      clear,
      applyPromo,
    };
  }, [lines, isOpen, promo, add, increment, decrement, remove, clear, applyPromo]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
