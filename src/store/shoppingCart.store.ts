import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CategoryInterface, ProductCustomization } from "../interfaces/MenuItemInterface";
import { getExtraPrice } from "../lib/getExtraPrice";

export interface ShoppingCartItem {
  id: number;
  cartItemId: string; // ID único para el carrito (combina id + timestamp)
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: CategoryInterface;
  customization?: ProductCustomization;
}

interface ShoppingCartStore {
  items: ShoppingCartItem[];
  isOpen: boolean;

  // Actions
  addItem: (item: Omit<ShoppingCartItem, "quantity" | "cartItemId">) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<ShoppingCartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const { items } = get();
        // Siempre agregar como item nuevo cuando tiene personalización
        // o si no existe en el carrito
        if (item.customization) {
          const cartItemId = `${item.id}-${Date.now()}-${Math.random()}`;
          set({
            items: [...items, { ...item, cartItemId, quantity: 1 }],
          });
        } else {
          const existingItem = items.find((cartItem) => cartItem.id === item.id && !cartItem.customization);

          if (existingItem) {
            set({
              items: items.map((cartItem) =>
                cartItem.id === item.id && !cartItem.customization
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            });
          } else {
            const cartItemId = `${item.id}-${Date.now()}`;
            set({
              items: [...items, { ...item, cartItemId, quantity: 1 }],
            });
          }
        }
      },

      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        }));
      },

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const basePrice = Number.parseFloat(item.price.replace("S/ ", ""));
          let itemTotal = basePrice * item.quantity;
          
          // Sumar precios de extras si existen
          if (item.customization?.extras && item.customization.extras.length > 0) {
            const extrasPrice = item.customization.extras.reduce((extrasTotal, extra) => {
              return extrasTotal + getExtraPrice(extra.name);
            }, 0);
            
            itemTotal += extrasPrice * item.quantity;
          }
          
          return total + itemTotal;
        }, 0);
      },
    }),
    {
      name: "shopping-cart-storage", // Name of the storage key
      partialize: (state) => ({
        items: state.items,
      }),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        // Migrar items antiguos sin cartItemId
        if (version === 0 && persistedState?.items) {
          persistedState.items = persistedState.items.map((item: any, index: number) => {
            if (!item.cartItemId) {
              return {
                ...item,
                cartItemId: `${item.id}-migrated-${index}-${Date.now()}`,
              };
            }
            return item;
          });
        }
        return persistedState;
      },
    }
  )
);
