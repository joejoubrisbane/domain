const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '55de7y',
  chromeWebSecurity: true,
  blockHosts: '*js.hs-scripts.com',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.domain.com.au/',
    excludeSpecPattern: '**/**/*.js',
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
