import { createContext } from "react";
import { Product } from "../../types/product.type";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);