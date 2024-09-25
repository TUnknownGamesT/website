import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/video", dest: "dist/videos" }, // Adjust paths as needed
      ],
    }),
  ],
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
