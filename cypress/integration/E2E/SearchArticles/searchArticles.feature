@regression @searchArticles
  Feature: Search articles
    As a wiki reader,
    I would like to search for the article I want on the Wikipedia website
    so that I have a better user experience
  Background:
    Given the reader Joe is on the main page

  Scenario: the reader successfully finds an article he wants on the Wikipedia
    When he types the search query: "Car" in the search input
    Then he should see the article related to the search query

  Scenario: the reader does not find the article he wants on the Wikipedia
    When he types the search query: "Cypress.io" in the search input
    But the Wikipedia website does not find any articles related to the query
    Then he should see the search results page and query suggestions
