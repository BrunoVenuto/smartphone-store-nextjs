"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { getCart, removeFromCart, getTotal } from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState<Product[]>([]);

  function loadCart() {
    setItems(getCart());
  }

  useEffect(() => {
    loadCart();

    window.addEventListener("cart:update", loadCart);
    return () => {
      window.removeEventListener("cart:update", loadCart);
    };
  }, []);

  const total = getTotal();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Seu carrinho</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--muted)] mb-6">
            Seu carrinho está vazio.
          </p>
          <Link
            href="/"
            className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg"
          >
            Ver produtos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Lista de itens */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4"
              >
                {/* Imagem */}
                <div className="relative w-24 h-24 bg-black rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-[var(--muted)]">
                    {item.category}
                  </p>

                  <p className="font-bold mt-2">
                    R$ {item.price.toLocaleString("pt-BR")}
                  </p>
                </div>

                {/* Remover */}
                <button
                  onClick={() => {
                    removeFromCart(index);
                    loadCart();
                  }}
                  className="text-sm text-red-400 hover:text-red-500"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          {/* Resumo */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">
              Resumo do pedido
            </h2>

            <div className="flex justify-between mb-4 text-sm">
              <span>Subtotal</span>
              <span>R$ {total.toLocaleString("pt-BR")}</span>
            </div>

            <div className="flex justify-between mb-6 text-sm">
              <span>Entrega</span>
              <span className="text-green-400">Grátis</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>R$ {total.toLocaleString("pt-BR")}</span>
            </div>

            <Link
              href="/checkout"
              className="block text-center bg-[var(--primary)] hover:opacity-90 text-white py-3 rounded-lg"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
