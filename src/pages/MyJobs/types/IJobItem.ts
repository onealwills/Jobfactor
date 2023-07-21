import { ISelectedSkillType } from "./ISkillType";

export interface IJobItem {
    location?: string;
    title?: string;
    jobType?: string;
    salary?: string;
    jobFitMetric?: number;
    description?: string;
    alreadyapply?: boolean;
    savedjob?: boolean;
    createdAt?: string;
    id?: string;
    status?: string;
    company?: {
        logo: string;
        name: string;
    };
    workplaceType?: string;
    savedJobId: string;
    isSaved: boolean;
    savedAt: number;
    isApplied?: boolean;
    jobPosting?: IJobItem;
    salaryCurrency?: string;
    salaryRangeFrom?: number;
    salaryRangeTo?: number;
    score?: number
    additionalNote?: string;
    skills?: ISelectedSkillType[];
    responsibilities?: string;
    
    requirements?: {
        minJobFactorScore: number;
        keywords: { name: string; type: string; showbackground?: boolean }[];
        responsibilities: string[];
    };
    posted?: string;
    jobTitle?: string;
    companyLogo?: string;
    keywords?: { name: string; type: string; showbackground?: boolean }[];
    companyName?: string;
}
