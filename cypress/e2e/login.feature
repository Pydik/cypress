Feature: Log in suite

  Scenario Outline: Log in with valid credentials

    Given I am on log in page
    When i enter the Business Email <Username>
    And i enter the Password <Password>
    Then i click on logIn button

    Examples:
    | Username                   | 
    | maks.lupol.02@gmail.com    |

    | Password                   | 
    | Qazwsx123456/              |  

  Scenario Outline: Log in with incorrect Email

    Given I am on log in page
    When i enter incorrect data in the Business Email <Username>
    And i enter the Password <Password>
    Then i click on logIn button

    Examples:
    | Username                   | 
    | sdfgsdrgergerg             |
    | sdfgsdrgergerggegergeg     |

    | Password                   | 
    | Qazwsx123456/              |

  Scenario Outline: Log in with incorrect Password

    Given I am on log in page
    When i enter the Business Email <Username>
    And i enter incorrect data in the Password <Password>
    Then i click on logIn button

    Examples:
    | Username                   | 
    | maks.lupol.02@gmail.com    |

    | Password                   | 
    | rhtrthrthrthh              |
    | rhtrthsergergg             | 
    | rhfyulvhjlocgd             |     

  Scenario Outline: Log in with remember me checkbox

    Given I am on log in page
    When i enter the Business Email <Username>
    And i enter the Password <Password>
    And i click on remember me
    Then i click on logIn button

    Examples:
    | Username                   | 
    | maks.lupol.02@gmail.com    |

    | Password                   | 
    | Qazwsx123456/              |    

