module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		project: './tsconfig.json',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
		'import/resolver': {
			typescript: true,
		},
	},
	rules: {
		'no-debugger': 'off',
		'no-console': 'off',
		'import/first': 'error',
		'react/prop-types': 'off',
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/alt-text': 'warn',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					object: false,
				},
			},
		],
	},
}
