Feature: Accounts Overview

    Scenario: User sees accounts overview after successful login
        Given I am logged in as a valid user
        When I navigate to the Accounts Overview page
        Then I should see the accounts overview table
        And I should see at least one account listed
