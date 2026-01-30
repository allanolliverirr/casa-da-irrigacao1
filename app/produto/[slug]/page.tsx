import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.shortDescription,
    alternates: { canonical: `/produto/${p.slug}` },
    openGraph: {
      title: p.name,
      description: p.shortDescription,
      type: "product",
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.shortDescription,
    sku: p.sku,
    brand: { "@type": "Brand", name: "Casa da Irrigação" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: p.price.toFixed(2),
      availability: "https://schema.org/InStock",
      url: `https://www.casadairrigacao.com.br/produto/${p.slug}`,
    },
  };
  return (
    <section className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-700">Imagem</div>
          <div className="mt-3 rounded-2xl bg-white p-10 text-center text-slate-500">
            (coloque imagem real depois)
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-600">{p.categoryLabel}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{p.name}</h1>
          <p className="mt-3 text-slate-600">{p.shortDescription}</p>
          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-semibold">R$ {p.price.toFixed(2)}</div>
              <div className="text-sm text-slate-500">SKU: {p.sku}</div>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton product={p} />
              <a
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                href={`https://wa.me/5544991226542?text=${encodeURIComponent(
                  `Olá! Tenho interesse no produto: ${p.name} (SKU ${p.sku}). Pode me ajudar?`
                )}`}
              >
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Detalhes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}