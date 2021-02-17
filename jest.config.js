module.exports = {
    roots: ['<rootDir>'],
    collectCoverage: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    moduleNameMapper: {
      '@server/(.*)$': '<rootDir>/src/$1',
      '@tests/(.*)$': '<rootDir>/__tests__/$1'
    },
    collectCoverageFrom: ['./src/**/*.ts'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json'
        }
    },
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60
        }
    }
};
