import { Product } from "@/data/products";

const CART_KEY = "cart-items";

export function getCart(): Product[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function addToCart(product: Product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  window.dispatchEvent(new Event("cart:update"));
}

export function removeFromCart(index: number) {
  const cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  window.dispatchEvent(new Event("cart:update"));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cart:update"));
}

export function getTotal(): number {
  return getCart().reduce((acc, item) => acc + item.price, 0);
}
