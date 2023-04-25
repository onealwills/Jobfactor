import { Box, Typography } from '@mui/material';
import React from 'react';
import EmailConfirmationIcon from '../../../../assets/icons/EmailConfirmationIcon';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps';
import { updateStep } from './updateAction';
import { useStateMachine } from 'little-state-machine';

function EmailConfirmation() {
    const { actions } = useStateMachine({ updateStep });

    React.useEffect(() => {
        actions.updateStep(3);
    }, []);

    return (
        <>
            <OnboardingSteps />
            <Box
                sx={{
                    mt: '72px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Box sx={{ width: '518px' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeiht: 600,
                            color: '#23282B',
                            fontSize: '32px'
                        }}
                    >
                        Verify email
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            color: '#808080',
                            fontSize: '20px',
                            lineHeight: '28px',
                            mt: '20px',
                            mb: '40px'
                        }}
                    >
                        An verification email has been sent to your email
                        address, Please proceed to verify your email address, to
                        continue your signup process
                    </Typography>
                    <EmailConfirmationIcon />
                </Box>
            </Box>
        </>
    );
}

export default EmailConfirmation;
