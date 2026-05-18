// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://formulatech-hacks.pages.dev";

// https://astro.build/config
export default defineConfig({
	site,
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
	image: {
		service: {
			entrypoint: "astro/assets/services/sharp",
		},
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
	prefetch: false,
	integrations: [
		react(),
		sitemap({
			filter: (page) => !page.includes("/dashboard"),
		}),
	],
});
