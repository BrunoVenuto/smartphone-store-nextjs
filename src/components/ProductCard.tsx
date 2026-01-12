"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";
import ProductModal from "./ProductModal";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleAdd() {
    addToCart(product);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);
  }

  return (
    <>
      <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--primary)] transition flex flex-col">

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full z-20">
            Produto adicionado com sucesso
          </span>
        )}

        {/* Imagem */}
        <button
          onClick={() => setOpen(true)}
          className="relative w-full h-48 bg-black"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </button>

        {/* Conteúdo */}
        <div className="p-5 flex flex-col flex-1">
          <button onClick={() => setOpen(true)} className="text-left">
            <h3 className="font-semibold text-lg hover:text-[var(--primary)] transition">
              {product.name}
            </h3>
          </button>

          <p className="text-sm text-[var(--muted)]">{product.category}</p>

          <p className="text-xl font-bold mt-4">
            R$ {product.price.toLocaleString("pt-BR")}
          </p>

          <button
            onClick={handleAdd}
            className="mt-auto bg-[var(--primary)] hover:opacity-90 text-white py-2 rounded-lg"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {open && (
        <ProductModal product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
