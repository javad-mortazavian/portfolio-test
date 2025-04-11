import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base: "/portfolio-test",
  optimizeDeps: {
    include: ["flowbite"],
  },
  resolve: {
    alias: {
      '/vite.svg': '/src/vite.svg',
    },
  },
>>>>>>> 40de23ac0b49f1ecbb54e2e3be7923326bd6da61
});
