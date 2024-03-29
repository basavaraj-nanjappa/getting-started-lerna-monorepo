import { defineConfig } from "vite";
import { UserConfig } from "vite";
import { peerDependencies } from "./package.json";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// Config using promises, useful for more advanced configurations
const config = async (): Promise<UserConfig> => {
  return {
    plugins: [
      react({jsxRuntime: 'classic'}), // https://github.com/vitejs/vite/issues/6215#issuecomment-1076980852
      dts({rollupTypes: true})
    ],
    build: {
      lib: {
        entry: "./src/index.ts",
        name: "project-viewer",
        fileName: (format) => `index.${format}.js`,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: [...Object.keys(peerDependencies)],
      },
      sourcemap: true,
      emptyOutDir: false,
    }
  }
}

export default defineConfig(config);
