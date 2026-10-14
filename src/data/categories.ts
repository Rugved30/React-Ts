
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
  slug:string
}

export const categories: Category[] = [
  { id: 1, name: "For You", icon: ShoppingBag, slug:"for_you" },
  { id: 2, name: "Fashion", icon: Shirt, slug:"fashion" },
  { id: 3, name: "Mobiles", icon: Smartphone, slug:"mobiles"  },
  { id: 4, name: "Electronics", icon: Laptop, slug:"electronics"  },
  { id: 5, name: "Beauty", icon: SprayCan, slug:"beauty"  },
  { id: 6, name: "Home", icon: Lamp, slug:"home-equipments"  },
  { id: 7, name: "Appliances", icon: Tv, slug:"appliances"  },
  { id: 8, name: "Toys, Baby & More", icon: ToyBrick, slug:"toys"  },
  { id: 9, name: "Food & Health", icon: CookingPot, slug:"food"  },
  { id: 10, name: "Auto Accessories", icon: ShoppingBag, slug:"auto"  },
  { id: 11, name: "Sports & Fitness", icon: Dumbbell, slug:"sports"  },
  { id: 12, name: "Furniture", icon: Armchair, slug:"furniture"  },
  { id: 13, name: "Books", icon: BookOpen, slug:"books"  },
  { id: 14, name: "2 Wheelers", icon: Bike, slug:"wheelers"  },
];
