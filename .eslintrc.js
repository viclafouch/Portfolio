module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off'
  },
  env: {
    browser: true
  }
}
