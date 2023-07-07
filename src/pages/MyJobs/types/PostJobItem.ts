export interface PostJobItem {
    title: string;
    id: string;
    createdAt: string;
    overview: string;
    JobSummary: string[];
    qualifications?: string;
    yearsOfExperience?:string;
    applicants:[],
    jobDetails: {
        Responsibilities: string[];
        location: string;
        skills: { key: string; status: string }[];
    };
    description: string;
    active: boolean;
}
