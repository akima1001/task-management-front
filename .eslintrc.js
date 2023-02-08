module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['import', 'unused-imports', '@typescript-eslint', 'jest'],
  ignorePatterns: ['node_modules', '*.js', '*.yml', '*.json'],
  root: true,
  rules: {
    'prefer-template': 'error',
    'newline-before-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/require-top-level-describe': ['error'],
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, shorthandFirst: true, multiline: 'last', reservedFirst: true }
    ],
    // off
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
}
