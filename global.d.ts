import 'little-state-machine';

declare module 'little-state-machine' {
    interface GlobalState {
        data: {
            accountType: string,
            fullName: string,
            emailAddress: string,
            password: string,
            verifyEmail: boolean,
            profile: {
                firstName: string,
            },
            step: number;
        };
    }
}