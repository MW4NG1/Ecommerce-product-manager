import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../components/Admin";

// Mock the product context so the test does not depend on JSON Server.
vi.mock("../context/ProductContext", () => ({
  useProductContext: () => ({
    products: [],
    addProduct: vi.fn(),
    updateProduct: vi.fn(),
  }),
}));
// Tests that the administrator can submit the add-watch form.
test("allows the administrator to add a new watch", async () => {
  const user = userEvent.setup();
  render(<Admin />);

  // Fill in the required product fields.
  await user.type(screen.getByLabelText("Watch Name"), "Royal Oak");
  await user.type(
    screen.getByLabelText("Description"),
    "A sophisticated everyday timepiece.",
  );
  await user.type(screen.getByLabelText("Style"), "Luxury");
  await user.type(screen.getByLabelText("Material"), "Stainless Steel");
  await user.type(screen.getByLabelText("Price"), "279.99");
  // Submit the form.
  await user.click(screen.getByRole("button", { name: "Add Watch" }));
  // Confirm that the form has been cleared after submission.
  expect(screen.getByLabelText("Watch Name")).toHaveValue("");
  expect(screen.getByLabelText("Price")).toHaveValue(null);
});
