"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleAdd() {
    addToCart(product);
    setShowSuccess(true);

    // Fecha o modal após mostrar confirmação
    setTimeout(() => {
      onClose();
      setShowSuccess(false);
    }, 900);
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-xl max-w-lg w-full p-6">

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-1 rounded-full z-30">
            Produto adicionado com sucesso
          </span>
        )}

        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[var(--muted)] hover:text-white"
        >
          ✕
        </button>

        {/* Imagem */}
        <div className="relative w-full h-56 bg-black rounded-lg mb-6 z-10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Conteúdo */}
        <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
        <p className="text-sm text-[var(--muted)] mb-4">
          {product.category}
        </p>

        <p className="text-xl font-semibold mb-4">
          R$ {product.price.toLocaleString("pt-BR")}
        </p>

        <p className="text-sm text-[var(--muted)] mb-6">
          {product.description}
        </p>

        <button
          onClick={handleAdd}
          className="w-full bg-[var(--primary)] hover:opacity-90 text-white py-3 rounded-lg"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
