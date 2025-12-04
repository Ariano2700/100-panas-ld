import type { MenuItemInterface } from "../interfaces/MenuItemInterface";
import { burgersMenu, drinksMenu, salchipapaMenu } from "./menu";
export interface MenuSectionInterface {
  id: string;
  label: string;
  data: MenuItemInterface[];
}
export const menu_sections: MenuSectionInterface[] = [
  { id: "hamburgesas", label: "Hamburgesas", data: burgersMenu },
  { id: "salchipapas", label: "Salchipapas", data: salchipapaMenu },
  // { id: "adicionales", label: "Adicionales", data: additionalMenu },
  {id: "bebidas", label: "Bebidas", data: drinksMenu},
];
