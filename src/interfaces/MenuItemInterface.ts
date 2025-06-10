export interface MenuItemInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: CategoryInterface;
  featured?: boolean;
}

export interface CategoryInterface {
  name: "Hamburgesas" | "Salchipapas" | "Combos" | "Bebidas" | "Adicionales";
}
