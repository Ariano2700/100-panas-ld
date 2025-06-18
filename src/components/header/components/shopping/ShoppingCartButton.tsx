import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { useCartStore } from "../../../../store/shoppingCart.store";
import { LucideShoppingCart } from "../../../../assets/icons/lucide/LucideShoppingCart";

function ShoppingCartButton() {
  const openCart = useCartStore((state) => state.openCart);
  const totalItems = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <button
        className="relative p-2 rounded-full transition-colors hover:text-[#007AB5] hover:bg-white/10 cursor-pointer"
        id="cart-btn"
        type="button"
        onClick={openCart}
      >
        <LucideShoppingCart className="text-xl" />
        <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full text-xs font-medium">
          {mounted && totalItems > 0 ? (
            <span className="bg-[#007AB5] text-white w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          ) : (
            <span className="invisible w-5 h-5" />
          )}
        </span>
      </button>

      {/* Modal solo cuando montado (evita acceso a localStorage en SSR) */}
      {mounted && <ShoppingCart />}
    </>
  );
}
export default ShoppingCartButton;
