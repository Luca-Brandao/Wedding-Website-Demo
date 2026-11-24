import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "lottie-web": "lottie-web/build/player/lottie_light.min"
    }
  },
  server: {
    port: 5173
  },
  build: {
    sourcemap: false
  }
});
