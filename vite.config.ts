import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(), // Add WindiCSS plugin
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Add aliases for convenience
    },
  },
});
