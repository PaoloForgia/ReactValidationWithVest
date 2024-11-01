import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

process.env.BROWSER = "/Applications/Arc.app";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
