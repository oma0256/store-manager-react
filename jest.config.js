module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/index.js',
    'src/store/index.js'
  ],
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/enzyme.config.js']
};
