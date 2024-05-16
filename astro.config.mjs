import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://astronaut.github.io',
  base: '/Technologies-Porject-4/'
});
