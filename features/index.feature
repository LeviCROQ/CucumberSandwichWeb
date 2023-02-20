Feature: Website index page tests

    Scenario: The page title should be displayed when the page is loaded
        Given the headless browser is open
        And the index page is open
        Then the title for the page should be displayed

    Scenario: Clicked book a flight button
        Given the headless browser is open
        And the index page is open
        When the book a flight button is clicked
        Then the background colour of the button should be orange
        And the text colour of the button should be purple

    Scenario: Submitting a comment
        Given the headless browser is open
        And the index page is open
        When a comment is entered into the input box
        And the submit button is clicked
        Then the text should disappear from the input box
        And the comment should be displayed

    Scenario: Submitting an empty comment 
        Given the headless browser is open
        And the index page is open
        And the comment input box is empty
        When the submit button is clicked
        Then the user should receive a warning to enter a comment before submitting