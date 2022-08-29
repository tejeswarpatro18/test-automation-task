

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DataViewPage extends Page {
    /**
     * define selectors using getter methods
     */
    get stageMenuDropdown () {
        return $('//div[@class="btn-group stage-menu-container"]');
    }

    get dayColumnEdit () {
        return $('//th[@class="product-column-cla_custom_label_4"]//button[contains(text(),"Edit")]')
    }

    get largeView () {
        return $('button[class="btn btn-default btn-sm js-large-view"]')
    }

    get blacklistRibbon () {
        return $('//span[text()="Blacklist" and @class ="title"]')
    }

    get replacementRibbon () {
        return $('//span[text()="Replacement" and @class ="title"]')
    }

    get ribbonDropdown () {
        return $('//a[@class="chosen-single chosen-default"]')
    }

    get dragAndDropTarget () {
        return $('//li[@class="list-group-item dataflow dataflow-input"]')
    }

    get blackListInput () {
       return $('//td[contains(text(),"Blacklist")]/parent::tr//input')
    }

    get replacementInput () {
        return $('//*[contains(text(),"Replacement")]/parent::div//input')
     }

    get saveButton () {
        return $$('//button[@class="btn btn-success btn-sm js-save-process"]')[1]
        // btns.forEach(async(ele)=> {
        //     if(ele.isDislplayed()) {
        //         return ele;
        //     }
        // }) 
        // return btns
    }

    async validateItemAdded (ele, item) {
        
        if (await ele.isDisplayed()) {
            return true
        }
        else return false;
    }

    async stageMenuDropdownValue (text) {
        return $(`//span[@data-title="${text}"]`);
    }

    async editAndLargeView() {
        const frame = await $('.viewFrame');
        await super.switchFrame(frame);
        await super.SelectValueFromDropdown(this.stageMenuDropdown, await this.stageMenuDropdownValue("Intermediate"));
        await this.dayColumnEdit.click();
        const editFrame = await $('.editFrame');
        await super.switchFrame(editFrame);
        await this.largeView.click();
    }

    async dragAndDropRibbon(ribbonElem) {
        // const target = await $('//li[@class="list-group-item dataflow dataflow-input"]');
        const target = await $('#dataflow-ul-input')
        await ribbonElem.scrollIntoView();
        await ribbonElem.dragAndDrop(target);
        
    }

    async blackList (item) {
        await this.editAndLargeView();
        const elem = await this.blacklistRibbon;
        await this.dragAndDropRibbon(elem);
        await this.ribbonDropdown.click();
        await this.blackListInput.setValue(item);
        await browser.keys('Enter');
        await browser.pause(5000);
        await this.saveButton.click();
        await browser.pause(5000);
        let ele = await $(`//td[normalize-space()='BlackList']/parent::tr//span['${item}']`);
        expect(await this.validateItemAdded(ele,item)).toBe(true);
    }


    async replacementList (item) {
        await this.editAndLargeView();
        const elem = await this.replacementRibbon;
        await  this.dragAndDropRibbon(elem, item);
        await this.ribbonDropdown.click();
        await this.replacementInput.setValue(item);
        await browser.keys('Enter');
        await this.saveButton.click();
        // await browser.pause(5000);
        let ele = await $(`//*[normalize-space()='Apply Replacement List']/parent::div//span['${item}']`)
        expect(await this.validateItemAdded(ele,item)).toBe(true);
    }
}

module.exports = new DataViewPage();
