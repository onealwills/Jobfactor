export interface SignInRequest {
    emailAddress: string;
    password: string;
}

export interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ICreateVerificationRequest {
    emailAddress: string;
    verificationType: string;
}
export interface ICreateVerificationResponse {
    accountId: string;
    id: string;
    lastUpdatedAt: number;
}

export interface IValidateCodeRequest {
    verificationCode: string;
    emailAddress: string;
}
export interface IValidateCodeResponse {
    isSuccess: boolean;
    emailAddress: string;
    message: string;
}
export interface IResetRequest {
    newPassword: string;
    emailAddress: string;
    code: string;
}
export interface IResetResponse {
    success: boolean;
    emailAddress: string;
    message: string;
}
