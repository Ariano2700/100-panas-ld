import { useState } from "react";
import type { MenuItemInterface } from "../../../../interfaces/MenuItemInterface";
import ProductModal from "./ProductModal";
import { useCartStore } from "../../../../store/shoppingCart.store";

function AddItemCartButton({
  id,
  category,
  image,
  name,
  price,
  description,
  featured,
}: MenuItemInterface) {
  const { addItem } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  const product: MenuItemInterface = {
    id,
    name,
    price,
    image,
    category,
    description,
    featured,
  };

  const handleClick = async () => {
    // Si es bebida o adicional, agregar directamente sin modal
    if (product.category === "bebida" || product.category === "extra") {
      setIsAdding(true);
      setAdded(false);

      await new Promise((resolve) => setTimeout(resolve, 300));

      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });

      setIsAdding(false);
      setAdded(true);

      setTimeout(() => setAdded(false), 1000);
    } else {
      // Para hamburguesas y salchipapas, abrir modal
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
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
      
      {/* Solo mostrar modal para categorías con personalización */}
      {product.category !== "bebida" && product.category !== "extra" && (
        <ProductModal
          product={product}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
export default AddItemCartButton;
