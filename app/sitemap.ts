import { products, categories } from "@/data/products";

export default function sitemap() {
  const base = "https://www.casadairrigacao.com.br";
  const urls = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/produtos`, lastModified: new Date() },
    { url: `${base}/carrinho`, lastModified: new Date() },
    ...categories.map((c) => ({ url: `${base}/produtos/${c.slug}`, lastModified: new Date() })),
    ...products.map((p) => ({ url: `${base}/produto/${p.slug}`, lastModified: new Date() })),
  ];
  return urls;
}