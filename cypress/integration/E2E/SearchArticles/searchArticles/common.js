import { But, When, Then } from "cypress-cucumber-preprocessor/steps";
const global = require("../../../../support/tools/global");
const Article = require("../../../../support/pages/article.page");
const Search = require("../../../../support/pages/search.page");
When("he types the search query: {string} in the search input", function(
  articleQuery
) {
  global.query = articleQuery;
  Search.basicSearchInput()
    .invoke("attr", "placeholder")
    .should("contain", "Search Wikipedia");
  Search.basicSearchInput().type(articleQuery);
  Search.searchInputIconButton().click();
});
But(
  "the Wikipedia website does not find any articles related to the query",
  function() {}
);
Then("he should see the article related to the search query", function() {
  cy.url().should("include", global.query);
  Article.articleTitle().should("contain.text", global.query);
});
Then("he should see the search results page and query suggestions", function() {
  Article.articleTitle().should("have.text", "Search results");
  Search.advancedSearchInput().should("have.value", global.query);
  cy.title().should("include", "Search results");
  Article.searchResultSuggestion().should(
    "include.text",
    `The page "${global.query}" does not exist.`
  );
});
afterEach(function() {
  global.query = "";
});
