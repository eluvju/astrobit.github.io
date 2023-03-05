import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrobit.github.io',
  base: '/astrobit.github.io',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), compress()]
});