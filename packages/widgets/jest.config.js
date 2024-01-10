/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', 'dist', '.*\\.tsx$'],
};
