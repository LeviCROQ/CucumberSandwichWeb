Feature: Website index page tests

    Scenario: The page title should be displayed when the page is loaded
        Given the headless browser is open
        And the index page is open
        Then the title for the page should be displayed

    Scenario: Clicked book a flight button
        Given the headless browser is open
        And the index page is open
        When the book a flight button is clicked
        Then the text colour of the button should be purple
