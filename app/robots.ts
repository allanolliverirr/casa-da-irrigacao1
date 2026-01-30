export default function robots() {
  const base = "https://www.casadairrigacao.com.br";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}