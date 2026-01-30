"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/use-cart";

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            💧
          </span>
          <span>Casa da Irrigação</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="/produtos">
            Produtos
          </Link>
          <a className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="/#orcamento">
            Orientação técnica
          </a>
          <Link className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="/carrinho">
            Carrinho ({count})
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            href="https://wa.me/5544991226542?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20irriga%C3%A7%C3%A3o."
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}