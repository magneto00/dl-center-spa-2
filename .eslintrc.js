module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
  },
};
