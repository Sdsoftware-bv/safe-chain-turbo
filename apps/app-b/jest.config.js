const baseConfig = require('tooling-config/jest.config.base.js');

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  displayName: 'app-b',
  rootDir: '.',
  passWithNoTests: true,
};
