import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const getPath = (path: string): string => resolve(__dirname, `src/${path}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": getPath("assets"),
      "@common": getPath("common"),
      "@modules": getPath("modules"),
      "@pages": getPath("pages"),
      "@interface": getPath("types"),
      "@services": getPath("services"),
      "@shared/components": getPath("shared/components"),
      "@shared/containers": getPath("shared/containers"),
      "@shared/dialogs": getPath("shared/dialogs"),
      "@shared/entities": getPath("shared/entities"),
      "@shared/enums": getPath("shared/enums"),
      "@shared/hooks": getPath("shared/hooks"),
      "@shared/layouts": getPath("shared/layouts"),
    },
  },
});
