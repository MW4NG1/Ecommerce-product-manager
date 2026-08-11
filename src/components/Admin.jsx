import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

// Admin page allows the administrator to add new watches.
function Admin() {
  const { addProduct } = useProductContext();
  // Stores the values entered into the product form.
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    style: "",
    material: "",
    price: "",
  });

  // Updates the matching form field whenever the administrator types.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };
  // Sends the completed form data to the backend.
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      ...formData,
      price: Number(formData.price),
    };
    addProduct(newProduct);
    // Clear the form after the watch has been submitted.
    setFormData({
      name: "",
      description: "",
      style: "",
      material: "",
      price: "",
    });
  };

  return (
    <main>
      <h1>Admin Portal</h1>
      <p>Add a new watch to the Oak & Time collection.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Watch Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="style">Style</label>
        <input
          id="style"
          name="style"
          type="text"
          value={formData.style}
          onChange={handleChange}
          required
        />

        <label htmlFor="material">Material</label>
        <input
          id="material"
          name="material"
          type="text"
          value={formData.material}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Watch</button>
      </form>
    </main>
  );
}

export default Admin;
