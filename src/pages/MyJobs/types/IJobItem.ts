export interface IJobItem {
    companyName: string;
    location: string;
    jobTitle: string;
    companyLogo: string;
    keywords: { name: string; type: string }[];
    jobType: string;
    salary: string;
    jobFitMetric: number;
    requirements: {
        minJobFactorScore: number;
        keywords: { name: string; type: string }[];
        responsibilities: string[];
    };
    posted: string;
}
