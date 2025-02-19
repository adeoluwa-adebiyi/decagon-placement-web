module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules:{
      '@typescript-eslint/no-non-null-assertion': 'off'
    },
    env: {
        es6: true,
        jest: true,
        node: true
      },
  };