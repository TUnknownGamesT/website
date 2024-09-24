import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../API/wwwroot",
  },
  preview: {
    port: 3000,
  },
  server: {
    port: 3001,
  },
});
