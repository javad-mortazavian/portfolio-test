import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-test",
  optimizeDeps: {
    include: ["flowbite"],
  },
  resolve: {
    alias: {
      '/vite.svg': '/src/vite.svg',
    },
  },
});
