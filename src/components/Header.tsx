"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCart } from "@/lib/cart";

export default function Header() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  function updateCart() {
    setCount(getCart().length);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 400);
  }

  useEffect(() => {
    updateCart();
    window.addEventListener("cart:update", updateCart);
    return () => window.removeEventListener("cart:update", updateCart);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--surface)]/90 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          CellShop
        </Link>

        {/* Carrinho animado */}
        <Link
          href="/carrinho"
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition"
          aria-label="Carrinho"
        >
          <motion.div
            animate={
              animate
                ? { scale: [1, 1.25, 0.95, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.4 }}
          >
            {/* Ícone carrinho */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 0-.88-1.48h-14.31l-.94-2zm0 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </motion.div>

          {/* Badge animado */}
          {count > 0 && (
            <motion.span
              key={count}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="absolute -top-1 -right-1 bg-[var(--primary)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {count}
            </motion.span>
          )}
        </Link>
      </div>
    </header>
  );
}
