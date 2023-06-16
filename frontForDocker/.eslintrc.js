module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    'rules': {
        'react/prop-types': 'off',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react/jsx-indent': [2, 4],
        'object-curly-spacing': [2, 'always'],
        'object-curly-newline': ['error', {
            'ImportDeclaration': {
                'multiline': true, 'minProperties': 2,
            },
            'ExportDeclaration': {
                'multiline': true, 'minProperties': 2,
            },
        }],
        'comma-dangle': [2, 'always-multiline'],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 0,
        'i18next/no-literal-string': ['error', {
            markUpOnly: true,
            ignoreAttributes: ['date-testid'],
        }],
        'max-len': [2, {
            'code': 120,
            'ignoreComments': true,
        }],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 0,
        },
    }],
};
