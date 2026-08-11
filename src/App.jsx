import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar remains available while navigating between pages. */}
      <Navbar />
      {/* Routes will determine which component is displayed for each URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
