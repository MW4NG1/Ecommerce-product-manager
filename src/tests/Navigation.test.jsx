import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";

// Tests that users can navigate between the main application routes.
test("allows users to navigate through the main routes", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  // Check that all three navigation links are displayed.
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Admin Portal" }),
  ).toBeInTheDocument();
  // Click the Shop link to test user navigation.
  await user.click(screen.getByRole("link", { name: "Shop" }));
  // Verify that the Shop link points to the correct route.
  expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
    "href",
    "/shop",
  );
});
