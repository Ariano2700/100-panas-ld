import type {
  MenuItemInterface,
  SaucesMenu,
} from "../interfaces/MenuItemInterface";

export const saucesMenu: SaucesMenu[] = [
  {
    id: 1,
    name: "Mayonesa",
  },
  {
    id: 2,
    name: "Ketchup",
  },
  { id: 3, name: "Tartara" },
  {
    id: 4,
    name: "Mostaza",
  },
  {
    id: 5,
    name: "Aceituna",
  },
  {
    id: 6,
    name: "Ajo",
  },
];
export const burgersMenu: MenuItemInterface[] = [
  {
    id: 1,
    name: "Simple",
    description:
      "Hamburguesa de carne con tomate, lechuga, salsas a elegir y papas fritas.",
    price: "S/ 10.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 2,
    name: "Royal",
    description:
      "Hamburguesa de carne con tomate, lechuga, huevo, salsas a elegir y papas fritas.",
    price: "S/ 11.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 3,
    name: "Cheese",
    description:
      "Hamburguesa de carne con tomate, lechuga, jamón, queso, salsas a elegir y papas fritas.",
    price: "S/ 11.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 4,
    name: "Cubana",
    description:
      "Hamburguesa de carne con tomate, lechuga, huevo, plátano, salsas a elegir y papas fritas.",
    price: "S/ 13.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 5,
    name: "Americana",
    description:
      "Hamburguesa de carne con tomate, lechuga, huevo, tocino, salsas a elegir y papas fritas.",
    price: "S/ 13.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 6,
    name: "Hawaiana",
    description:
      "Hamburguesa de carne con tomate, lechuga, jamón, piña, salsas a elegir y papas fritas.",
    price: "S/ 13.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 7,
    name: "Doble",
    description: "Hamburguesa doble de carne con tomate, lechuga, chorizo.",
    price: "S/ 14.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 8,
    name: "Pa los panas",
    description:
      "Hamburguesa de carne con tomate, lechuga, huevo, queso, tocino, chorizo, salsas a elegir y papas fritas.",
    price: "S/ 18.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: true,
  },
  {
    id: 9,
    name: "Pollo",
    description:
      "Hamburguesa de pollo a la plancha con tomate, lechuga, salsas a elegir y papas fritas.",
    price: "S/ 11.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
  {
    id: 10,
    name: "Choripán",
    description:
      "Sandwich con chorizo, tomate, lechuga, salsas a elegir y papas fritas.",
    price: "S/ 9.00",
    image: "/placeholder.webp",
    category: { name: "Hamburgesas" },
    featured: false,
  },
];

export const salchipapaMenu: MenuItemInterface[] = [
  {
    id: 1,
    name: "Salchipapa",
    description: "Papas fritas con hot dog en rodajas y salsas a elegir.",
    price: "S/ 13.00",
    image: "/placeholder.webp",
    category: { name: "Salchipapas" },
    featured: false,
  },
  {
    id: 2,
    name: "Salchipollo",
    description:
      "Papas fritas con hot dog en rodajas, pollo a la plancha y salsas a elegir.",
    price: "S/ 18.00",
    image: "/placeholder.webp",
    category: { name: "Salchipapas" },
    featured: false,
  },
  {
    id: 3,
    name: "Choripapas",
    description: "Papas fritas con chorizo en rodajas y salsas a elegir.",
    price: "S/ 15.00",
    image: "/placeholder.webp",
    category: { name: "Salchipapas" },
    featured: false,
  },
  {
    id: 4,
    name: "Choripollo",
    description:
      "Papas fritas con chorizo en rodajas, pollo a la plancha y salsas a elegir.",
    price: "S/ 20.00",
    image: "/placeholder.webp",
    category: { name: "Salchipapas" },
    featured: false,
  },
  {
    id: 5,
    name: "Pollipapa",
    description: "Papas fritas y pollo a la plancha con salsas a elegir.",
    price: "S/ 19.00",
    image: "/placeholder.webp",
    category: { name: "Salchipapas" },
    featured: false,
  },
  // {
  //   id: 6,
  //   name: "Mostrito",
  //   description: "Combina arroz chaufa, papas fritas y una porción de broaster.",
  //   price: "S/ 18.00",
  //   image: "/placeholder.webp",
  //   featured: true,
  // },
];

export const additionalMenu: MenuItemInterface[] = [
  {
    id: 1,
    name: "Papas Fritas",
    description: "Porción de papas fritas.",
    price: "S/ 9.00",
    image: "/placeholder.webp",
    category: { name: "Adicionales" },
    featured: false,
  },
  {
    id: 2,
    name: "Porción de Arroz Chaufa",
    description: "Delicioso arroz chaufa como acompañamiento.",
    price: "S/ 10.00",
    image: "/placeholder.webp",
    category: { name: "Adicionales" },
    featured: false,
  },
  {
    id: 3,
    name: "Adicional de huevo",
    description: "Añade un huevo a tu hamburguesa.",
    price: "S/ 1.50",
    image: "/placeholder.webp",
    category: { name: "Adicionales" },
    featured: false,
  },
  {
    id: 4,
    name: "Adicional de plátano frito",
    description: "Añade plátano frito a tu hamburguesa.",
    price: "S/ 1.50",
    image: "/placeholder.webp",
    category: { name: "Adicionales" },
    featured: false,
  },
];

export const drinksMenu: MenuItemInterface[] = [
  {
    id: 1,
    name: "Concordia Sabor Piña",
    description: "Gaseosa Concordia Sabor Piña Botella 500 mL",
    category: { name: "Bebidas" },
    image: "/placeholder.webp",
    price: "S/ 4.00",
    featured: false,
  },
  {
    id: 2,
    name: "Concordia Sabor Fresa",
    description: "Gaseosa Concordia Sabor Fresa Botella 500 mL",
    category: { name: "Bebidas" },
    image: "/placeholder.webp",
    price: "S/ 4.00",
    featured: false,
  },
  {
    id: 3,
    name: "Pepsi",
    description: "Gaseosa Pepsi Botella 355 mL",
    category: { name: "Bebidas" },
    image: "/placeholder.webp",
    price: "S/ 4.00",
    featured: false,
  },
];
