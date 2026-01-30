import { WhatsAppFloating } from "@/components/whatsapp-floating";
import { CategoryCards } from "@/components/category-cards";
import { FeaturedProducts } from "@/components/featured-products";
import { TrustBar } from "@/components/trust-bar";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              💧 Loja especializada em irrigação • Atendimento técnico
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Irrigação eficiente, com suporte de quem entende.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Produtos selecionados, orientação técnica e soluções práticas para jardim, gramado,
              paisagismo e pequenas áreas agrícolas.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/produtos"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Ver produtos
              </a>
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Pedir orientação técnica
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Atendimento humanizado • Conteúdo técnico • Compra segura
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-slate-900">Diagnóstico rápido</div>
                <div className="mt-1 text-sm text-slate-600">
                  Informe área, pressão e objetivo. A gente indica o melhor caminho.
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-slate-900">Produtos por aplicação</div>
                <div className="mt-1 text-sm text-slate-600">
                  Aspersão, gotejamento e linha hidráulica com foco em desempenho.
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-slate-900">Entrega e suporte</div>
                <div className="mt-1 text-sm text-slate-600">
                  Conteúdo e suporte técnico para instalação e regulagem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Categories */}
      <section className="py-10">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Compre por categoria
        </h2>
        <p className="mt-2 text-slate-600">
          Escolha a linha ideal e encontre os itens certos com mais rapidez.
        </p>
        <div className="mt-6">
          <CategoryCards />
        </div>
      </section>

      {/* Featured products */}
      <section className="py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Produtos em destaque
            </h2>
            <p className="mt-2 text-slate-600">
              Seleção com boa saída e aplicação prática.
            </p>
          </div>
          <a className="text-sm font-semibold text-slate-900 hover:underline" href="/produtos">
            Ver catálogo →
          </a>
        </div>
        <div className="mt-6">
          <FeaturedProducts />
        </div>
      </section>

      {/* Landing / orçamento */}
      <section id="orcamento" className="py-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Quer acertar na irrigação e evitar retrabalho?
              </h2>
              <p className="mt-3 text-white/80">
                Fale com a Casa da Irrigação e receba orientação técnica para escolher
                produtos e montar um sistema eficiente (sem comprar errado).
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/90">
                <li>✅ Indicação de produto por aplicação</li>
                <li>✅ Dicas de pressão, vazão e regulagem</li>
                <li>✅ Solução para jardim, gramado e pequenas áreas</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <form className="grid gap-3">
                <label className="text-sm font-semibold">Seu nome</label>
                <input
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
                  placeholder="Ex.: Allan"
                />
                <label className="text-sm font-semibold">O que você quer irrigar?</label>
                <input
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
                  placeholder="Ex.: jardim, gramado, horta, pastagem..."
                />
                <label className="text-sm font-semibold">Tamanho aproximado</label>
                <input
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
                  placeholder="Ex.: 200 m² / 1.000 m²"
                />
                <a
                  href="https://wa.me/5544991226542?text=Ol%C3%A1!%20Quero%20orienta%C3%A7%C3%A3o%20t%C3%A9cnica%20para%20irrigar%20minha%20%C3%A1rea.%20Posso%20passar%20os%20dados%3F"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Pedir orientação no WhatsApp
                </a>
                <p className="text-xs text-white/70">
                  * Ajuste o número do WhatsApp no link (wa.me).
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <FAQ />
      <CTA />
      <WhatsAppFloating phone="5544991226542" />
    </>
  );
}