module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,jsx}'],
};
