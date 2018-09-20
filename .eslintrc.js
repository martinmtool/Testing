module.exports = {
  'plugins': [ 'react' ],
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 8,
    'sourceType': 'module',
  },
  'extends': 'eslint:recommended',
  'rules': {
    'react/jsx-uses-react': "error",
    'react/jsx-uses-vars': "error",
    'indent': [
      'error',
      2,
      {
        'FunctionDeclaration': {
          'parameters': 'first'
        },
        'FunctionExpression': {
          'parameters': 'first'
        },
        'CallExpression': {
          'arguments': 'first'
        }
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
  }
};
