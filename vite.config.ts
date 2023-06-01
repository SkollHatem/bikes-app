import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Atoms": path.join(__dirname, "src", "components", "atoms"),
      "@Molecules": path.join(__dirname, "src", "components", "molecules"),
      "@Organisms": path.join(__dirname, "src", "components", "organisms"),
      "@Utils": path.join(__dirname, "src", "utils"),
      "@Hooks": path.join(__dirname, "src", "hooks"),
    },
  },
});
