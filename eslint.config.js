import js from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import next from '@next/eslint-plugin-next';
import globals from 'globals';

export default [
  // Konfigurasi dasar JavaScript
  js.configs.recommended,

  // Environment global untuk semua file
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        es2021: true,
      },
    },
  },

  // Konfigurasi React
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Konfigurasi JSX Accessibility
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // Konfigurasi TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Konfigurasi Next.js
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
    },
  },

  // Konfigurasi Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },

  // Konfigurasi tambahan untuk React
  {
    files: ['**/*.jsx', '**/*.tsx'],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      // Aturan React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',

      // Aturan umum
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'no-duplicate-imports': 'error',
      'prefer-const': 'error',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.next/**',
      'out/**',
      '*.min.*',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
      '*.config.ts',
    ],
  },

  // Overrides untuk file konfigurasi
  {
    files: ['*.config.{js,mjs,ts}', 'tailwind.config.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
