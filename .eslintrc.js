module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["off", 2],
    // 使用 === 替代 == allow-null允许null和undefined==
    'eqeqeq': [2, 'allow-null'],
    'semi': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    // if while function 后面的{必须与if在同一行
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // 在操作符旁边必须有空格
    'space-infix-ops': 'error',
    'keyword-spacing': ['error', { "overrides": { 'if': { "after": false } } }],
    'prefer-const': 0
  }
}
