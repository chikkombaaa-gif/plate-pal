import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/burger.jpg";
import biryani from "@/assets/biryani.jpg";
import paneer from "@/assets/paneer.jpg";
import noodles from "@/assets/noodles.jpg";
import dessert from "@/assets/dessert.jpg";
import beverage from "@/assets/beverage.jpg";
import healthy from "@/assets/healthy.jpg";
import chilliChicken from "@/assets/chilli-chicken.jpg";

export type Category =
  | "Pizza"
  | "Burgers"
  | "Biryani"
  | "Indian"
  | "Chinese"
  | "Desserts"
  | "Beverages"
  | "Healthy";

export const categories: { name: "All" | Category; emoji: string }[] = [
  { name: "All", emoji: "🍽️" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Biryani", emoji: "🍛" },
  { name: "Indian", emoji: "🥘" },
  { name: "Chinese", emoji: "🥡" },
  { name: "Desserts", emoji: "🍰" },
  { name: "Beverages", emoji: "🥤" },
  { name: "Healthy", emoji: "🥗" },
];

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  restaurant: string;
  category: Category;
  rating: number;
  price: number;
  veg: boolean;
  image: string;
  tag?: string;
};

export const foodItems: FoodItem[] = [
  {
    id: "f1",
    name: "Margherita Napoletana",
    description: "San Marzano tomato, fior di latte, torn basil, 48-hour dough.",
    restaurant: "Forno Rosso",
    category: "Pizza",
    rating: 4.7,
    price: 349,
    veg: true,
    image: pizza,
    tag: "Bestseller",
  },
  {
    id: "f2",
    name: "Truffle Pepperoni Pizza",
    description: "Double pepperoni, truffle cream drizzle, aged mozzarella.",
    restaurant: "Forno Rosso",
    category: "Pizza",
    rating: 4.6,
    price: 499,
    veg: false,
    image: pizza,
  },
  {
    id: "f3",
    name: "Smoky Double Cheeseburger",
    description: "Two smashed patties, cheddar, house burger sauce, brioche bun.",
    restaurant: "Ember & Bun",
    category: "Burgers",
    rating: 4.8,
    price: 289,
    veg: false,
    image: burger,
    tag: "Trending",
  },
  {
    id: "f4",
    name: "Crispy Paneer Burger",
    description: "Masala-crumbed paneer, mint slaw, chilli mayo.",
    restaurant: "Ember & Bun",
    category: "Burgers",
    rating: 4.4,
    price: 229,
    veg: true,
    image: burger,
  },
  {
    id: "f5",
    name: "Hyderabadi Dum Biryani",
    description: "Slow-cooked chicken, saffron basmati, served with mirchi ka salan.",
    restaurant: "Nizam's Handi",
    category: "Biryani",
    rating: 4.9,
    price: 379,
    veg: false,
    image: biryani,
    tag: "Top rated",
  },
  {
    id: "f6",
    name: "Veg Kacchi Biryani",
    description: "Garden vegetables, fried onion, whole spices, burani raita.",
    restaurant: "Nizam's Handi",
    category: "Biryani",
    rating: 4.3,
    price: 299,
    veg: true,
    image: biryani,
  },
  {
    id: "f7",
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy, kasuri methi, two butter naan.",
    restaurant: "Copper Tandoor",
    category: "Indian",
    rating: 4.6,
    price: 319,
    veg: true,
    image: paneer,
  },
  {
    id: "f8",
    name: "Butter Chicken Thali",
    description: "Tandoori chicken in silky makhani gravy, naan, jeera rice.",
    restaurant: "Copper Tandoor",
    category: "Indian",
    rating: 4.7,
    price: 399,
    veg: false,
    image: paneer,
  },
  {
    id: "f9",
    name: "Veg Hakka Noodles",
    description: "Wok-tossed noodles, julienned veggies, house schezwan oil.",
    restaurant: "Wok Republic",
    category: "Chinese",
    rating: 4.2,
    price: 219,
    veg: true,
    image: noodles,
  },
  {
    id: "f10",
    name: "Dragon Chilli Chicken",
    description: "Crispy chicken, burnt garlic, spring onion, fiery dry toss.",
    restaurant: "Wok Republic",
    category: "Chinese",
    rating: 4.5,
    price: 269,
    veg: false,
    image: chilliChicken,
    tag: "Spicy",
  },
  {
    id: "f11",
    name: "Molten Chocolate Lava Cake",
    description: "Warm dark chocolate centre with Madagascar vanilla scoop.",
    restaurant: "Sugar Alley",
    category: "Desserts",
    rating: 4.8,
    price: 199,
    veg: true,
    image: dessert,
  },
  {
    id: "f12",
    name: "Classic Tiramisu Jar",
    description: "Espresso-soaked savoiardi, mascarpone cream, cocoa dust.",
    restaurant: "Sugar Alley",
    category: "Desserts",
    rating: 4.5,
    price: 249,
    veg: true,
    image: dessert,
  },
  {
    id: "f13",
    name: "Cold Coffee Frappe",
    description: "Double-shot cold brew blended with milk and chocolate.",
    restaurant: "Brew & Co.",
    category: "Beverages",
    rating: 4.4,
    price: 179,
    veg: true,
    image: beverage,
  },
  {
    id: "f14",
    name: "Alphonso Mango Lassi",
    description: "Thick curd, alphonso pulp, cardamom, pistachio slivers.",
    restaurant: "Brew & Co.",
    category: "Beverages",
    rating: 4.6,
    price: 149,
    veg: true,
    image: beverage,
  },
  {
    id: "f15",
    name: "Grilled Chicken Quinoa Bowl",
    description: "Herb chicken, quinoa, avocado, lemon tahini dressing.",
    restaurant: "Green Fork",
    category: "Healthy",
    rating: 4.5,
    price: 349,
    veg: false,
    image: healthy,
  },
  {
    id: "f16",
    name: "Avocado Super Bowl",
    description: "Quinoa, chickpea, roasted veg, seeds and citrus vinaigrette.",
    restaurant: "Green Fork",
    category: "Healthy",
    rating: 4.3,
    price: 299,
    veg: true,
    image: healthy,
    tag: "High protein",
  },
];

export type Restaurant = {
  id: string;
  name: string;
  cuisines: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  image: string;
  offer: string;
};

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Nizam's Handi",
    cuisines: "Biryani • Mughlai • Kebabs",
    rating: 4.9,
    deliveryTime: "25-30 min",
    priceForTwo: 600,
    image: biryani,
    offer: "50% OFF up to ₹120",
  },
  {
    id: "r2",
    name: "Forno Rosso",
    cuisines: "Pizza • Italian • Pasta",
    rating: 4.7,
    deliveryTime: "30-35 min",
    priceForTwo: 750,
    image: pizza,
    offer: "Free garlic bread",
  },
  {
    id: "r3",
    name: "Ember & Bun",
    cuisines: "Burgers • Fries • Shakes",
    rating: 4.8,
    deliveryTime: "20-25 min",
    priceForTwo: 450,
    image: burger,
    offer: "Buy 1 Get 1",
  },
  {
    id: "r4",
    name: "Wok Republic",
    cuisines: "Chinese • Asian • Noodles",
    rating: 4.5,
    deliveryTime: "30-40 min",
    priceForTwo: 500,
    image: noodles,
    offer: "₹100 OFF above ₹499",
  },
  {
    id: "r5",
    name: "Copper Tandoor",
    cuisines: "North Indian • Tandoor",
    rating: 4.6,
    deliveryTime: "35-45 min",
    priceForTwo: 700,
    image: paneer,
    offer: "20% OFF all day",
  },
  {
    id: "r6",
    name: "Green Fork",
    cuisines: "Healthy • Salads • Bowls",
    rating: 4.4,
    deliveryTime: "25-35 min",
    priceForTwo: 550,
    image: healthy,
    offer: "Free cold-pressed juice",
  },
];

export const offers = [
  {
    code: "FOODIE50",
    title: "50% OFF your first order",
    subtitle: "Up to ₹150 off on orders above ₹299",
    accent: "from-primary/90 to-primary/60",
  },
  {
    code: "FREEDEL",
    title: "Free delivery all week",
    subtitle: "No delivery fee on orders above ₹499",
    accent: "from-secondary/95 to-secondary/70",
  },
  {
    code: "LATE100",
    title: "₹100 OFF late-night cravings",
    subtitle: "Valid between 10 PM and 2 AM",
    accent: "from-veg/90 to-veg/60",
  },
];

export const promoCodes: Record<string, number> = {
  FOODIE50: 0.5,
  FREEDEL: 0.1,
  LATE100: 0.2,
};

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
