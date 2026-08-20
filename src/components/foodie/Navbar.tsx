import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronDown, MapPin, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart";
import { useSearch } from "@/context/search";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locations = ["Koramangala, Bengaluru", "Bandra West, Mumbai", "Banjara Hills, Hyderabad", "Connaught Place, Delhi"];

export function Navbar() {
  const { count, setOpen } = useCart();
  const { query, setQuery } = useSearch();
  const [location, setLocation] = useState(locations[0]);
  const [mobileSearch, setMobileSearch] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const onSearch = (value: string) => {
    setQuery(value);
    if (pathname !== "/") navigate({ to: "/", hash: "menu" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:gap-5 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-lg text-primary-foreground shadow-soft">
            🍜
          </span>
          <span className="hidden text-2xl font-extrabold tracking-tight sm:block">
            Foodie
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden max-w-[190px] items-center gap-1.5 rounded-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted lg:flex">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-medium">{location}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>Deliver to</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {locations.map((l) => (
                <DropdownMenuItem key={l} onClick={() => setLocation(l)}>
                  {l}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-soft transition-shadow focus-within:shadow-lift sm:flex">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search for food, restaurants..."
              aria-label="Search for food, restaurants"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full sm:hidden"
            aria-label="Search"
            onClick={() => setMobileSearch((v) => !v)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="ghost"
            size="icon"
            aria-label={`Cart with ${count} items`}
            className="relative rounded-full"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 animate-in zoom-in place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Account" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Hi, Aarav 👋</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My orders</DropdownMenuItem>
              <DropdownMenuItem>Saved addresses</DropdownMenuItem>
              <DropdownMenuItem>Favourites</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="rounded-full lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel>Deliver to</DropdownMenuLabel>
              {locations.map((l) => (
                <DropdownMenuItem key={l} onClick={() => setLocation(l)}>
                  {l}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate({ to: "/" })}>Home</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate({ to: "/checkout" })}>Checkout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {mobileSearch && (
        <div className="border-t border-border px-4 pb-3 pt-2 sm:hidden">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search for food, restaurants..."
              aria-label="Search for food, restaurants"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}
    </header>
  );
}
