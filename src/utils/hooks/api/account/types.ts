export interface AccountResponse {
    id: string;
    emailAddress: string;
    createdAt: number;
    lastUpdatedAt: number;
    isEnabled: boolean;
    user: User;
}

export interface User {
    id: string;
    isEnabled: boolean;
    createdAt: number;
    lastUpdatedAt: number;
    primaryProfile: string;
    professionalProfile: ProfessionalProfile;
    companyProfiles: null;
    primaryCompanyProfile: null;
}

export interface ProfessionalProfile {
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    isEnabled: boolean;
    createdAt: number;
    lastUpdatedAt: number;
}

export interface CreateProAccountRequest {
    emailAddress: string;
    firstName: string;
    lastName: string;
    password: string;
}

export enum PrimaryProfileType {
    Professional = 'PROFESSIONAL',
    Company = 'COMPANY',
}
