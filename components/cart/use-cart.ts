"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/components/product-grid";

type CartItem = Pick<Product, "slug" | "name" | "price"> & { qty: number };

const KEY = "cdi_cart_v1";

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readCart());
  }, []);

  const count = useMemo(() => items.reduce((acc, it) => acc + it.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.qty, 0),
    [items]
  );

  function add(product: Pick<Product, "slug" | "name" | "price">, qty = 1) {
    setItems((prev) => {
      const next = [...prev];
      const idx = next.findIndex((x) => x.slug === product.slug);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + qty };
      else next.push({ ...product, qty });
      writeCart(next);
      return next;
    });
  }

  function removeItem(slug: string) {
    setItems((prev) => {
      const next = prev.filter((x) => x.slug !== slug);
      writeCart(next);
      return next;
    });
  }

  function setQty(slug: string, qty: number) {
    const safe = Number.isFinite(qty) && qty > 0 ? qty : 1;
    setItems((prev) => {
      const next = prev.map((x) => (x.slug === slug ? { ...x, qty: safe } : x));
      writeCart(next);
      return next;
    });
  }

  function clear() {
    setItems(() => {
      writeCart([]);
      return [];
    });
  }

  return { items, count, total, add, removeItem, clear, setQty };
}