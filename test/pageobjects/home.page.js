

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get expandBtn () {
        return $('//i[@ng-if="!project.project_info.show_site"]');
    }



    async getTaskElement (taskName) {
        return $(`//span[text()='${taskName}']`)
    }

    async navigateToTask(taskName) {
        await this.expandBtn.click();
        const ele = await this.getTaskElement(taskName);
        ele.click();
    }
   
}

module.exports = new HomePage();
