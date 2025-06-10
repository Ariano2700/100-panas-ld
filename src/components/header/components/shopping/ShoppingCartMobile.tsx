import { useEffect, useState } from "react";
import { LucideShoppingCart } from "../../../../assets/icons/lucide/LucideShoppingCart";
import { useCartStore } from "../../../../store/shoppingCart.store";

function ShoppingCartMobile() {
  const { getTotalItems, toggleCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const totalItems = getTotalItems();

  const openCartAndCloseMenu = () => {
    // Cierra el menú móvil si está abierto
    const overlay = document.getElementById("mobile-menu-overlay");
    const bg = document.getElementById("mobile-menu-bg");
    const panel = document.getElementById("mobile-menu-panel");
    if (overlay && bg && panel) {
      toggleCart();
      overlay.classList.remove("pointer-events-auto");
      bg.classList.remove("opacity-100");
      bg.classList.add("opacity-0");
      panel.classList.remove("translate-x-0");
      panel.classList.add("translate-x-full");
      setTimeout(() => {
        overlay.classList.add("pointer-events-none");
        overlay.setAttribute("aria-hidden", "true");
      }, 300);
    }
  };

  return (
    <>
      <button
        className="w-full bg-[#E56053] hover:bg-[#E56053]/80 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-3"
        type="button"
        onClick={openCartAndCloseMenu}
      >
        <LucideShoppingCart />
        Ver Carrito ({mounted && totalItems > 0 ? totalItems : "0"})
      </button>
    </>
  );
}
export default ShoppingCartMobile;
