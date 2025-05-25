Feature: Parabank Landing Page

    Scenario: Landing page loads successfully
        Given I navigate to the Parabank landing page
        Then I should see the "Customer Login" section
        And I should see the "Register" link
        And I should see the "Online Services" item header

    Scenario: Login with empty credentials
        Given I navigate to the Parabank landing page
        When I click on the "Log In" button
        Then I should see an error message indicating that the username and password are required
