import type { ShoppingCartItem } from "../store/shoppingCart.store";

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
    return `• ${item.name} x${item.quantity} - ${item.price}`;
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
