export interface PostJobItem {
    title: string;
    id: string;
    createdAt: string;
    JobRole: string;
    JobSummary: string[];
    jobDetails: {
        Responsibilities: string[];
        location: string;
        skills: { key: string; status: string }[];
    };
    description: string;
    active: boolean;
}
