Feature: Event Registration form Validations


  Scenario Outline: As a user, I can submit the form

    Given I am on the landing screen
    When I enter only mandatory fields in personal information page <Name> <Email> <DOB> <org>
    When I submit the form

    Examples:
      | Name     | Email               | DOB                            | org
      | Sam Kerr | 123@123.com         | 1 -1 1994                      | Crayon
      

