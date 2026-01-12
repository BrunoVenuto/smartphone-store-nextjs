"use client";

import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-[var(--primary)] hover:opacity-90 text-white px-6 py-3 rounded-lg w-full md:w-auto"
    >
      Adicionar ao carrinho
    </button>
  );
}
