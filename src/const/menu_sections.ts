import { additionalMenu, burgersMenu, salchipapaMenu } from "./menu";

export const menu_sections = [
  { id: "criollo", label: "Criollo", data: burgersMenu },
  { id: "makis", label: "Makis", data: salchipapaMenu },
  { id: "ceviches", label: "Ceviches", data: additionalMenu },
  { id: "parrillas", label: "Parrillas", data: additionalMenu },
  { id: "combos", label: "Combos", data: additionalMenu },
  { id: "bebidas", label: "Bebidas", data: additionalMenu },
];