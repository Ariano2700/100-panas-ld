import { useState } from "react";
import type { MenuItemInterface } from "../../../../interfaces/MenuItemInterface";
import { useCartStore } from "../../../../store/shoppingCart.store";

function AddItemCartButton({
  id,
  category,
  image,
  name,
  price,
}: MenuItemInterface) {
  const { addItem } = useCartStore();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    setAdded(false);

    await new Promise((resolve) => setTimeout(resolve, 300));

    addItem({
      id,
      name,
      price,
      image,
      category,
    });

    setIsAdding(false);
    setAdded(true);

    setTimeout(() => setAdded(false), 1000); // "Agregado" por 1 segundo
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding || added}
      className={`border border-[#E56053] text-[#E56053] hover:bg-[#E56053] hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
        (isAdding || added) ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isAdding
        ? "Agregando..."
        : added
        ? "Agregado"
        : "Ordenar"}
    </button>
  );
}
export default AddItemCartButton;
