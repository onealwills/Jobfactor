export interface PostJobItem {
    Jobtittle: string;
    jobId: string;
    postdate: string;
    JobRole: string;
    JobSummary: string[];
    jobDetails: {
        Responsibilities: string[];
        location: string;
        skills: { key: string; status: string }[];
    };
    active: boolean;
}