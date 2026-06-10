import {Locator, Page, expect} from '@playwright/test';
import {CompanyData, ContactData, ProjectData} from '../data/FormData';

export class RequestQuotePage {
    private readonly page: Page;
    private readonly userNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneInput: Locator;
    private readonly companyNameInput: Locator;
    private readonly industryDropdown: Locator;
    private readonly serviceWarehousingCheckbox: Locator;
    private readonly timelineDropdown: Locator;
    private readonly estimatedVolumeInput: Locator;
    private readonly projectDetailsInput: Locator;
    private readonly submitRequestButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.userNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.companyNameInput = page.locator('#company');
        this.industryDropdown = page.locator('#industry');
        this.serviceWarehousingCheckbox = page.getByRole('checkbox', {name: 'warehousing'});
        this.timelineDropdown = page.locator('#timeline');
        this.estimatedVolumeInput = page.locator('#volume');
        this.projectDetailsInput = page.locator('#details');
        this.submitRequestButton = page.getByRole('button', {name: 'Submit Request'});
    }

    async navigate(): Promise<void> {
        await this.page.goto('/rfq');
    }

    async fillContactInformation(contact: ContactData): Promise<void> {
        await this.userNameInput.fill(contact.firstName);
        await this.lastNameInput.fill(contact.lastName);
        await this.emailInput.fill(contact.email);
        await this.phoneInput.fill(contact.phone);
    }

    async fillCompanyInformation(company: CompanyData): Promise<void> {
        await this.companyNameInput.fill(company.company);
        await this.industryDropdown.selectOption(company.industry);
    }

    async checkWarehousing(): Promise<void> {
        await this.serviceWarehousingCheckbox.click({force: true});
        await expect(this.serviceWarehousingCheckbox).toBeChecked();
    }

    async fillProjectDetails(project: ProjectData): Promise<void> {
        await this.timelineDropdown.selectOption(project.timeline);
        await this.estimatedVolumeInput.fill(project.volume);
        await this.projectDetailsInput.fill(project.details);
    }

    async submitForm(): Promise<void> {
        await this.submitRequestButton.click();
    }
}