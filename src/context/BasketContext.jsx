import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorite = (product) => {
    const isProductInFavorites = favorite.some(
      (item) => item.id === product.id
    );
    if (!isProductInFavorites) {
      const updatedFavorites = [...favorite, product];
      setFavorite(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const deleteFromFavorite = (productId) => {
    const updatedFavorites = favorite.filter((item) => item.id !== productId);
    setFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <ProductContext.Provider
      value={{
        favorite,
        addToFavorite,
        deleteFromFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
