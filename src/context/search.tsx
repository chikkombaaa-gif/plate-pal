import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SearchState = {
  query: string;
  setQuery: (q: string) => void;
  category: string;
  setCategory: (c: string) => void;
};

const SearchContext = createContext<SearchState | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const value = useMemo(
    () => ({ query, setQuery, category, setCategory }),
    [query, category],
  );
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
