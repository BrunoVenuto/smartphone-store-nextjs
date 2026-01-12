"use client";

import Link from "next/link";
import CartButton from "@/components/CartButton";

export default function Header() {
  return (
    <header className="bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          CellShop
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className="hover:text-[var(--primary)] transition"
          >
            Início
          </Link>

          <Link
            href="/carrinho"
            className="hover:text-[var(--primary)] transition"
          >
            Carrinho
          </Link>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-4">
          <CartButton />

          {/* Botão mobile */}
          <Link
            href="/carrinho"
            className="md:hidden bg-[var(--primary)] text-white text-sm px-4 py-2 rounded-lg"
          >
            Carrinho
          </Link>
        </div>
      </div>
    </header>
  );
}
