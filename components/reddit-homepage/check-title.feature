Feature: Reddit Home Page Title
  As a developer
  I want to make sure I can be distracted

  Background:
    Given I open the url "https://www.reddit.com"

  Scenario: Is not Google
    Then I expect that the title is not "Google"

  @components
  Scenario: Is correct
    Then I expect that the title is "reddit: the front page of the internet"