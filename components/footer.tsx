export function Footer() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Casa da Irrigação",
    url: "https://www.casadairrigacao.com.br",
    sameAs: [],
  };

  return (
    <footer className="mt-16 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Casa da Irrigação</div>
            <p className="mt-2 text-sm text-slate-600">
              Irrigação residencial e agrícola com suporte técnico e produtos selecionados.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Atendimento</div>
            <p className="mt-2 text-sm text-slate-600">
              Segunda a sexta • 8h às 18h
              <br />
              WhatsApp e suporte técnico
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">SEO / Credibilidade</div>
            <p className="mt-2 text-sm text-slate-600">
              Site rápido, responsivo e pensado para tráfego orgânico.
            </p>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Casa da Irrigação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}