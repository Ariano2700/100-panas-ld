import { useState, useEffect } from "react";
import type {
  MenuItemInterface,
  ProductCustomization,
  ProductCustomizationExtras,
} from "../../../../interfaces/MenuItemInterface";
import { useCartStore } from "../../../../store/shoppingCart.store";
import { saucesMenu, additionalMenu } from "../../../../const/menu";
import { MiClose } from "../../../../assets/icons/mono_icons/MiClose";

interface ProductModalProps {
  product: MenuItemInterface | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem } = useCartStore();
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [potatoType, setPotatoType] = useState<"fritas" | "al-hilo">("fritas");
  const [selectedExtras, setSelectedExtras] = useState<
    ProductCustomizationExtras[]
  >([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedSauces([]);
      setPotatoType("fritas");
      setSelectedExtras([]);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleSauceToggle = (sauceName: string) => {
    setSelectedSauces((prev) =>
      prev.includes(sauceName)
        ? prev.filter((s) => s !== sauceName)
        : [...prev, sauceName]
    );
  };

  const handleExtraToggle = (extra: ProductCustomizationExtras) => {
    setSelectedExtras((prev) => {
      const exists = prev.find((e) => e.name === extra.name);
      return exists
        ? prev.filter((e) => e.name !== extra.name)
        : [...prev, extra];
    });
  };

  const handleAddToCart = async () => {
    setIsAdding(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    const customization: ProductCustomization = {
      sauces: selectedSauces,
      potatoType: potatoType,
      extras: selectedExtras,
    };

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      customization: customization,
    });

    setIsAdding(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Personaliza tu pedido
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <MiClose className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-[#E56053]">
                {product.price}
              </p>
            </div>
          </div>

          {/* Customization Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1: Sauces */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Salsas o Cremas
              </h4>
              <div className="space-y-2">
                {saucesMenu.map((sauce) => (
                  <label
                    key={sauce.id}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSauces.includes(sauce.name)}
                      onChange={() => handleSauceToggle(sauce.name)}
                      className="w-4 h-4 text-[#E56053] border-gray-300 rounded focus:ring-[#E56053]"
                    />
                    <span className="text-gray-700">{sauce.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Column 2: Potato Type & Extras */}
            <div className="space-y-6">
              {/* Potato Type - Solo para hamburguesas */}
              {product.category.name === "Hamburgesas" && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Tipo de Papas
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="potatoType"
                        value="fritas"
                        checked={potatoType === "fritas"}
                        onChange={(e) =>
                          setPotatoType(e.target.value as "fritas" | "al-hilo")
                        }
                        className="w-4 h-4 text-[#E56053] border-gray-300 focus:ring-[#E56053]"
                      />
                      <span className="text-gray-700">Papas Fritas</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="potatoType"
                        value="al-hilo"
                        checked={potatoType === "al-hilo"}
                        onChange={(e) =>
                          setPotatoType(e.target.value as "fritas" | "al-hilo")
                        }
                        className="w-4 h-4 text-[#E56053] border-gray-300 focus:ring-[#E56053]"
                      />
                      <span className="text-gray-700">Papas al Hilo</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Extras */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Adicionales
                </h4>
                <div className="space-y-2">
                  {additionalMenu
                    .filter(
                      (item) =>
                        item.name.toLowerCase().includes("adicional") ||
                        item.name.toLowerCase().includes("extra")
                    )
                    .map((extra) => (
                      <label
                        key={extra.id}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={selectedExtras.some(
                              (e) => e.name === extra.name
                            )}
                            onChange={() =>
                              handleExtraToggle({
                                name: extra.name,
                                price: extra.price,
                              })
                            }
                            className="w-4 h-4 text-[#E56053] border-gray-300 rounded focus:ring-[#E56053]"
                          />
                          <span className="text-gray-700">{extra.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {extra.price}
                        </span>
                      </label>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="cursor-pointer px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`cursor-pointer px-6 py-2 bg-[#E56053] text-white rounded-lg hover:bg-[#d44f43] transition-colors font-medium ${
              isAdding ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isAdding ? "Agregando..." : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
