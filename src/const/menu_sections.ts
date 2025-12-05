import type { MenuItemInterface } from "../interfaces/MenuItemInterface";
import { burgersMenu, chickenMenu, drinksMenu, extrasMenu, salchipapaMenu, tequenosMenu } from "./menu";
export interface MenuSectionInterface {
  id: string;
  label: string;
  data: MenuItemInterface[];
}
export const menu_sections: MenuSectionInterface[] = [
  { id: "hamburguesas", label: "Hamburguesas", data: burgersMenu },
  { id: "salchipapas", label: "Salchipapas", data: salchipapaMenu },
  { id: "pollo", label: "Pollo y broaster", data: chickenMenu },
  { id: "tequenos", label: "Tequeños", data: tequenosMenu },
  { id: "bebidas", label: "Bebidas", data: drinksMenu },
  { id: "adicionales", label: "Adicionales", data: extrasMenu },
];
