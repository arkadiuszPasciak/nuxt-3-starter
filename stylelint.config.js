module.exports = {
  extends: ['stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-recommended-scss'],
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-recommended-vue'],
    },
  ],
  rules: {
    'string-quotes': 'single',
    'color-hex-length': 'long',
    'color-hex-case': 'upper',
    'no-empty-source': null,
    'at-rule-no-unknown': null,
  },
}
