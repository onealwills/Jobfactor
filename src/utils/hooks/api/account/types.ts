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

export interface CompanyProfile {
    id: string;
    companyName: string;
    emailAddress: string;
}

export interface CreateProAccountRequest {
    emailAddress: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface CreateCompanyAccountRequest {
    emailAddress: string;
    password: string;
    companyName: string;
}

export enum PrimaryProfileType {
    Professional = 'PROFESSIONAL',
    Company = 'COMPANY'
}

export enum CreateAccountType {
    Professional = 'PROFESSIONAL',
    Company = 'COMPANY',
    NotSelected = ''
}
