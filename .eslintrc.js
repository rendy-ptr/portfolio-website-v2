module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended', 
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'prettier',
    '@next/next',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: [
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
  rules: {
    // Aturan Next.js
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-sync-scripts': 'error',

    // Aturan TypeScript
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',

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

    // Prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['*.config.{js,mjs,ts}', 'tailwind.config.{js,ts}'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
};
