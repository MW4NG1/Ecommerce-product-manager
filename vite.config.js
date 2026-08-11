import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration also includes the settings needed by Vitest.
export default defineConfig({
  plugins: [react()],
  // Configure Vitest to use a browser-like environment for React tests.
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
  },
});
