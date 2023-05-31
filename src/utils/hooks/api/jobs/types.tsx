export interface CreateJobPostRequest {
    title: string,
    description: string,
    companyId: string,
    isActive: boolean
}

export interface ApplyJobPostRequest {
    jobPostingId: string,
    professionalProfileId: string
}
