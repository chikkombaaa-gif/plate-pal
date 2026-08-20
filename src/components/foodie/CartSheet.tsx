import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/cart";
import { formatPrice } from "@/data/food";
import { VegBadge } from "./FoodCard";

export function CartSheet() {
  const cart = useCart();

  return (
    <Sheet open={cart.isOpen} onOpenChange={cart.setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="text-xl">
            Your cart {cart.count > 0 && <span className="text-muted-foreground">({cart.count})</span>}
          </SheetTitle>
        </SheetHeader>

        {cart.lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent">
              <ShoppingBag className="h-7 w-7 text-primary" />
            </span>
            <h3 className="text-lg font-bold">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground">
              Add something delicious and it will show up here.
            </p>
            <Button className="mt-2 rounded-full" onClick={() => cart.setOpen(false)}>
              Browse food
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {cart.lines.map(({ item, qty }) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border/70 bg-card p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <VegBadge veg={item.veg} />
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{item.restaurant}</p>
                    <p className="mt-1 text-sm font-bold">{formatPrice(item.price * qty)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
                      <button
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => cart.decrement(item.id)}
                        className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-accent"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold">{qty}</span>
                      <button
                        aria-label={`Increase ${item.name}`}
                        onClick={() => cart.increment(item.id)}
                        className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-accent"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => cart.remove(item.id)}
                      className="text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-border bg-muted/40 px-5 py-4 text-sm">
              <Row label="Subtotal" value={formatPrice(cart.subtotal)} />
              <Row
                label="Delivery fee"
                value={cart.deliveryFee === 0 ? "FREE" : formatPrice(cart.deliveryFee)}
              />
              <Row
                label={`Discount${cart.promo ? ` (${cart.promo})` : ""}`}
                value={`- ${formatPrice(cart.discount)}`}
              />
              <div className="flex items-center justify-between border-t border-border pt-3 text-base font-extrabold">
                <span>Total</span>
                <span>{formatPrice(cart.total)}</span>
              </div>
              <Button asChild className="mt-2 h-12 w-full rounded-full text-base font-bold">
                <Link to="/checkout" onClick={() => cart.setOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}
