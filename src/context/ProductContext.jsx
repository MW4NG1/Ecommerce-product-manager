import { createContext, useContext } from "react";
import useProducts from "../hooks/useProducts";

// Create a context that will hold shared product data.
const ProductContext = createContext(null);

// Provides product data and functions to components throughout the app.
export function ProductProvider({ children }) {
  const productData = useProducts();

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom helper for accessing the product context.
export function useProductContext() {
  return useContext(ProductContext);
}
