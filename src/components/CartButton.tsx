"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function CartButton() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(getCart().length);
  }

  useEffect(() => {
    updateCount();

    window.addEventListener("storage", updateCount);
    window.addEventListener("cart:update", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cart:update", updateCount);
    };
  }, []);

  return (
    <Link href="/carrinho" className="relative flex items-center">
      <span className="text-xl">🛒</span>

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
}
