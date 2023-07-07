export interface JobApplicationItem {
    professionalProfile?: {
        firstName: string;
        lastName: string;
        photoUrl: string;
        employment?: {
            jobTitle: string;
            companyName: string;
        };
    };
    isSaved: boolean;
    applicant: {
        id: string;
    },
    id:string;
    savedApplicantId: string;
    appliedAt?: number;
    score?: number;
    status?: string;

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
