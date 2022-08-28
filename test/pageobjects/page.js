/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://platform.productsup.com/`)
    }

    async switchFrame(iframe) {
        await browser.pause(1000)
        await iframe.isDisplayed();
        await iframe.scrollIntoView();
        await browser.switchToFrame(iframe);
    }

    async SelectValueFromDropdown(dropdownElement, valueElement) {
        await dropdownElement.click();
        await valueElement.waitForDisplayed();
        await valueElement.click();
    }

    
}
