import { storeConfig } from "@/config/store";

export function getWhatsappLink(customMessage?: string) {
  const message = customMessage || storeConfig.whatsappMessage;

  return `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}
