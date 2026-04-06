import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', '*.js', 'src/generated/**'],
  },
  ...tsPlugin.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'no-unneeded-ternary': 'error',
      'no-nested-ternary': 'error',
      'multiline-ternary': ['error', 'always-multiline'],
      'operator-linebreak': ['error', 'before'],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^@?\\w'],
            ['^.*\\u0000$'],
            ['^'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'object-curly-spacing': ['error', 'always'],
      quotes: ['warn', 'single'],
      'func-style': ['warn', 'declaration'],
    },
  },
];
