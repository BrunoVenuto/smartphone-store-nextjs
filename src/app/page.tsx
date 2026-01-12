"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SocialProof from "@/components/SocialProof";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold leading-tight"
        >
          <span className="block text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
            Smartphones originais
          </span>

          <span className="block text-xl md:text-3xl text-white mt-2">
            com entrega rápida
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[var(--muted)] mt-5 max-w-2xl mx-auto"
        >
          Trabalhamos apenas com produtos novos, lacrados e das principais marcas do mercado.
        </motion.p>
      </section>


      {/* FILTRO */}
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* PROVA SOCIAL */}
      <SocialProof />
    </main>
  );
}
