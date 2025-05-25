Feature: Parabank Landing Page

    Scenario: Landing page loads successfully
        Given I navigate to the Parabank landing page
        Then I should see the "Customer Login" section
        And I should see the "Register" link
        And I should see the "Online Services" item header
