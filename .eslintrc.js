module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['config/*.js', 'scripts/*.js'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['off'],
    'no-debugger': ['off'],
    'max-lines': ['error', { max: 600, skipBlankLines: true }], // 每个文件不算空行，最多600行
    'max-len': ['error', 120, 2], // 单行最多120
    'max-statements': ['error', 80], // 单个函数最多80行
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }], // 空行最多不能超过2行
    'max-depth': ['error', 4], // 代码最多允许4层嵌套
    'no-unneeded-ternary': ['error'], // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['off'],
  },
};
