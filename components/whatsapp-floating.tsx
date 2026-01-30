export function WhatsAppFloating({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(
        "Olá! Vim pelo site e quero ajuda com irrigação."
      )}`}
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
      aria-label="WhatsApp"
    >
      💬 WhatsApp
    </a>
  );
}