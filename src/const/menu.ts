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
// Puedes definir tus categorías como un enum u otra interfaz
// HAMBURGUESAS
export const burgersMenu: MenuItemInterface[] = [
  {
    id: 1,
    name: "Simple",
    description: "Ensalada, carne y papas fritas",
    price: "9.00",
    image: "/img/burgers/simple.jpg",
    category: "hamburguesa",
    featured: false,
  },
  {
    id: 2,
    name: "Royal",
    description: "Ensalada, carne, huevo y papas",
    price: "10.00",
    image: "/img/burgers/royal.jpg",
    category: "hamburguesa",
  },
  {
    id: 3,
    name: "Chess",
    description: "Ensalada, carne, jamón, queso y papas",
    price: "11.00",
    image: "/img/burgers/chess.jpg",
    category: "hamburguesa",
  },
  {
    id: 4,
    name: "Cubana",
    description: "Ensalada, carne, huevo, plátano y papas",
    price: "11.00",
    image: "/img/burgers/cubana.jpg",
    category: "hamburguesa",
  },
  {
    id: 5,
    name: "Americana",
    description: "Ensalada, carne, huevo, tocino, papas",
    price: "12.00",
    image: "/img/burgers/americana.jpg",
    category: "hamburguesa",
  },
  {
    id: 6,
    name: "Hawaiana",
    description: "Ensalada, carne, jamón, piña, papas",
    price: "12.00",
    image: "/img/burgers/hawaiana.jpg",
    category: "hamburguesa",
  },
  {
    id: 7,
    name: "Doble",
    description: "Ensalada, doble carne y chorizo",
    price: "13.00",
    image: "/img/burgers/doble.jpg",
    category: "hamburguesa",
  },
  {
    id: 8,
    name: "Pa’ los Panas",
    description: "Ensalada, carne, huevo, queso, tocino, chorizo y papas",
    price: "17.00",
    image: "/img/burgers/panas.jpg",
    category: "hamburguesa",
    featured: true,
  },
  {
    id: 9,
    name: "Sándwich",
    description: "Ensalada, huevo, jamón, queso",
    price: "7.50",
    image: "/img/burgers/sandwich.jpg",
    category: "hamburguesa",
  },
  {
    id: 10,
    name: "Pollo",
    description: "Ensalada, pollo a la plancha y papas",
    price: "10.50",
    image: "/img/burgers/pollo.jpg",
    category: "hamburguesa",
  },
  {
    id: 11,
    name: "Choripán",
    description: "Ensalada, chorizo y papas",
    price: "8.00",
    image: "/img/burgers/choripan.jpg",
    category: "hamburguesa",
  },
];

// SALCHIPAPAS / PAPPAS
export const salchipapaMenu: MenuItemInterface[] = [
  {
    id: 20,
    name: "Salchipollo",
    description: "Papas fritas, hot dog y pollo",
    price: "17.00",
    image: "/img/salchipapas/salchipollo.jpg",
    category: "salchipapa",
  },
  {
    id: 21,
    name: "Pollipapa",
    description: "Papas fritas con pollo",
    price: "17.00",
    image: "/img/salchipapas/pollipapa.jpg",
    category: "salchipapa",
  },
  {
    id: 22,
    name: "Choripapas",
    description: "Papas fritas con chorizo",
    price: "14.00",
    image: "/img/salchipapas/choripapas.jpg",
    category: "salchipapa",
  },
  {
    id: 23,
    name: "Choripollo",
    description: "Papas fritas con chorizo y pollo",
    price: "18.00",
    image: "/img/salchipapas/choripollo.jpg",
    category: "salchipapa",
  },
  {
    id: 24,
    name: "Porción de papas",
    description: "Solo papas fritas",
    price: "8.50",
    image: "/img/salchipapas/papas.jpg",
    category: "salchipapa",
  },
];

// POLLO / BROASTER / MOSTRITO / ALITAS
export const chickenMenu: MenuItemInterface[] = [
  {
    id: 30,
    name: "Pollo broaster",
    description: "Papas fritas y 1 pieza de broaster",
    price: "15.50",
    image: "/img/pollo/pollo-broaster.jpg",
    category: "pollo",
  },
  {
    id: 31,
    name: "Mostrito",
    description: "Papas fritas, arroz chaufa y pollo broaster",
    price: "17.00",
    image: "/img/pollo/mostrito.jpg",
    category: "pollo",
    featured: true,
  },
  {
    id: 32,
    name: "Alitas broaster",
    description: "Papas fritas y 5 piezas de alitas broaster",
    price: "19.00",
    image: "/img/pollo/alitas-broaster.jpg",
    category: "pollo",
  },
  {
    id: 33,
    name: "Alitas BBQ",
    description: "Papas fritas y alitas BBQ",
    price: "20.00",
    image: "/img/pollo/alitas-bbq.jpg",
    category: "pollo",
  },
];

// TEQUEÑOS
export const tequenosMenu: MenuItemInterface[] = [
  {
    id: 40,
    name: "10 Tequeños",
    description: "Porción de 10 tequeños",
    price: "12.00",
    image: "/img/tequenos/10.jpg",
    category: "tequeno",
  },
  {
    id: 41,
    name: "5 Tequeños",
    description: "Porción de 5 tequeños",
    price: "6.00",
    image: "/img/tequenos/5.jpg",
    category: "tequeno",
  },
];

// BEBIDAS
export const drinksMenu: MenuItemInterface[] = [
  {
    id: 50,
    name: "Maracuyá",
    description: "Jugo de maracuyá",
    price: "2.00",
    image: "/img/bebidas/maracuya.jpg",
    category: "bebida",
  },
  {
    id: 51,
    name: "Gaseosa",
    description: "Gaseosa en vaso",
    price: "2.00",
    image: "/img/bebidas/gaseosa.jpg",
    category: "bebida",
  },
  {
    id: 52,
    name: "Cebada",
    description: "Refresco de cebada",
    price: "2.00",
    image: "/img/bebidas/cebada.jpg",
    category: "bebida",
  },
  {
    id: 53,
    name: "Agua",
    description: "Agua embotellada",
    price: "2.00",
    image: "/img/bebidas/agua.jpg",
    category: "bebida",
  },
];

// EXTRAS / ADICIONALES
export const extrasMenu: MenuItemInterface[] = [
  { id: 60, name: "Jamón", description: "Extra de jamón", price: "1.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 61, name: "Queso", description: "Extra de queso", price: "1.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 62, name: "Huevo", description: "Extra de huevo", price: "1.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 63, name: "Plátano", description: "Extra de plátano", price: "1.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 64, name: "Tocino", description: "Extra de tocino", price: "2.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 65, name: "Hot dog", description: "Extra de hot dog", price: "2.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 66, name: "Piña", description: "Extra de piña", price: "2.50", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 67, name: "Chorizo", description: "Extra de chorizo", price: "3.00", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 68, name: "Carne", description: "Extra de carne", price: "5.00", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 69, name: "Pollo", description: "Extra de pollo", price: "6.00", image: "/placeholder.svg?height=200&width=300", category: "extra" },
  { id: 70, name: "Pieza pollo broaster", description: "Extra de pieza broaster", price: "6.00", image: "/placeholder.svg?height=200&width=300", category: "extra" },
];
