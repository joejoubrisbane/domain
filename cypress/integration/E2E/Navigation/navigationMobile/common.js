import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const Navigation = require("../../../../support/pages/navigation.page");
const NearbyPage = require("../../../../support/pages/nearby.page");
Given(
  "the user uses mobile to read the wiki page and he is on the main page",
  function() {
    cy.visit(Cypress.env("wikiMobileUrl"));
    cy.url().should("include", `${Cypress.env("wikiMobileUrl")}`);
    cy.title().should("eq", "Wikipedia, the free encyclopedia");
  }
);
When(
  "he wants to navigate to the nearby page through the navigation sidebar",
  function() {
    Navigation.mobileNavigationDrawer().click();
    Navigation.mobileNavigationHomeLink()
      .should("have.attr", "href")
      .and("contains", "wiki/Main_Page");
    Navigation.mobileNavigationRandomLink()
      .should("have.attr", "href")
      .and("contains", "wiki/Special:Random");
    Navigation.mobileNavigationLoginLink()
      .should("have.attr", "href")
      .and(
        "contains",
        "w/index.php?title=Special:UserLogin&returnto=Main+Page"
      );
    Navigation.mobileNavigationNearbyLink()
      .should("have.attr", "href")
      .and("contains", "wiki/Special:Nearby");
    Navigation.mobileNavigationNearbyLink().click();
  }
);
Then("he should see nearby pages", function() {
  cy.url().should("include", "wiki/Special:Nearby");
  NearbyPage.nearbyInfoHeader()
    .find("h3")
    .should("have.text", "Places around you");
  NearbyPage.showNearbyArticleButton().should("be.enabled");
});
