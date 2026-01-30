import { products } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);
  return <ProductGrid products={featured} />;
}