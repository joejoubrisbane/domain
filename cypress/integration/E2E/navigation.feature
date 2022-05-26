Feature: Navigation
  As a domain user Joe,
  I would like to use the navigation function to browse the website
  So that I can have a smooth user experience
  Scenario Outline: User navigates to the "<pageName>" page
    Given the domain user Joe is on the domain main page
    When he clicks the navigation options:"<pageName>"
    Then he should see the corresponding page
    Examples:
    |pageName|
    |    Buy    |
    |    Rent   |
    |    House & Land    |
    |    New Homes    |
    |    Sold    |
    |    Retirement    |
    |    Rural    |