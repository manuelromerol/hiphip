import {test, expect} from '@playwright/test';
import {RequestQuotePage} from '../pages/RequestQuotePage';
import {CompanyData, ContactData, ProjectData} from '../data/FormData';
import {DIALOG_MESSAGES} from "../data/constansts";

test('should submit request quote form successfully', async ({page}) => {
    const requestQuotePage = new RequestQuotePage(page);

    const contactInfo = new ContactData({
        firstName: 'TestFirstName1',
        lastName: 'TestLastName1',
        email: 'TestEmail1@test.com',
        phone: 'TestPhone1',
    });

    const companyInfo = new CompanyData({
        company: 'TestCompany',
        industry: 'ecommerce'
    });

    const projectInfo = new ProjectData({
        timeline: 'immediate',
        volume: '10000 units',
        details: 'TestProject Details'
    });

    await requestQuotePage.navigate();
    await expect(page).toHaveURL(/\/rfq/);

    await requestQuotePage.fillContactInformation(contactInfo);
    await requestQuotePage.fillCompanyInformation(companyInfo);
    await requestQuotePage.checkWarehousing();
    await requestQuotePage.fillProjectDetails(projectInfo);

    let dialogMessage = '';
    page.on('dialog', async dialog => {
        dialogMessage = dialog.message();
        // console.log(`Dialog message is: ${dialogMessage}`);
        await dialog.accept();
    });

    await requestQuotePage.submitForm();
    expect(dialogMessage).toBe(DIALOG_MESSAGES.REQUEST_QUOTE_SUCCESS);
});