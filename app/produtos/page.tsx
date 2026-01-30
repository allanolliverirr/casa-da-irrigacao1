import { ProductGrid } from "@/components/product-grid";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="py-10">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Produtos</h1>
      <p className="mt-2 text-slate-600">
        Aspersores, tubos e gotejamento com foco em aplicação e resultado.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
          href="/produtos"
        >
          Todos
        </a>
        {categories.map((c) => (
          <a
            key={c.slug}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
            href={`/produtos/${c.slug}`}
          >
            {c.name}
          </a>
        ))}
      </div>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}