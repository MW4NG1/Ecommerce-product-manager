import { useState, useEffect } from "react";

// Custom hook responsible for loading and managing product data.
function useProducts() {
  const [products, setProducts] = useState([]);

  // Load the products from our backend when the hook is first used.
  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return {
    products,
    setProducts,
  };
}

export default useProducts;
