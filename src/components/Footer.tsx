"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { storeConfig } from "@/config/store";
import { getWhatsappLink } from "@/lib/whatsapp";


export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Loja */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            {storeConfig.name}
          </h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Loja online especializada em smartphones com garantia,
            procedência e entrega rápida para todo o Brasil.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Institucional</h4>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>
              <Link href="/" className="hover:text-white transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="/carrinho" className="hover:text-white transition">
                Carrinho
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <h4 className="font-semibold mb-3">Atendimento</h4>
          <p className="text-[var(--muted)] mb-4">
            Fale com nosso time e tire suas dúvidas antes de comprar.
          </p>

          {/* Botão animado WhatsApp */}
          <motion.a
            href={getWhatsappLink()}
            target="_blank"
            className="inline-flex items-center justify-center w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3 rounded-lg"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            Falar no WhatsApp
          </motion.a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-[var(--muted)] py-4 border-t border-[var(--border)]">
        © {new Date().getFullYear()} {storeConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
