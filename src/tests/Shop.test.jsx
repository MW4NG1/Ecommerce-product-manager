import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";

// Tests that the search input updates when the user types.
test("allows users to search for watches", async () => {
  const user = userEvent.setup();
  render(<Shop />);
  const searchInput = screen.getByPlaceholderText("Search watches...");
  // Enter a search term into the search field.
  await user.type(searchInput, "Chrono");
  // Confirm that the search state was updated.
  expect(screen.getByText("Searching for: Chrono")).toBeInTheDocument();
});
