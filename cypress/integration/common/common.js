import { Given } from "cypress-cucumber-preprocessor/steps";

Given("the reader Joe is on the main page", function() {
  cy.visit(`${Cypress.config().baseUrl}wiki/Main_Page`);
});
