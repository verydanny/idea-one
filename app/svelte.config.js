import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from 'svelte-adapter-bun'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      '$src/*': './src/*'
    },
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      precompress: {
        brotli: true,
        files: ['html', 'js', 'json', 'css', 'svg', 'xml', 'wasm']
      }
    })
  }
}

export default config
