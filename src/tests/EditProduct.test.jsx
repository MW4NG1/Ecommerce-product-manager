import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../components/Admin";

// Mock the product context so the test can focus on the Admin component.
const updateProductMock = vi.fn();

vi.mock("../context/ProductContext", () => ({
  useProductContext: () => ({
    products: [
      {
        id: 1,
        name: "Heritage Classic",
        description: "A refined timepiece.",
        style: "Classic",
        material: "Stainless Steel",
        price: 189.99,
      },
    ],
    addProduct: vi.fn(),
    updateProduct: updateProductMock,
  }),
}));

// Tests that an administrator can edit an existing watch.
test("allows the administrator to edit a watch", async () => {
  const user = userEvent.setup();
  render(<Admin />);
  // Select the existing watch for editing.
  await user.click(screen.getByRole("button", { name: "Edit" }));
  // Change the existing price.
  const priceInput = screen.getByLabelText("Edit Price", { exact: true });
  await user.clear(priceInput);
  await user.type(priceInput, "199.99");
  // Submit the changes.
  await user.click(screen.getByRole("button", { name: "Save Changes" }));
  // Confirm that the PATCH update function was called with the
  // selected product ID and the updated product information.
  expect(updateProductMock).toHaveBeenCalledWith(
    1,
    expect.objectContaining({
      name: "Heritage Classic",
      price: 199.99,
    }),
  );
});
