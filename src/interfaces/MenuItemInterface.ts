export interface MenuItemInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: CategoryInterface;
  featured?: boolean;
}

export type CategoryInterface =
  | "hamburguesa"
  | "salchipapa"
  | "pollo"
  | "tequeno"
  | "bebida"
  | "extra";


export type SaucesMenu = {
  id: number;
  name: string;
}

export type ProductCustomizationExtras = {
  name: string;
  price: string;
}

export interface ProductCustomization {
  sauces: string[];
  potatoType?: "fritas" | "al-hilo";
  extras: ProductCustomizationExtras[];
}

export interface CartItemWithCustomization {
  id: number;
  name: string;
  price: string;
  image: string;
  category: CategoryInterface;
  customization?: ProductCustomization;
}
