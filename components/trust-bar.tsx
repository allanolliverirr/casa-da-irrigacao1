export function TrustBar() {
  const items = [
    { title: "Suporte técnico", desc: "Ajuda real na escolha e regulagem" },
    { title: "Compra segura", desc: "Transparência e atendimento humano" },
    { title: "Foco em eficiência", desc: "Economia de água e melhor resultado" },
  ];

  return (
    <section className="py-6">
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-semibold">{i.title}</div>
            <div className="mt-1 text-sm text-slate-600">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}