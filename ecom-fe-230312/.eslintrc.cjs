module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['*.config.[jt]s', '/dist/*', '.eslintrc.cjs'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.css']
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    'consistent-return': 'off',
    eqeqeq: 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-empty-pattern': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    radix: 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
