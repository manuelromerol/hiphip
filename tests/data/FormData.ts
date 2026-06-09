export class ContactData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;

    constructor(data: Partial<ContactData> = {}) {
        this.firstName = data.firstName ?? 'TestFirstName';
        this.lastName = data.lastName ?? 'TestLastName';
        this.email = data.email ?? 'test@test.com';
        this.phone = data.phone ?? '5555555555';
        this.company = data.company ?? 'Test Company';
    }
}

export class ProjectData {
    industry: string;
    timeline: string;
    volume: string;
    details: string;

    constructor(data: Partial<ProjectData> = {}) {
        this.industry = data.industry ?? 'ecommerce';
        this.timeline = data.timeline ?? 'immediate';
        this.volume = data.volume ?? '1000 units';
        this.details = data.details ?? 'Test project details.';
    }
}