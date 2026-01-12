"use client";

import { useState } from "react";
import { getCart, getTotal, clearCart } from "@/lib/cart";
import { storeConfig } from "@/config/store";

export default function CheckoutPage() {
  const items = getCart();
  const total = getTotal();
  const [pixCopied, setPixCopied] = useState(false);

  function sendWhatsApp() {
    const message = `
🛒 *Pedido - ${storeConfig.name}*

${items.map((item) => `• ${item.name} - R$ ${item.price}`).join("\n")}

*Total:* R$ ${total}
`;

    const url = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    clearCart();
    window.open(url, "_blank");
  }

  function copyPix() {
    navigator.clipboard.writeText(storeConfig.pixKey);
    setPixCopied(true);

    setTimeout(() => {
      setPixCopied(false);
    }, 1500);
  }

  if (items.length === 0) {
    return (
      <main className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Carrinho vazio</h1>
        <p className="text-[var(--muted)]">
          Adicione produtos antes de finalizar a compra.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Finalizar pagamento</h1>

      {/* Resumo */}
      <section className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-lg mb-4">Resumo do pedido</h2>

        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>R$ {item.price.toLocaleString("pt-BR")}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-bold text-lg mt-6">
          <span>Total</span>
          <span>R$ {total.toLocaleString("pt-BR")}</span>
        </div>
      </section>

      {/* PIX */}
      {(storeConfig.checkout.mode === "pix" ||
        storeConfig.checkout.mode === "both") && (
        <section className="relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-lg mb-2">Pagamento via Pix</h2>
          <p className="text-sm text-[var(--muted)] mb-4">
            Copie a chave Pix, realize o pagamento e envie o comprovante.
          </p>

          {/* Feedback */}
          {pixCopied && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-1 rounded-full">
              Chave Pix copiada com sucesso
            </span>
          )}

          <div className="bg-black rounded-lg p-4 flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-xs text-[var(--muted)]">Chave Pix</p>
              <p className="font-mono break-all">
                {storeConfig.pixKey}
              </p>
            </div>

            <button
              onClick={copyPix}
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm"
            >
              Copiar
            </button>
          </div>

          <button
            onClick={sendWhatsApp}
            className="w-full bg-[var(--primary)] hover:opacity-90 text-white py-3 rounded-lg"
          >
            Já paguei — enviar comprovante
          </button>
        </section>
      )}

      {/* LINK EXTERNO */}
      {(storeConfig.checkout.mode === "link" ||
        storeConfig.checkout.mode === "both") && (
        <section className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-2">
            Pagar com link de pagamento
          </h2>

          <a
            href={storeConfig.checkout.paymentLink}
            target="_blank"
            className="block text-center bg-white text-black py-3 rounded-lg"
          >
            Ir para pagamento
          </a>
        </section>
      )}
    </main>
  );
}
