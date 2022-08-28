

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListPage extends Page {

    name = 'Automation_' + Date.now();
    // process.env.name = this.name;
    /**
     * define selectors using getter methods
     */
    get addListIcon() {
        return $('//span[text()= "Add list"]');
    }

    get continueBtn() {
        return $('//span[text() = "Continue"]')
    }

    get nameInput() {
        return $('//input[@type="text"]')
    }

    get addBtn() {
        return $('//span[text() = "Add"]')
    }

    get addSearchTermInput() {
        return $$('//input[@placeholder="Enter a term" and @tabindex="1"]')[0]
    }

    get addReplaceTermInput() {
        return $$('//input[@placeholder="Enter a term" and @tabindex="1"]')[1]
    }

    async getRadioButton(btnName) {
        return $(`//span[text()= "${btnName}"]`)
    }
    async validateToasMsg(expectedMsg) {
        let msg = await $('div.toast-content').getText();
        expect(msg).toBe(expectedMsg)
    }

    async addList(listType) {
        global.name = 'Automation_' + Date.now();
        const frame = await $('#frame');
        await super.switchFrame(frame)
        await this.addListIcon.isDisplayed();
        await this.addListIcon.click();
        const btn = await this.getRadioButton(await listType);
        await btn.click();
        await this.continueBtn.click();
        console.log(global.name);
        await this.nameInput.setValue(global.name);
        await this.addBtn.click();
        await browser.pause(6000)
        // await this.addSearchTermInput.waitForEnabled(10000)
        // switch (listType) {
        //     case "Standard Inclusion/Exclusion":
        //         await this.addSearchTermInput.setValue(searchTerm);

        //     case "Standard Replacement":
        //         await this.addSearchTermInput.setValue(searchTerm);
        //         await this.addReplaceTermInput.setValue(replaceTerm);

        // }
        // await this.addBtn.click();
        // let msg = await $('div.toast-content').getText();
        // expect(msg).toBe('You successfully added the list item')

    }

    async addTerms(listType, searchTerm, replaceTerm) {

       switch (listType) {
            case "Standard Inclusion/Exclusion":
                await this.addSearchTermInput.setValue(searchTerm);

            case "Standard Replacement":
                await this.addSearchTermInput.setValue(searchTerm);
                await this.addReplaceTermInput.setValue(replaceTerm);

        }
        await this.addBtn.click();
        await this.addBtn.waitForClickable({timeout:5000})
        let msg = await $('div.toast-content').getText();
        await expect(msg).toBe('You successfully added the list item')

    }
}

module.exports = new ListPage();
