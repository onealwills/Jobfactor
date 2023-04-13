export interface SignInRequest {
    emailAddress: string;
    password: string;
}

export interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}
