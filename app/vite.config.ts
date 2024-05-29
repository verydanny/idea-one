import { sveltekit } from '@sveltejs/kit/vite'
import { purgeCss } from 'vite-plugin-tailwind-purgecss'
import { visualizer } from 'rollup-plugin-visualizer'
// import { enhancedImages } from '@sveltejs/enhanced-img'
import { type UserConfig, defineConfig } from 'vitest/config'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        'tailwind-merge': './node_modules/tailwind-merge/dist/bundle-mjs.mjs'
      }
    },
    plugins: [
      sveltekit(),
      purgeCss()
      // purgeCss()
      // visualizer({ open: true })
    ],
    build: {
      sourcemap: true,
      modulePreload: {
        polyfill: false
      },
      target: 'esnext'
      // rollupOptions: {
      //   external
      // }
    },
    esbuild: {
      target: 'esnext'
    },
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}']
    },
    server: {
      port: Bun.env.PORT ? Number(Bun.env.PORT) : 3002
    }
  } satisfies UserConfig
})
