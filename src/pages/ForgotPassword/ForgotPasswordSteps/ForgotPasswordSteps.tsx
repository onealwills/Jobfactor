import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RectangleLine from '../../../assets/icons/RectangleLine';
import { useStateMachine } from 'little-state-machine';

function ForgotPasswordSteps() {
    const COLORS = {
        accent: '#FFC24C', // yellow
        success: '#07AF22', // green
        primary: '#D9D9D9', // grey
        activeStep: '#FAFAFA' // text color, active step
    };
    const {
        state: {
            data: { step }
        }
    } = useStateMachine();

    return (
        <>
            <Box
                sx={{
                    height: '60px',
                    width: 'full',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    mb: '64px'
                }}
            >
                {/* ellipsis step 1*/}
                <Box
                    sx={{
                        width: '73px',
                        height: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor:
                                step > 1
                                    ? COLORS.success
                                    : step === 1
                                    ? COLORS.accent
                                    : COLORS.primary,
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: step >= 1 ? '#FFFFFF' : '#23282B'
                        }}
                    >
                        1
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Email address
                    </Typography>
                </Box>
                <RectangleLine></RectangleLine>
                {/* ellipsis step 2*/}
                <Box
                    sx={{
                        width: '73px',
                        height: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor:
                                step > 2
                                    ? COLORS.success
                                    : step === 2
                                    ? COLORS.accent
                                    : COLORS.primary,
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: step >= 2 ? '#FFFFFF' : '#23282B'
                        }}
                    >
                        2
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Reset password
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default ForgotPasswordSteps;
