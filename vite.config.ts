import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import tsConfigPath from "vite-tsconfig-paths";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (!env.VITE_API_URL) throw new Error("VITE_API_URL must be specified");
  return {
    plugins: [react(), tsConfigPath()],
    server: {
      host: true,
      open: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});