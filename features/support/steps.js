const assert = require('assert');

// functions to use for mapping sentences to code
const {Given, When, Then} = require('@cucumber/cucumber');

// hooks for set up and tear down
const {After, Before} = require('@cucumber/cucumber');
const {AfterAll, BeforeAll} = require('@cucumber/cucumber'); 

const Browser = require("../../Browser");
const { accessSync } = require('fs');
const browser = new Browser();
const timeout = 20000;

// Set up

BeforeAll(function () { // before all
    // build browser
    browser.browserBuild();
}, timeout);  

Before(function () { // before each
    // set url - i.e. refresh site
    browser.browserNavigate('http://127.0.0.1:5500/index.html');
}, timeout);

// Tear Down
AfterAll(function () { // after all
    // close headless browser
    browser.browserExit();
}, timeout);
  
// Steps

Given("the headless browser is open", function() {
    assert(browser.browserBuilt());
});

Given("the index page is open", function() {
    try {
        const servicesElement = browser.getElementByCss("body > div.OurServices > p");
        const servicesText = servicesElement.getText();

        assert(servicesText == "To book a flight, press the button below:");
    } catch {
        // throw
    }

});

When("the book a flight button is clicked", function() {
    browser.elementClick('BookingButton');
});

Then("the text colour of the button should be purple", async function() {

    const colourOfButton = await browser.elementColor('BookingButton');
    assert(colourOfButton == 'rgba(128, 0, 128, 1)');

});

Then("the title for the page should be displayed", function() {
    assert(browser.waitForElementByCss('header#PageTitle'));
});







// Given("the comment input box is empty", function() {
//     const inputBoxElement = browser.getElementByCss("#UserCommentInput");
//     const inputAsText = inputBoxElement.value;

//     assert(inputAsText == "");

// });

// When("a comment is entered into the input box", function() {

// });

// When("the submit button is clicked", function() {

// });

// Then("the background colour of the button should be orange", function() {

//     const colourOfButton = browser.elementColor('BookingButton');
//     assert(colourOfButton == '')

//     // id - BookingButton
//     // bg colour = orange
// });



// Then("the text should disappear from the input box", function() {

// });

// Then("the comment should be displayed", function() {

// });

// Then("the user should receive a warning to enter a comment before submitting", function() {

// });