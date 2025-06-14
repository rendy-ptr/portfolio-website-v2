/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    // 'jest', // Uncomment jika pakai Jest
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    // 'plugin:jest/recommended', // Uncomment jika pakai Jest
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'out/',
    'tmp/',
    'docs/',
    '*.min.js',
    '**/*.config.{js,ts,cjs,mjs}',
    '**/*.d.ts',
  ],
  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // TypeScript
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // Maintainability
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'max-lines': [
      'warn',
      { max: 300, skipComments: true, skipBlankLines: true },
    ],

    // React
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Optional: Uncomment jika pakai Jest
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'error',

    // Optional: Naming convention
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'variable',
    //     format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    //     leadingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'function',
    //     format: ['camelCase', 'PascalCase'],
    //   },
    // ],
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.json'],
      parser: 'json-eslint-parser',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    // {
    //   files: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    //   rules: {
    //     '@typescript-eslint/no-explicit-any': 'off',
    //     'jest/expect-expect': 'warn',
    //   },
    // },
  ],
};

module.exports = config;
