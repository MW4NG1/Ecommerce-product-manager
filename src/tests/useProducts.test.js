import { renderHook, waitFor } from "@testing-library/react";
import useProducts from "../hooks/useProducts";

// Mock the fetch function so this test does not depend on JSON Server.
global.fetch = vi.fn();
// Tests that the custom hook fetches products correctly.
test("fetches products when the hook loads", async () => {
  const mockProducts = [
    {
      id: 1,
      name: "Heritage Classic",
      description: "A refined timepiece.",
      style: "Classic",
      material: "Stainless Steel",
      price: 189.99,
    },
  ];
  // Provide the response that our mocked GET request should return.
  fetch.mockResolvedValueOnce({
    json: async () => mockProducts,
  });

  const { result } = renderHook(() => useProducts());
  // Wait for the asynchronous GET request to update the hook state.
  await waitFor(() => {
    expect(result.current.products).toEqual(mockProducts);
  });
  // Confirm that the hook requested the correct endpoint.
  expect(fetch).toHaveBeenCalledWith("http://localhost:6001/products");
});
