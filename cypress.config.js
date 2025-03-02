const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin'); 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on, config);
      return config;
    },
    supportFile: "cypress/support/e2e.js",
  },
  defaultBrowser: 'chrome',
  defaultCommandTimeout: 10000,     
  "chromeWebSecurity": false,
  // "failOnStatusCode": false,
  reporter: 'cypress-mochawesome-reporter',   
  video: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporterOptions: {
    reportDir: 'cypress/reports',   
    overwrite: false,                
    html: true,                    
    json: true,                      
    embeddedScreenshots: true,
  },

});