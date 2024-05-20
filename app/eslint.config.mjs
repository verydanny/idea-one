import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import svelteEslint from 'eslint-plugin-svelte'
import global from 'globals'
import tseslint from 'typescript-eslint'

const ignores = [
	'**/.DS_Store',
	'**/node_modules',
	'**/build',
	'**/.svelte-kit',
	'**/package',
	'**/.env',
	'**/.env.*',
	'**/!.env.example',
	'**/pnpm-lock.yaml',
	'**/package-lock.json',
	'**/yarn.lock'
]

const globals = {
	...global.browser,
	...global.node,
	...global.es2021
}

/** @type { import("eslint").Linter.FlatConfig } */
export default tseslint.config(
	{
		files: ['**/*.{js,mjs,ts,svelte}'],
		languageOptions: {
			sourceType: 'module',
			globals
		}
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended.map((config) => ({
		...config,
		languageOptions: {
			...config.languageOptions,
			parserOptions: {
				extraFileExtensions: ['.svelte']
			}
		}
	})),
	...svelteEslint.configs['flat/recommended'].map((config) => ({
		...config,
		rules: {
			...config.rules,
			'svelte/valid-compile': 'off'
		},
		languageOptions: {
			...config.languageOptions,
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	})),
	eslintPluginPrettier,
	{
		ignores
	}
)
