"use client";

import { useCart } from "@/components/cart/use-cart";

export default function CartPage() {
  const { items, total, removeItem, clear, setQty } = useCart();
  return (
    <section className="py-10">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Carrinho</h1>
      <p className="mt-2 text-slate-600">Revise seus itens antes de finalizar.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 p-6 text-slate-600">
              Seu carrinho está vazio.
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((it) => (
                <div key={it.slug} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{it.name}</div>
                      <div className="mt-1 text-sm text-slate-600">R$ {it.price.toFixed(2)}</div>
                      <div className="mt-3 flex items-center gap-2">
                        <label className="text-sm text-slate-600">Qtd:</label>
                        <input
                          className="w-20 rounded-xl border border-slate-200 px-3 py-2 text-sm"
                          type="number"
                          min={1}
                          value={it.qty}
                          onChange={(e) => setQty(it.slug, Number(e.target.value))}
                        />
                        <button
                          className="text-sm font-semibold text-slate-900 hover:underline"
                          onClick={() => removeItem(it.slug)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">
                      R$ {(it.price * it.qty).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="text-sm font-semibold text-slate-900">Resumo</div>
          <div className="mt-3 flex items-center justify-between text-slate-600">
            <span>Total</span>
            <span className="text-lg font-semibold text-slate-900">R$ {total.toFixed(2)}</span>
          </div>
          <a
            className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${
              items.length ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-slate-200 text-slate-500"
            }`}
            href={
              items.length
                ? `https://wa.me/5544991226542?text=${encodeURIComponent(
                    "Olá! Quero finalizar meu pedido:\n\n" +
                      items
                        .map((i) => `• ${i.name} — Qtd ${i.qty} — R$ ${(i.price * i.qty).toFixed(2)}`)
                        .join("\n") +
                      `\n\nTotal: R$ ${total.toFixed(2)}`
                  )}`
                : "#"
            }
          >
            Finalizar no WhatsApp
          </a>
          <button
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            onClick={clear}
            disabled={!items.length}
          >
            Limpar carrinho
          </button>
        </div>
      </div>
    </section>
  );
}