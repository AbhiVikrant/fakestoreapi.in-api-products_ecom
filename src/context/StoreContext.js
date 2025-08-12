import React, { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
   const [sortOption, setSortOption] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch products on first render
  useEffect(() => {
    fetchProduct();
  }, []);
   // Sorting logic
  const sortedProducts = React.useMemo(() => {
    let sorted = [...products];
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "category":
        sorted.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }
    return sorted;
  }, [products, sortOption]);

  return (
    <StoreContext.Provider
      value={{
        products: sortedProducts,
        setProducts,
        sortOption,
        setSortOption,

      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
