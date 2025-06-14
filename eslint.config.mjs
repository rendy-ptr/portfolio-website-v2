import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@next/next': pluginNext,
      prettier,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'prettier/prettier': 'error',
    },
  },
];
