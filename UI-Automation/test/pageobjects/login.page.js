

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@type="text"]');
    }

    get btnNext () {
        return $('//span[text()="Next"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('//span[text()="Log In"]');
    }

    get getTitle () {
        return browser.getTitle()
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        const frame = await $('#frame');
        await super.switchFrame(frame)
        await this.inputUsername.setValue(username);
        await this.btnNext.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.switchToParentFrame()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open('login');
    //    await browser.url(`https://platform.productsup.com/`)
    }
}

module.exports = new LoginPage();
