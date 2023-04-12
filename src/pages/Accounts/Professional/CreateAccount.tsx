import {
    Box,
    Typography,
    Button,
    FormGroup,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    FormControl,
} from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import OnBoardingSidePanel from '../../OnBoarding/OnBoardingSidePanel';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import OnboardingSteps from '../OnboardingSteps/OnboardingSteps1';
import OnboardStepOne from '../OnboardingSteps/OnboardStepOne';
import AccountType from './CreationSteps/AccountType';
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
    data: {
        accountType: '',
        fullName: '',
        email: '',
        password: '',
        verifyEmail: false,
        profile: {
            firstName: ''
        }
    }
})

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
                                <Route path="/" element={<AccountType/>} />
                                
                            </Routes>

                        </StateMachineProvider>
                        {/* steps */}
                        
                        {/* <OnboardStepOne/> */}
                        {/* Step 1 */}
                        {/* <AccountType/> */}
                        {/* Step 2 */}

                        
                        {/* Step 3 */}

                        
                        {/* Step 4 */}

                        
                        {/* Step 1 */}

                        
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CreateAccount;
