import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { codeInspectorPlugin } from 'code-inspector-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    react()
  ],
  base: "/sc-datav/",
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});
