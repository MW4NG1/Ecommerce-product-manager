import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

// Admin page allows the administrator to add and edit watches.
function Admin() {
  const { products, addProduct, updateProduct } = useProductContext();
  // Stores the values entered into the add-watch form.
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    style: "",
    material: "",
    price: "",
  });
  // Stores the ID of the watch currently being edited.
  const [editingId, setEditingId] = useState(null);
  // Stores the values for the watch being edited.
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    style: "",
    material: "",
    price: "",
  });

  // Updates the add-watch form whenever the administrator types.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };
  // Sends the new watch to the backend.
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      ...formData,
      price: Number(formData.price),
    };
    addProduct(newProduct);
    setFormData({
      name: "",
      description: "",
      style: "",
      material: "",
      price: "",
    });
  };

  // Loads the selected watch into the edit form.
  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditData({
      name: product.name,
      description: product.description,
      style: product.style,
      material: product.material,
      price: product.price,
    });
  };

  // Updates the edit form as the administrator changes a value.
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  // Sends the edited watch to the backend using PATCH.
  const handleUpdate = (event) => {
    event.preventDefault();
    updateProduct(editingId, {
      ...editData,
      price: Number(editData.price),
    });
    // Exit edit mode after updating the watch.
    setEditingId(null);
  };

  return (
    <main>
      <h1>Admin Portal</h1>
      <p>Manage the Oak & Time product collection.</p>
      {/* Form used to create a new watch. */}
      <form onSubmit={handleSubmit}>
        <h2>Add a Watch</h2>

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

      {/* Display existing watches so the administrator can edit them. */}
      <section>
        <h2>Manage Watches</h2>

        {products.map((product) => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
          </article>
        ))}
      </section>
      {/* Form only appears when a watch is being edited. */}
      {editingId !== null && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Watch</h2>

          <label htmlFor="edit-name">Watch Name</label>
          <input
            id="edit-name"
            name="name"
            type="text"
            value={editData.name}
            onChange={handleEditChange}
            required
          />

          <label htmlFor="edit-description">Description</label>
          <input
            id="edit-description"
            name="description"
            type="text"
            value={editData.description}
            onChange={handleEditChange}
            required
          />

          <label htmlFor="edit-style">Style</label>
          <input
            id="edit-style"
            name="style"
            type="text"
            value={editData.style}
            onChange={handleEditChange}
            required
          />

          <label htmlFor="edit-material">Material</label>
          <input
            id="edit-material"
            name="material"
            type="text"
            value={editData.material}
            onChange={handleEditChange}
            required
          />

          <label htmlFor="edit-price">Price</label>
          <input
            id="edit-price"
            name="price"
            type="number"
            step="0.01"
            value={editData.price}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      )}
    </main>
  );
}

export default Admin;
