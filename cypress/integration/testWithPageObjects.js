const { navigateTo } = require("../support/page_objects/navigationPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { onDatepickerPage } = require("../support/page_objects/datepickerPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")


describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()  //located on commands.js page
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.toolTipPage()
        navigateTo.smartTablePage()
    })

    it.only(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Yuyun', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', '12345')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(12, 23)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Ana', 'Moeni')
        onSmartTablePage.updateAgeByFirstName('Ana', '20')
        onSmartTablePage.deleteRowByIndex(1)
    })



})