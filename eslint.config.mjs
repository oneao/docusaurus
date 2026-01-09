import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  extends: [
    'plugin:@docusaurus/recommended',
  ],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    'no-unused-vars': 'off',
  },
})
