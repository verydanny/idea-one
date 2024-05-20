import { sveltekit } from '@sveltejs/kit/vite'
import { purgeCss } from 'vite-plugin-tailwind-purgecss'
// import { visualizer } from 'rollup-plugin-visualizer'
import { type UserConfig, defineConfig } from 'vitest/config'

export default defineConfig(() => {
	return {
		plugins: [sveltekit(), purgeCss()],
		build: {
			sourcemap: true,
			modulePreload: {
				polyfill: false
			},
			target: 'esnext'
		},
		esbuild: {
			target: 'esnext'
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	} satisfies UserConfig
})
