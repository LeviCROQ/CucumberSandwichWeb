const cucumber = require("@cucumber/cucumber");
require('chromedriver'); // So executable is available
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

class CustomWorld {
    constructor() {
        this.headless = null;
    }
}

cucumber.setWorldConstructor(CustomWorld);