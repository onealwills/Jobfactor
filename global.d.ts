import 'little-state-machine';
import { CreateAccountType } from './src/utils/hooks/api/account/types';

declare module 'little-state-machine' {
    interface GlobalState {
        data: {
            accountType: CreateAccountType,
            firstName: string,
            lastName: string,
            emailAddress: string,
            password: string,
            companyName: string,
            verifyEmail: boolean,
            step: number
        };
    }
}