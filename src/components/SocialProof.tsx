"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const COMMENTS = [
  { name: "Carlos M.", text: "Produto original, chegou rápido e bem embalado." },
  { name: "Fernanda R.", text: "Atendimento excelente pelo WhatsApp." },
  { name: "Lucas A.", text: "Preço justo e entrega no prazo." },
  { name: "Juliana S.", text: "Comprei sem medo, loja confiável." },
  { name: "Rafael P.", text: "Recomendo demais, tudo perfeito." },
  { name: "Amanda C.", text: "Qualidade acima do esperado." },
  { name: "Diego L.", text: "Já indiquei para amigos." },
  { name: "Mariana T.", text: "Chegou antes do prazo." },
];

export default function SocialProof() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const max = 15000;

  // Contador animado
  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          function animate(time: number) {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * max);
            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      {/* Headline */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mais de{" "}
          <span className="text-[var(--primary)]">
            {count.toLocaleString("pt-BR")}+
          </span>{" "}
          clientes satisfeitos
        </h2>

        <div className="flex justify-center text-yellow-400 text-xl">
          ★★★★★
        </div>

        <p className="text-[var(--muted)] mt-3">
          Confiança construída com qualidade e transparência.
        </p>
      </div>

      {/* Linha 1 */}
      <motion.div
        className="flex gap-6 mb-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...COMMENTS, ...COMMENTS].map((item, index) => (
          <CommentCard key={`row1-${index}`} {...item} />
        ))}
      </motion.div>

      {/* Linha 2 (direção oposta) */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...COMMENTS, ...COMMENTS].map((item, index) => (
          <CommentCard key={`row2-${index}`} {...item} />
        ))}
      </motion.div>
    </section>
  );
}

function CommentCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="min-w-[260px] bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <p className="text-sm text-[var(--muted)] mb-3">“{text}”</p>
      <p className="font-semibold text-sm">{name}</p>
      <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
    </div>
  );
}
