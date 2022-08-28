

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TaskPage extends Page {
    /**
     * define selectors using getter methods
     */
    get sideBar () {
        return $('.sidebar');
    }

    async clickItemInSidebar (item) {
        await browser.switchToParentFrame()
        const ele = $(`//span[text()='${item}']`);
        await this.sideBar.moveTo();
        await ele.isDisplayed();
        await ele.click();
    }
}

module.exports = new TaskPage();
