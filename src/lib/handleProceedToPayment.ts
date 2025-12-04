import type { ShoppingCartItem } from "../store/shoppingCart.store";
import { getExtraPrice } from "./getExtraPrice";

type MessagePayment = {
  totalAmount: string;
  items: ShoppingCartItem[];
  isDelivery: boolean;
};
export const handleProceedToPayment = ({
  totalAmount,
  items,
  isDelivery,
}: MessagePayment) => {
  const messageLines = items.map((item) => {
    const basePrice = Number.parseFloat(item.price.replace("S/ ", ""));
    let itemTotal = basePrice;
    
    // Calcular precio de extras
    let extrasPrice = 0;
    if (item.customization?.extras && item.customization.extras.length > 0) {
      extrasPrice = item.customization.extras.reduce((total, extra) => {
        return total + getExtraPrice(extra.name);
      }, 0);
      
      itemTotal += extrasPrice;
    }
    
    const finalPrice = `S/ ${itemTotal.toFixed(2)}`;
    let itemText = `• ${item.name} x${item.quantity} - ${finalPrice}`;
    
    // Agregar personalizaciones si existen
    if (item.customization) {
      const customDetails: string[] = [];
      
      if (item.customization.sauces && item.customization.sauces.length > 0) {
        customDetails.push(`  ↳ Salsas: ${item.customization.sauces.join(", ")}`);
      }
      
      if (item.customization.potatoType) {
        const potatoText = item.customization.potatoType === "fritas" ? "Fritas" : "Al Hilo";
        customDetails.push(`  ↳ Papas: ${potatoText}`);
      }
      
      if (item.customization.extras && item.customization.extras.length > 0) {
        const extrasWithPrices = item.customization.extras.map((extra) => {
          const price = getExtraPrice(extra.name);
          return `${extra.name} (+S/ ${price.toFixed(2)})`;
        });
        customDetails.push(`  ↳ Extras: ${extrasWithPrices.join(", ")}`);
      }
      
      if (customDetails.length > 0) {
        itemText += "\n" + customDetails.join("\n");
      }
    }
    
    return itemText;
  });

  const total = totalAmount;

  const methodText =
    isDelivery === false ? "Recoger en tienda" : "Pedir por delivery";

  const message = [
    "Hola, quiero realizar un pedido con los siguientes productos:",
    "",
    ...messageLines,
    "",
    `Total: ${total}`,
    `Método: ${methodText}`,
  ].join("\n");

  const phoneNumber = "51944561736";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
