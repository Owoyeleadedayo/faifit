"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number; 
  title: string;
  img: string;
  price: number;      
  quantity: number;
  color: string;
  size: string;
}

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, color: string, size: string) => void;
  clearCart: () => void;
  openCart: () => void;   
  closeCart: () => void;  
  isCartOpen: boolean;    
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Initialize cart directly from localStorage (only in browser)
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );
  
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id: number, color: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.color === color && item.size === size)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        openCart,
        closeCart,
        isCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
