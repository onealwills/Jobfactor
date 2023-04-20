import 'little-state-machine';

declare module 'little-state-machine' {
    interface GlobalState {
        data: {
            accountType: string,
            firstName: string,
            lastName: string,
            emailAddress: string,
            password: string,
            verifyEmail: boolean,
            step: number;
        };
    }
}