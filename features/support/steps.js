const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber'); // hooks for set up and tear down
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

When("the book a flight button is clicked", function() {

});

Then("the background colour of the button should be orange", function() {

});

Then("the text colour of the button should be purple", function() {

});

Then("the title for the page should be displayed", function() {

});

// Tear Down
AfterAll(function () { // after all
    // close headless browser
});