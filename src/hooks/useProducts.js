import { useState, useEffect } from "react";
// Base URL for the simulated product API.
const API_URL = "http://localhost:6001/products";

// Custom hook responsible for loading and managing product data.
function useProducts() {
  const [products, setProducts] = useState([]);
  // Fetch products from the simulated backend when the hook is first used.
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  // Sends a POST request to create a new watch in the backend.
  const addProduct = (newProduct) => {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((createdProduct) => {
        // Add the newly created product to the local React state.
        setProducts((currentProducts) => [...currentProducts, createdProduct]);
        return createdProduct;
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  // Sends a PATCH request to update an existing watch.
  const updateProduct = (id, updatedProduct) => {
    return fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        // Replace the old product with the updated product in React state.
        setProducts((currentProducts) =>
          currentProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          ),
        );
        return updatedProduct;
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return {
    products,
    setProducts,
    addProduct,
    updateProduct,
  };
}

export default useProducts;
