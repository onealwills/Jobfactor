export interface JobApplicationItem {
    Profile: string;
    Applicantname: string;
    Companyname: string;
    Jobtype: string;
    jobfit: number;
    Postdate: string;
    ApplicationViews: number;
    active: boolean;
    keywords: { name: string; type: string; showbackground: boolean }[];
    saved?: boolean;
}
