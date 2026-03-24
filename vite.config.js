// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import { analyzer } from "vite-bundle-analyzer";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(), analyzer()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { analyzer } from "vite-bundle-analyzer";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), analyzer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/tiingo": {
        target: "https://api.tiingo.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tiingo/, ""),
      },
    },
  },
});
