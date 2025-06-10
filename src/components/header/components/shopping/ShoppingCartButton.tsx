import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { useCartStore } from "../../../../store/shoppingCart.store";
import { LucideShoppingCart } from "../../../../assets/icons/lucide/LucideShoppingCart";

function ShoppingCartButton() {
  const { getTotalItems, openCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = getTotalItems();

  return (
    <>
      <button
        className="relative p-2 rounded-full transition-colors hover:text-[#E56053] hover:bg-white/10 cursor-pointer"
        id="cart-btn"
        type="button"
        onClick={openCart}
      >
        <LucideShoppingCart className="text-xl" />
        {/* Solo renderiza el badge en el cliente */}
        {mounted && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-[#E56053] text-white text-xs font-medium">
            {totalItems}
          </span>
        )}
      </button>
      <ShoppingCart />
    </>
  );
}
export default ShoppingCartButton;
