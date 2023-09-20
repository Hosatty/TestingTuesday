Feature: Event Registration form Validations


  Scenario Outline: As a user, I can submit the form

    Given I am on the landing screen
    When I enter only mandatory fields in personal information page <Name> <Email> <DOB> <org>
    When I submit the form
    When I enter only mandatory values in event registration page <Days> <FromTime> <ToTime>

    Examples:
      | Name      | Email               | DOB            | org    | Days  | FromTime  | ToTime
      | Sam Kerr  | 123@123.com         | 1-1-1994       | Crayon |       |  10:10    | ToTime   
      

