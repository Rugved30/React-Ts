
import {
  ShoppingBag,
  Shirt,
  Smartphone,
  Laptop,
  SprayCan,
  Lamp,
  Tv,
  ToyBrick,
  CookingPot,
  Dumbbell,
  Armchair,
  BookOpen,
  Bike,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { id: 1, name: "For You", icon: ShoppingBag },
  { id: 2, name: "Fashion", icon: Shirt },
  { id: 3, name: "Mobiles", icon: Smartphone },
  { id: 4, name: "Electronics", icon: Laptop },
  { id: 5, name: "Beauty", icon: SprayCan },
  { id: 6, name: "Home", icon: Lamp },
  { id: 7, name: "Appliances", icon: Tv },
  { id: 8, name: "Toys, Baby & More", icon: ToyBrick },
  { id: 9, name: "Food & Health", icon: CookingPot },
  { id: 10, name: "Auto Accessories", icon: ShoppingBag },
  { id: 11, name: "Sports & Fitness", icon: Dumbbell },
  { id: 12, name: "Furniture", icon: Armchair },
  { id: 13, name: "Books", icon: BookOpen },
  { id: 14, name: "2 Wheelers", icon: Bike },
];
