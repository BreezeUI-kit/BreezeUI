import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.html",
      name: "BreezeUI",
      fileName: (format) => `breezeui.${format}.js`,
    },
    rollupOptions: {
      // externals like react/react-dom
      external: ["react", "react-dom"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
    },
  },
  server: {
    port: 5173, // so Storybook default 6006 doesn’t conflict
  },
});
