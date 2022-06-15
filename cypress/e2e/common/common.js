import { Given } from "cypress-cucumber-preprocessor/steps";

Given("the domain user Joe is on the domain main page", function() {
  cy.visit(Cypress.config().baseUrl, {
    headers: { "Accept-Encoding": "gzip, deflate" }
  });
  cy.url().should("include", "www.domain.com.au");
});
