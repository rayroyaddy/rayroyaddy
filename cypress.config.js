const { defineConfig } = require("cypress");

module.exports = defineConfig({
projectId: 'd1gvgo',
watchForFileChanges: false,
defaultCommandTimeout: 4000,
reporter:'cypress-mochawesome-reporter',
"reporter": "cypress-html-reporter",
    "jsonFile": "cypress/reports/mochawesome.json",
    "reportPath": "cypress/reports",
    "overwrite": false,
    "html": true,
    "screenshotsFolder": "screenshots",
    "cssFile": "custom.css",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },s
});
