export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string; // Marca
  description: string;
}

export const products: Product[] = [
  // Apple
  {
    id: "1",
    name: "iPhone 13",
    price: 3499,
    image: "/products/iPhone-13.png",
    category: "Apple",
    description: "iPhone 13 com 128GB, desempenho rápido e câmera avançada.",
  },
  {
    id: "2",
    name: "iPhone 14",
    price: 4199,
    image: "/products/iPhone-13.png",
    category: "Apple",
    description: "iPhone 14 com design premium, segurança e performance.",
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    price: 6999,
    image: "/products/iPhone-13.png",
    category: "Apple",
    description: "iPhone 15 Pro com chip A17 Pro e acabamento em titânio.",
  },

  // Samsung
  {
    id: "4",
    name: "Galaxy S23",
    price: 3899,
    image: "/products/galaxy-S23.png",
    category: "Samsung",
    description: "Galaxy S23 com câmera profissional e tela AMOLED.",
  },
  {
    id: "5",
    name: "Galaxy S23 Ultra",
    price: 5699,
    image: "/products/galaxy-S23.png",
    category: "Samsung",
    description: "Galaxy S23 Ultra com câmera de 200MP e S Pen.",
  },
  {
    id: "6",
    name: "Galaxy A54",
    price: 1899,
    image: "/products/galaxy-s22.png",
    category: "Samsung",
    description: "Galaxy A54 com ótimo custo-benefício e bateria durável.",
  },

  // Xiaomi
  {
    id: "7",
    name: "Xiaomi 13",
    price: 3299,
    image: "/products/xiaomi-13.png",
    category: "Xiaomi",
    description: "Xiaomi 13 com desempenho flagship e design compacto.",
  },
  {
    id: "8",
    name: "Redmi Note 12",
    price: 1399,
    image: "/products/xiaomi-13.png",
    category: "Xiaomi",
    description: "Redmi Note 12 com tela AMOLED e ótimo custo-benefício.",
  },

  // Motorola
  {
    id: "9",
    name: "Motorola Edge 40",
    price: 2599,
    image: "/products/moto-edge-40.png",
    category: "Motorola",
    description: "Motorola Edge 40 com design premium e carregamento rápido.",
  },
  {
    id: "10",
    name: "Moto G84",
    price: 1699,
    image: "/products/moto-edge-84.png",
    category: "Motorola",
    description: "Moto G84 com som estéreo e tela pOLED.",
  },
];
