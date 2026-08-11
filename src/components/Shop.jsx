import { useState } from "react";

// Shop will display the available watches and search functionality
function Shop() {
    // Stores the text entered into the search bar.
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <h1>Our Collection</h1>

      {/* Search input updates searchTerm whenever the user types */}
      <input
        type="text"
        placeholder="Search watches..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {/* Later replaced with filtered product list */}
      <p>Searching for: {searchTerm}</p>
    </main>
  );
}

export default Shop;
