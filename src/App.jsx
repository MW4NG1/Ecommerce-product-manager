import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Admin from "./components/Admin";

// Import ProductProvider so product data can be shared across the application.
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      {/* Makes shared product data available to the app */}
      <ProductProvider>
        {/* Navbar will remain available while navigating between pages. */}
        <Navbar />
        {/* Determinea which component is displayed for each URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
