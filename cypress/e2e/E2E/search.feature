Feature: Search
  As a domain user Joe,
  I would like to use the search function to search the area I am interested
  So that I know the property information of the certain area
  Scenario: User search the location he is interested
    Given the domain user Joe is on the domain main page
    When he searches "Sydney" in the search box
    Then he should be redirected to the "Sydney" result page successfully
