@regression @login
Feature: Login
   As a user Joe Jou,
  I want to login into the Wiki page so that I can use all of the functionalities of the Wiki page
  Background:
    Given Joe Jou is on the Wiki Login page
    When he enters the username

  Scenario: User cannot log in to wiki page with incorrect credential
    When he enters an incorrect password
    And he clicks the Log in button
    Then he should stay on the login page
    And he should see the error message

  Scenario: User successfully login into the wiki page with the correct credential
    When he enters the correct password
    And he clicks the Log in button
    Then he should be redirected to the main page
    And he can visit his account page with the welcome message




