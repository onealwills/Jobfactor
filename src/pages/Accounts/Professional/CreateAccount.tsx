import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import OnBoardingSidePanel from '../../OnBoarding/OnBoardingSidePanel';
import { StateMachineProvider, createStore } from 'little-state-machine';
import AccountType from './CreationSteps/AccountType';
import UserCreate from './CreationSteps/UserCreate';
import EmailConfirmation from './CreationSteps/EmailConfirmation';
import { CreateAccountType } from '../../../utils/hooks/api/account/types';

createStore({
    data: {
        accountType: CreateAccountType.Professional || CreateAccountType.Company,
        firstName: '',
        lastName: '',
        emailAddress: '',
        company: '',
        step: 1,
        password: '',
        verifyEmail: false
    },
});

function CreateAccount() {
    // TODO
    // create each page in the steps for creating an account
    // Make a "wizard" for setting up accounts saving the data from each step in the local storage
    // // https://react-hook-form.com/advanced-usage/#WizardFormFunnel
    // call each step by the prop value passed through


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: { md: 'row', xs: 'column' },
                    backgroundColor: '#FCFBF8',
                    width: '100%',
                }}
            >
                {/* left column */}
                <OnBoardingSidePanel />

                {/* right column */}
                <Box
                    sx={{
                        flexBasis: '66.66%',
                        justifyContent: 'center',
                        ml: '120px',
                        mt: '82px',
                        mb: '323px',
                    }}
                >
                    {/* right column */}
                    <Box
                        sx={{
                            height: '495px',
                            width: '599px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <StateMachineProvider>
                            <Routes>
                                <Route path="/" element={<AccountType />} />
                                <Route path="/userCreate" element={<UserCreate/>} />
                                <Route path="/confirmEmail" element={<EmailConfirmation/>} />
                            </Routes>
                        </StateMachineProvider>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CreateAccount;
