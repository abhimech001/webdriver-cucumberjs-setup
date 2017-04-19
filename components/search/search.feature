Feature: Search Reddit
  As a bored person
  I want search to find what I want

  Background:
    Given I am on the homepage
    And I am testing the "#search" component

  @components
  Scenario: Test that the search function
    When I set "test" to the inputfield "#search input[type=text]"
    And  I submit the form "#search"
    Then I expect that the url is "https://www.reddit.com/search?q=test"
