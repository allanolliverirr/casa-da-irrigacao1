import Link from "next/link";
import { categories } from "@/data/products";

export function CategoryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/produtos/${c.slug}`}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50"
        >
          <div className="text-sm font-semibold text-slate-900">{c.name}</div>
          <div className="mt-2 text-sm text-slate-600">{c.description}</div>
          <div className="mt-4 text-sm font-semibold text-slate-900 group-hover:underline">
            Ver {c.name.toLowerCase()} →
          </div>
        </Link>
      ))}
    </div>
  );
}