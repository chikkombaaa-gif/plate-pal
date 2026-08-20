import { Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart";
import { formatPrice, type FoodItem } from "@/data/food";

export function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border-2 ${
        veg ? "border-veg" : "border-nonveg"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${veg ? "bg-veg" : "bg-nonveg"}`} />
    </span>
  );
}

export function FoodCard({ item }: { item: FoodItem }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
            {item.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <VegBadge veg={item.veg} />
            <h3 className="truncate text-base font-bold">{item.name}</h3>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-veg/10 px-2 py-0.5 text-xs font-semibold text-veg">
            <Star className="h-3 w-3 fill-current" />
            {item.rating}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <p className="text-xs font-medium text-muted-foreground">{item.restaurant}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="text-lg font-extrabold">{formatPrice(item.price)}</span>
          <Button
            size="sm"
            className="rounded-full font-semibold"
            onClick={() => {
              add(item);
              toast.success("Added to cart!", { description: item.name });
            }}
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
