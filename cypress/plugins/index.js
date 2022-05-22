/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(pathToConfigFile) {
    return fs.readJson(pathToConfigFile).then(config => {
        return config;
    });
}
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on("file:preprocessor", cucumber());
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    const file = config.env.configFile || "default";
    const pathToConfigFile = path.resolve(".", "cypressConfig", `${file}.json`);

    // Pull config from file if it exists, otherwise expect it to be set
    // as environment variables
    if (fs.existsSync(pathToConfigFile)) {
        return getConfigurationByFile(pathToConfigFile);
    }
}
