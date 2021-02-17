module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        'no-var': 'error',
        semi: ['error', 'always'],
        quotes: [2, 'single', {
            allowTemplateLiterals: true
        }]
    }
};
