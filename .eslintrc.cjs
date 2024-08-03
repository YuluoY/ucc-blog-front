/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  globals: {
    defireProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        bracketSpacing: true, // 对象大括号内是否需要空格
        endOfLine: 'lf', // 允许自动检测换行符
        arrowParens: 'avoid' // 箭头函数只有一个参数时候不需要括号
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }] // 最多允许2个空行
  }
}
