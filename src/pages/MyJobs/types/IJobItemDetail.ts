export interface IJobItemDetail {
    companyDescription: string;
    heading: string;
    jfScore: number;
    jobTitle: string;
    location: string;
    employmentType: string;
    department: string;
    jobDescriptions: string[];
    responsibilities: string[];
    candidatureQualities: string[];
    workingAt: string[];
    additionalPerks: string[];
    applicationClosingDate: string;
    aboutCompany: {
        logo: string;
        name: string;
        address: string;
        industry: string;
        numberOfEmployees: string;
        employeesOnJF: number;
        keywords: { name: string; type: string }[];
        descriptions: string[];
    };
}
