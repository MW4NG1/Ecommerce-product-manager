import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

// Tests that the Home page displays the main Oak & Time content.
test("renders the Oak & Time home page", () => {
  render(<Home />);
  // Check that the store name is displayed to the user.
  expect(
    screen.getByRole("heading", { name: "Oak & Time" }),
  ).toBeInTheDocument();
  // Check that the store tagline is displayed.
  expect(
    screen.getByText("Timeless pieces. Modern character."),
  ).toBeInTheDocument();
});
