import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const Navigation = require("../../../../support/pages/navigation.page.js");
const Article = require("../../../../support/pages/article.page.js");
Given("Joe Jou has already login in the Wiki page", function() {
  cy.visit(`${Cypress.config().baseUrl}w/index.php?title=Special:UserLogin`);
  cy.login(Cypress.env("userName"), Cypress.env("correctPassword"));
});

When("he clicks the Log out button", function() {
  Navigation.logoutButton().should("have.text", "Log out");
  Navigation.logoutButton().click();
});
Then("he should be redirected to the Log out page", function() {
  cy.url().should("include", "title=Special:UserLogout");
  cy.title().should("eq", "Log out - Wikipedia");
  Article.articleTitle().should("have.text", "Log out");
});
Then("he should see the log in button", function() {
  Navigation.loginButton().should("be.visible");
});
Then("he should see profile status become Not logged in", function() {
  Navigation.notLoggedInStatus().should("contain.text", "Not logged in");
});
