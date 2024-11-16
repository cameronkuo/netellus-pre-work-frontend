import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const INDENT_SIZE = 2;

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
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
      'no-nested-ternary': 'error',
      'no-var': 'error',
      semi: ['error', 'always'],
      'import/no-useless-path-segments': 'error',
      'import/exports-last': 'error',
      indent: [
        'error',
        INDENT_SIZE,
        {
          SwitchCase: 1,
          VariableDeclarator: 'first',
          offsetTernaryExpressions: true,
        },
      ],
      'import/order': [
        'error',
        {
          // How groups are defined, and the order to respect.
          // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#groups-array
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#pathgroups-array-of-objects
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal', // 在規定的 group 中選其一，builtin、external、internal、unknown、parent、sibling、index、object、type
              position: 'after', // after、before
            },
          ],
          // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#pathgroupsexcludedimporttypes-array
          pathGroupsExcludedImportTypes: ['type'], // 將 type 類型的 import 排除在 pathGroups 之外
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
