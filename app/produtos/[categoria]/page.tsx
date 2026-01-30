import { ProductGrid } from "@/components/product-grid";
import { categories, products } from "@/data/products";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const cat = categories.find((c) => c.slug === params.categoria);
  if (!cat) return notFound();
  const filtered = products.filter((p) => p.category === cat.slug);
  return (
    <section className="py-10">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{cat.name}</h1>
      <p className="mt-2 text-slate-600">{cat.description}</p>
      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}