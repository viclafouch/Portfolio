module.exports = {
  root: true,
  extends: [
    "@viclafouch/eslint-config-viclafouch"
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
}
