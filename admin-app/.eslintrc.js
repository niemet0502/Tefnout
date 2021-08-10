module.exports = {
    env: {
      browser: true,
      es2021: true,
      'jest/globals': true,
    },
    extends: ['plugin:react/recommended', 'prettier'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'jest'],
    rules: {},
    overrides: [
      {
        files: ['*.jsx', '*.js'],
      },
    ],
  };