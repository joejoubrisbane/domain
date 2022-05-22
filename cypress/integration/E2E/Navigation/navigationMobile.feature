@regression @navigation
Feature: Navigation
  As a wiki reader,
  I want to navigate to the different parts of Wikipedia when I read the Wiki page on a mobile phone
  Scenario: Navigate to the nearby page through the mobile navigation sidebar
    Given the user uses mobile to read the wiki page and he is on the main page
    When he wants to navigate to the nearby page through the navigation sidebar
    Then he should see nearby pages