import React, { createContext, useState, useContext } from "react";

// Create a context
const PriceContext = createContext();

// Create a provider component
export const PriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const handleBuy = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
    setShowTotalPrice(true);
  }

  return (
    <PriceContext.Provider value={{ totalPrice, showTotalPrice, handleBuy }}>
      {children}
    </PriceContext.Provider>
  );
};

// Custom hook for easier access
export const useTotalPrice = () => useContext(PriceContext);
