Feature: Try for free suite

  Scenario Outline: Try for free with out '@'

    Given I am on log in page
    When i enter the Email in Try for free <Email>
    Then i click on Try for free button

    Examples:
    | Email                     | 
    | maks.lupol.02gmail.com    |
    | hdfsth.dfg.02gmail.com    |
    | sdgf.lgjghj.gmail.com     |

  Scenario Outline: Empty try for free

    Given I am on log in page
    When i noting enter the Email in Try for free <emptyEmail>
    Then i click on Try for free button
    Examples:
    | emptyEmail  | 
    |             |
    |             |

  Scenario Outline: Try for free with out '@'

    Given I am on log in page
    When i enter the Email in Try for free <EmailDot>
    Then i click on Try for free button
    Examples:
    | EmailDot              | 
    | makslupol02@gmailcom  |
    | fghfgh@gmailcom       |

