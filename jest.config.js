module.exports = {
  preset: 'ts-jest', // use ts-jest to compile ts code
  testEnvironment: 'jsdom',// Sets the test environment to jsdom for testing React components.
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', //Maps CSS/SCSS/LESS imports to an identity object proxy to handle styles in tests
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],// Specifies a setup file (setupTests.ts) to run before each test suite.
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],//Defines the pattern for test files (*.test.ts or *.test.tsx) within the src directory.
}
