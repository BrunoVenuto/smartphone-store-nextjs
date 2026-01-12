"use client";

import { motion } from "framer-motion";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FloatingCTA() {
  return (
    <motion.a
      href={getWhatsappLink()}
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl"
      animate={{
        y: [0, -28, 0, -18, 0, -10, 0], // 3 “kicks”
      }}
      transition={{
        duration: 0.8,        // tempo das quicadas
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 2,       // pausa entre os ciclos
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ícone WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.07-.12-.25-.2-.52-.34z" />
        <path d="M16.04 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.62 4.64 1.79 6.66L2.67 29.33l6.83-1.79a13.29 13.29 0 006.54 1.71h.01c7.36 0 13.33-5.97 13.33-13.33 0-3.56-1.39-6.9-3.91-9.42-2.52-2.52-5.87-3.91-9.43-3.91zm0 24.03h-.01a11.01 11.01 0 01-5.61-1.54l-.4-.24-4.05 1.06 1.08-3.95-.26-.41a11.01 11.01 0 01-1.69-5.82c0-6.08 4.95-11.03 11.03-11.03 2.95 0 5.72 1.15 7.8 3.23a10.96 10.96 0 013.23 7.8c0 6.08-4.95 11.03-11.03 11.03z" />
      </svg>
    </motion.a>
  );
}
