const { defineConfig } = require("cypress");

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',

  watchForFileChanges: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://automationexercise.com',
  },
});
