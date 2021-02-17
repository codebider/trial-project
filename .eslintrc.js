module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['external', 'internal', 'builtin', 'index', 'sibling', 'parent', 'object'],
                'newlines-between': 'always'
            }
        ],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true
            }
        ],
        'import/no-named-as-default-member': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'prettier/prettier': ['error'],
        'no-var': 'error',
        '@typescript-eslint/ban-types': 'off',
        semi: ['error', 'always'],
        quotes: [
            2,
            'single',
            {
                allowTemplateLiterals: true
            }
        ]
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};
