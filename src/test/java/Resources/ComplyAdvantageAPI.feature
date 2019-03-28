Feature: As an automation test
          I want to add politician data via post API method and display politician data via get API method
          so that API end points are verified successfully

  @AddPolitician
  Scenario Outline: Allows adding politicians data
    Given I request ComplyAdvantage
    When I post adding politicians "<name>" "<country>" "<yearofbirth>" "<position>" and "<risk>"
    Then I get an OK response

    Examples:
    | name            | country | yearofbirth | position | risk |
    | Barry Gardner   | UK      |09/25/1973   | MP  |  5 |
    | Alex McGraill   | UK     |03/23/1965    | MP  |  2 |
    | Chris Thompson  | UK      |11/25/1953   | MP  |  1 |
    | Elizabeth Evans | UK      |12/30/1978   | MP  |  3 |
    | Jordan Jaamie   | UK      |11/25/1953   | MP  |  4 |

    @ReturnLatestListof5Politician
    Scenario: Returns the list of the latest 5 politicians, order by date of creation
      Given I request ComplyAdvantage
      When I request get method for endpoint "http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/peps"
      Then I get response as list of the latest 5 politicians, order by date of creation