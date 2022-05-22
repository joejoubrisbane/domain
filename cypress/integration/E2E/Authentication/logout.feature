@regression @logout
Feature: Logout
   As a Wiki account holder,
  I would like to logout of my Wiki account so that my information is protected
  Background:
    Given Joe Jou has already login in the Wiki page
  Scenario: User successfully logout of the wiki page
    When he clicks the Log out button
    Then he should be redirected to the Log out page
    And he should see the log in button
    And he should see profile status become Not logged in





