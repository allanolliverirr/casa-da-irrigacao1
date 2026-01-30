export function FAQ() {
  const faqs = [
    {
      q: "Como escolher entre aspersão e gotejamento?",
      a: "Depende da cultura, área e disponibilidade de pressão/vazão. A gente orienta com base no seu cenário.",
    },
    {
      q: "Vocês ajudam a dimensionar o sistema?",
      a: "Sim. Com dados básicos (área, água disponível e objetivo), indicamos materiais e configuração.",
    },
    {
      q: "Posso comprar pelo WhatsApp?",
      a: "Pode. O site facilita a escolha e o carrinho, e você finaliza o pedido direto no WhatsApp.",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        Perguntas frequentes
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-semibold">{f.q}</div>
            <div className="mt-2 text-sm text-slate-600">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}