"use client";

import { useCart } from "@/components/cart/use-cart";

export function AddToCartButton({
  product,
}: {
  product: { slug: string; name: string; price: number };
}) {
  const { add } = useCart();

  return (
    <button
      onClick={() => add(product, 1)}
      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
    >
      Adicionar ao carrinho
    </button>
  );
}