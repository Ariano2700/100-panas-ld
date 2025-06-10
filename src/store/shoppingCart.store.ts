import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CategoryInterface } from "../interfaces/MenuItemInterface";

export interface ShoppingCartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: CategoryInterface;
}

interface ShoppingCartStore {
  items: ShoppingCartItem[];
  isOpen: boolean;

  // Actions
  addItem: (item: Omit<ShoppingCartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
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
        const existingItem = items.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          set({
            items: items.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
          });
        }
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
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
          const price = Number.parseFloat(item.price.replace("S/ ", ""));
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "shopping-cart-storage", // Name of the storage key
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
