import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'error',
      'no-console': ['error', { allow: ['error'] }],
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      camelcase: 'error',
      'default-param-last': ['error'],
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-lonely-if': 'error',
      'no-magic-numbers': 'error',
      'no-nested-ternary': 'error',
      'no-var': 'error',
    },
  },
]
