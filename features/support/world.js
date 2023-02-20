const cucumber = require("@cucumber/cucumber");
require('chromedriver'); // So executable is available
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

class CustomWorld {
    constructor() {
        this.headless = null;
    }

    browserBuild() {
        const options = new chrome.Options()
        .addArguments('--log-level=1')
        .headless()
        .setAcceptInsecureCerts(true)
        .windowSize({width: 1920, height: 1200});

        this.headless = new webdriver.Builder() // new instance of selenium webdriver builder
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    }

    async browserNavigate(url) {
        await this.headless.get(url); // get the url of the site to test
    }

    browserBuilt() {
        return (this.headless != null) ? true : false;
    }

}

cucumber.setWorldConstructor(CustomWorld);