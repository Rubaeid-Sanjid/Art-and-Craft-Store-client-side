import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  
  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export const useCart = () => useContext(CartContext);
