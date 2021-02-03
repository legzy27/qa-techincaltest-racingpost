Feature: Login

  I want to log into Conduit
  
  Scenario: Navigate to Homepage
    Given I open racing post homepage
    Then I click the big race entries header
    Then I see date of the next big race event is in the future

    Scenario: Navigate to homepage check page title
     Given I open racing post homepage
     Then I check title is present on homepage
     
     