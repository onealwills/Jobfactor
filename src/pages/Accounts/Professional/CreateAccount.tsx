import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import OnBoardingSidePanel from '../../OnBoarding/OnBoardingSidePanel';
import { StateMachineProvider, createStore } from 'little-state-machine';
import AccountType from './CreationSteps/AccountType';
import UserCreate from './CreationSteps/UserCreate';
import EmailConfirmation from './CreationSteps/EmailConfirmation';
import { CreateAccountType } from '../../../utils/hooks/api/account/types';
import CompanyCreate from '../Company/CompanyCreate';

createStore({
    data: {
        accountType: CreateAccountType.NotSelected,
        firstName: '',
        lastName: '',
        emailAddress: '',
        companyName: '',
        step: 1,
        password: '',
        verifyEmail: false,
        resetPassword: ''
    }
});

function CreateAccount() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: { md: 'row', xs: 'column' },
                    backgroundColor: '#FCFBF8',
                    width: '100%'
                }}
            >
                {/* left column */}
                <OnBoardingSidePanel />

                {/* right column */}
                <Box
                    sx={{
                        flexBasis: '66.66%',
                        justifyContent: 'center',
                        mt: '82px',
                        ml: '0px',
                        mr: '40px',
                        mb: '323px'
                    }}
                >
                    <Box
                        sx={{
                            height: '495px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <StateMachineProvider>
                            <Routes>
                                <Route path="/" element={<AccountType />} />
                                <Route
                                    path="/userCreate"
                                    element={<UserCreate />}
                                />
                                <Route
                                    path="/confirmEmail/:email"
                                    element={<EmailConfirmation />}
                                />
                                <Route
                                    path="/companyCreate"
                                    element={<CompanyCreate />}
                                />
                            </Routes>
                        </StateMachineProvider>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CreateAccount;
