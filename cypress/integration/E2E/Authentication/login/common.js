import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const Authentication = require("../../../../support/pages/authentication.page.js");
const Navigation = require("../../../../support/pages/navigation.page.js");
const Article = require("../../../../support/pages/article.page.js");
const MainPage = require("../../../../support/pages/main.page.js");

Given("Joe Jou is on the Wiki Login page", function() {
  cy.visit(`${Cypress.config().baseUrl}w/index.php?title=Special:UserLogin`);
  cy.url().should("include", "title=Special:UserLogin");
  cy.title().should("eq", "Log in - Wikipedia");
  Article.articleTitle().should("have.text", "Log in");
});
When("he enters the username", function() {
  Authentication.userNameInputLabel().should("have.text", "Username");
  Authentication.userNameInput()
    .invoke("attr", "placeholder")
    .should("contain", "Enter your username");
  Authentication.userNameInput().type(`${Cypress.env("userName")}`);
});
When("he enters the correct password", function() {
  Authentication.passwordInputLabel().should("have.text", "Password");
  Authentication.passwordInput()
    .invoke("attr", "placeholder")
    .should("contain", "Enter your password");
  Authentication.passwordInput().type(`${Cypress.env("correctPassword")}`);
});
When("he clicks the Log in button", function() {
  Authentication.loginButton().click();
});
When("he enters an incorrect password", function() {
  let incorrectPassword = `${Cypress.env("correctPassword")}+1`;
  Authentication.passwordInput().type(incorrectPassword);
});
Then("he should be redirected to the main page", function() {
  cy.url().should("include", "Main_Page");
  MainPage.welcomeHeader().should("have.text", "Welcome to Wikipedia");
});
Then("he should see the error message", function() {
  Authentication.loginErrorMessage()
    .should("have.class", "mw-message-box-error")
    .and(
      "have.text",
      "Incorrect username or password entered.\n" + "Please try again."
    );
});
Then("he should stay on the login page", function() {
  cy.url().should("include", "Special:UserLogin");
  cy.title().should("eq", "Log in - Wikipedia");
  Article.articleTitle().should("have.text", "Log in");
});
Then("he can visit his account page with the welcome message", function() {
  Navigation.personalInfoLink().click();
  cy.url().should("include", "source=personaltoolslink");
  Article.articleTitle().should("include.text", `${Cypress.env('userName')}`);
});
after(function() {
  cy.logout();
});
