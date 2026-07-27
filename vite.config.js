//

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // node: をつけるのが今の安全な書き方
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", { target: "18" }]],
      },
    }),
  ],
  base: "/juicizm/",
  css: {
    preprocessorOptions: {
      scss: {
        // パスを解決してから渡す
        additionalData: `@use "${path.resolve(__dirname, "src/assets/sass/_settings.scss").replace(/\\/g, "/")}" as *;`,
      },
    },
  },
});
