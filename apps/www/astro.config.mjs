// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules/react")) return "react";
						if (id.includes("node_modules/motion")) return "motion";
					},
				},
			},
		},
	},
	integrations: [react()],
});
