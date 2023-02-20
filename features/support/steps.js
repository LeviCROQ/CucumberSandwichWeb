const assert = require('assert');

// functions to use for mapping sentences to code
const {Given, When, Then} = require('@cucumber/cucumber');

// hooks for set up and tear down
const {After, Before} = require('@cucumber/cucumber');
const {AfterAll, BeforeAll} = require('@cucumber/cucumber'); 


const Browser = require('./world.js');
const browser = new Browser();
const timeout = 20000;

// Set up

BeforeAll(function () { // before all
    // build browser
});  

Before(function () { // before each
    // set url - i.e. refresh site
});
  
// Steps

Given("the headless browser is open", function() {
});

Given("the index page is open", function() {

});

Given("the comment input box is empty", function() {

});

When("the book a flight button is clicked", function() {

});

When("a comment is entered into the input box", function() {

});

When("the submit button is clicked", function() {

});

Then("the background colour of the button should be orange", function() {

});

Then("the text colour of the button should be purple", function() {

});

Then("the title for the page should be displayed", function() {

});

Then("the text should disappear from the input box", function() {

});

Then("the comment should be displayed", function() {

});

Then("the user should receive a warning to enter a comment before submitting", function() {

});

// Tear Down
AfterAll(function () { // after all
    // close headless browser
});