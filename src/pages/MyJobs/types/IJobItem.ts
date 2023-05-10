export interface IJobItem {
    companyName: string;
    location: string;
    jobTitle: string;
    companyLogo: string;
    keywords: { name: string; type: string; showbackground?: boolean }[];
    jobType: string;
    salary: string;
    jobFitMetric: number;
    requirements: {
        minJobFactorScore: number;
        keywords: { name: string; type: string; showbackground?: boolean }[];
        responsibilities: string[];
    };
    posted: string;
    alreadyapply?: boolean;
    savedjob?: boolean;
}
