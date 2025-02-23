const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.99.co/singapore",  // Base URL for all test suites
    chromeWebSecurity: false, // Disable security checks
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "electron") {
          launchOptions.args.push("--disable-popup-blocking");
          launchOptions.args.push("--imageEnabled");
        }
        return launchOptions;
      });
    },
  },
});

