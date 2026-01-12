import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "./ui/AddToCartButton";

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Imagem */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={420}
          height={420}
          className="object-contain"
        />
      </div>

      {/* Conteúdo */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-[var(--muted)] mb-4">{product.category}</p>

        <p className="text-2xl font-semibold mb-6">
          R$ {product.price.toLocaleString("pt-BR")}
        </p>

        <p className="text-sm text-[var(--muted)] mb-8">
          {product.description}
        </p>

        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
