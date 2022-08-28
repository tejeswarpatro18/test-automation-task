const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const TaskPage = require('../pageobjects/task.page');
const ListsPage = require('../pageobjects/lists.page');
const DataViewPage = require('../pageobjects/dataView.page');

// describe('Standard Inclusion/ Exclusion', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();
//         await LoginPage.login('sunghill.patruni+seniorqa@productsup.com', 'Test@12345!!!');
//         await expect(browser).toHaveTitleContaining('Productsup Platform');
//     });

//     it('should login with valid credentials', async () => {
//         await HomePage.navigateToTask('Senior QA - Automation Tasks')
//     });

//     it('should add list for “Standard Inclusion/Exclusion”', async () => {
//         await TaskPage.clickItemInSidebar("Lists");
//         await ListsPage.addList("Standard Inclusion/Exclusion", "Monday");
//     });

//     it('should blacklist the created list', async () => {
//         await TaskPage.clickItemInSidebar("Data View");
//         await DataViewPage.blackList(global.name);
        
//     });
// });


describe('Standard Replacement', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('sunghill.patruni+seniorqa@productsup.com', 'Test@12345!!!');
        await expect(browser).toHaveTitleContaining('Productsup Platform');
    });

    it('Navigate tp Senior QA automation task', async () => {
        await HomePage.navigateToTask('Senior QA - Automation Tasks')
    });

    it('should add list for “Standard Replacement”', async () => {
        await TaskPage.clickItemInSidebar("Lists");
        await ListsPage.addList("Standard Replacement");
        await ListsPage.addTerms("Standard Replacement", "Monday","Monday");
        await ListsPage.addTerms("Standard Replacement", "Tuesday","Tuesday");
    });

    it('should blacklist the created list', async () => {
        await TaskPage.clickItemInSidebar("Data View");
        await DataViewPage.replacementList(global.name);
        
    });
});


