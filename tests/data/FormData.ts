export class ContactData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    constructor(data: Partial<ContactData> = {}) {
        this.firstName = data.firstName ?? 'TestFirstName';
        this.lastName = data.lastName ?? 'TestLastName';
        this.email = data.email ?? 'test@test.com';
        this.phone = data.phone ?? '5555555555';
    }
}

export class CompanyData {
    company: string;
    industry: string;

    constructor(data: Partial<CompanyData> = {}) {
        this.company = data.company ?? 'Test Company';
        this.industry = data.industry ?? 'ecommerce';
    }
}

export class ProjectData {
    timeline: string;
    volume: string;
    details: string;

    constructor(data: Partial<ProjectData> = {}) {
        this.timeline = data.timeline ?? 'immediate';
        this.volume = data.volume ?? '1000 units';
        this.details = data.details ?? 'Test project details.';
    }
}