import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const API_URL = process.env.API_URL || "http://localhost:3000/api/v1/";
//const API_URL=https://adn-api-rest.onrender.com/api/v1/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": {
      API_BASE_URL: API_URL,
    },
  },
});
