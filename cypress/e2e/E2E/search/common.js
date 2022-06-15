import { When, Then } from "cypress-cucumber-preprocessor/steps";
const mainSection = require("../../../support/pages/main.page");

When("he searches {string} in the search box", function(query) {
  mainSection.propertySearchInput().type(query);
  mainSection.searchButton().click();
});

Then(
  "he should be redirected to the {string} result page successfully",
  function(resultPageName) {
    cy.url().should(
      "include",
      `${
        Cypress.config().baseUrl
      }sale/?excludeunderoffer=1&suburb=sydney-nsw-2000`
    );
    cy.get('[data-testid="breadcrumbs__crumb"]')
      .eq(3)
      .should("include.text", resultPageName);
  }
);
