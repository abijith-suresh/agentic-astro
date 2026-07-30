import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    // biome-ignore lint/suspicious/noExplicitAny: vite version mismatch between astro & project
    plugins: [tailwindcss() as any],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
