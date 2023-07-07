export interface CreateJobPostRequest {
    title: string;
    description: string;
    companyId: string;
}

export interface UpdateJobPatchRequest {
    id: string;
    title: string;
    description: string;
}

export interface ApplyJobPostRequest {
    jobPostingId: string;
    professionalProfileId: string;
}
