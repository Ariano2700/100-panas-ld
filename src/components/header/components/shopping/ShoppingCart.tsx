import { use, useEffect, useRef, useState } from "react";
import { GgTrash } from "../../../../assets/icons/css.gg/GgTrash";
import { LucideMinus } from "../../../../assets/icons/lucide/LucideMinus";
import { LucidePlus } from "../../../../assets/icons/lucide/LucidePlus";
import { MiClose } from "../../../../assets/icons/mono_icons/MiClose";
import { formatPrice } from "../../../../lib/formatPrice";
import { useCartStore } from "../../../../store/shoppingCart.store";
import { handleProceedToPayment } from "../../../../lib/handleProceedToPayment";
import PickUpOrDeliveryButton from "./PickUpOrDeliveryButton";
import { UilWhatsapp } from "../../../../assets/icons/unicons/UilWhatsapp";

export default function ShoppingCart() {
  const {
    items,
    isOpen,
    removeItem,
    updateQuantity,
    clearCart,
    closeCart,
    getTotalPrice,
  } = useCartStore();

  const [mounted, setMounted] = useState(isOpen);
  const [isDelivery, setIsDelivery] = useState<boolean>(false);

  const [show, setShow] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
      const timeout = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      closeCart();
    }
  };

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[60] min-h-screen flex`}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay con blur y fade */}
      <div
        className={`
          absolute inset-0 transition-all duration-300
          ${show ? "opacity-100" : "opacity-0 "}
          bg-black/70
        `}
      />

      {/* Cart Panel */}
      <div
        className={`
          absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl
          transform transition-transform duration-300
          ${show ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg text-black font-bold">Carrito de Compras</h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full text-black cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <MiClose className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500">
                Agrega algunos productos deliciosos para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-50 rounded-lg p-3"
                >
                  {/* Product Image */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category.name}
                    </p>
                    <p className="font-bold text-[#E56053]">{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors text-black cursor-pointer"
                      disabled={item.quantity <= 1}
                    >
                      <LucideMinus className="h-3 w-3" />
                    </button>

                    <span className="w-8 text-center font-medium text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors text-black cursor-pointer"
                    >
                      <LucidePlus className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                  >
                    <GgTrash className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-[#E56053]">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            {/* Delivery or Pickup Options */}
            <div className="flex items-center justify-between gap-4 px-2">
              <span className="text-sm font-medium text-gray-700 text-nowrap">
                Recoger en tienda
              </span>

              <PickUpOrDeliveryButton
                checked={isDelivery}
                onChange={() => setIsDelivery((prev) => !prev)}
              />

              <span className="text-sm font-medium text-gray-700 text-nowrap">
                Pedir por delivery
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  const totalAmount = formatPrice(getTotalPrice());
                  handleProceedToPayment({
                    totalAmount,
                    items,
                    isDelivery,
                  });
                }}
                className="w-full bg-[#E56053] hover:bg-[#E56053]/80 text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-3 space-x-2"
              >
                Proceder al Pago <UilWhatsapp className="text-xl" />
              </button>

              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Vaciar Carrito
              </button>
            </div>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-[#E56053] hover:text-[#E56053]/80 font-medium py-2 transition-colors cursor-pointer"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
