const baseConfig = require('tooling-config/jest.config.base.js');

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  displayName: 'app-a',
  rootDir: '.',
  passWithNoTests: true,
  // Since app-a depends on pkg-a, we need to handle workspace imports
  moduleNameMapper: {
    '^pkg-a$': '<rootDir>/../../packages/pkg-a/src/index.ts',
  },
};
