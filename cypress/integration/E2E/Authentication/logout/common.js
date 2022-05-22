import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Joe Jou has already login in the Wiki page", function() {
  cy.visit(`${Cypress.config().baseUrl}w/index.php?title=Special:UserLogin`);
  cy.login(Cypress.env("userName"), Cypress.env("correctPassword"));
});

When("he clicks the Log out button", function() {
  cy.get('nav[role="navigation"]')
    .find("#pt-logout")
    .should("have.text", "Log out");
  cy.get('nav[role="navigation"]')
    .find("#pt-logout")
    .click();
});
Then("he should be redirected to the Log out page", function() {
  cy.url().should("include", "title=Special:UserLogout");
  cy.title().should("eq", "Log out - Wikipedia");
  cy.get("#firstHeading").should("have.text", "Log out");
});
Then("he should see the log in button", function() {
  cy.get('nav[role="navigation"]')
    .find("#pt-login")
    .should("be.visible");
});
Then("he should see profile status become Not logged in", function() {
  cy.get('nav[role="navigation"]')
    .find("#pt-anonuserpage")
    .should("contain.text", "Not logged in");
});
