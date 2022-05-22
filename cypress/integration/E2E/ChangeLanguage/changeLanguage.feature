@regression @changeLanguage
Feature: Search articles
  As a wiki reader,
  I would like to change the language displayed in the Wikipedia
  so that I can understand the articles
  Scenario: the reader wants to change the language from English to Chinese
    Given the reader Joe is on the main page
    When he clicks the "中文" link under the languages section
    Then he should see the language used in website changed to "中文"