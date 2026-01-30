import Link from "next/link";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  price: number;
  sku: string;
  bullets: string[];
  featured?: boolean;
};

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div
          key={p.slug}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="text-xs font-semibold text-slate-600">{p.categoryLabel}</div>
          <Link
            href={`/produto/${p.slug}`}
            className="mt-2 block text-sm font-semibold hover:underline"
          >
            {p.name}
          </Link>
          <p className="mt-2 text-sm text-slate-600">{p.shortDescription}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-semibold">R$ {p.price.toFixed(2)}</div>
            <Link
              className="text-sm font-semibold text-slate-900 hover:underline"
              href={`/produto/${p.slug}`}
            >
              Ver →
            </Link>
          </div>
          <div className="mt-4">
            <AddToCartButton product={p} />
          </div>
        </div>
      ))}
    </div>
  );
}