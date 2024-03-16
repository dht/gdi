/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', 'dist', '.*\\.tsx$'],
};
