module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['migrations/*', 'test/*', '**/truffle.js', '**/.eslintrc.js'] }],
  },
};
