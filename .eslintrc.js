module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-uses-vars': 'error'
  }
}