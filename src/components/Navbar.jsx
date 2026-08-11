import { NavLink } from "react-router-dom";

// Navbar is shared across all pages of the application
function Navbar() {
  return (
    <nav>
      <h2>Oak & Time</h2>

      {/* Links will allow users to move between the three main routes. */}
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/admin">Admin Portal</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
