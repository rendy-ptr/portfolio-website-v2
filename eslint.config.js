import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
// import pluginJest from 'eslint-plugin-jest';
import pluginJson from 'eslint-plugin-json';

// Opsional: Tambahkan plugin berikut untuk proyek React
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    // Pola file yang diabaikan (direktori build, file generated, dll.)
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'out/**',
      'tmp/**',
      'docs/**',
      '*.min.js',
      '**/*.config.{js,ts,cjs,mjs}',
      '**/*.d.ts',
    ],
    // File yang akan di-lint (JavaScript, TypeScript, dan variannya)
    files: ['**/*.{js,ts,cjs,mjs,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node, // Untuk proyek Node.js
        ...globals.browser, // Untuk proyek browser
        // Opsional: Aktifkan untuk Jest testing
        // ...globals.jest, // Untuk testing dengan Jest
      },
      parser: pluginTs.parser,
      parserOptions: {
        project: ['./tsconfig.json'], // Untuk monorepo, tambahkan path seperti "./packages/*/tsconfig.json"
        sourceType: 'module', // Default ke ES Modules
        ecmaVersion: 'latest', // Dukung fitur JavaScript terbaru
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs.plugin,
      prettier: pluginPrettier,
      // Opsional: Aktifkan untuk Jest testing
      // jest: pluginJest,
      // Opsional: Aktifkan untuk proyek React
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      // Aturan dasar ESLint dan TypeScript
      ...pluginJs.configs.recommended.rules,
      ...pluginTs.configs.recommended.rules,
      // Opsional: Aktifkan untuk Jest testing
      // ...pluginJest.configs.recommended.rules,
      ...configPrettier.rules,
      // Opsional: Aturan React (aktifkan jika menggunakan React)
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      // Pastikan Prettier menangani formatting
      'prettier/prettier': 'error',
      // Matikan no-unused-vars default, gunakan versi TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      // Nonaktifkan aturan yang sering mengganggu
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Aturan tambahan untuk maintainability
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      // Aturan untuk testing
      // 'jest/no-disabled-tests': 'warn',
      // 'jest/no-focused-tests': 'error',
      // Aturan untuk penamaan
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
      ],
      // Aturan untuk keamanan
      'no-eval': 'error',
      // Aturan untuk performa
      'max-lines': [
        'warn',
        { max: 300, skipComments: true, skipBlankLines: true },
      ],
      // Aturan untuk mencegah kesalahan umum
      'no-duplicate-imports': 'error',
      // Opsional: Aturan React (aktifkan jika menggunakan React)
      'react/prop-types': 'off', // Nonaktifkan jika menggunakan TypeScript
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off', // Tidak perlu di React 17+
    },
  },
  {
    // Aturan khusus untuk file test
    // files: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // rules: {
    //   '@typescript-eslint/no-explicit-any': 'off',
    //   'jest/expect-expect': 'warn',
    // },
  },
  {
    // Aturan untuk file CommonJS
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    // Aturan untuk file JSON
    files: ['**/*.json'],
    plugins: {
      json: pluginJson,
    },
    rules: {
      'json/*': ['error', 'allowComments'],
    },
  },
];
