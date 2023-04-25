import { Box, Typography } from '@mui/material';
import React from 'react';
import RectangleLine from '../../../assets/icons/RectangleLine';
import { useStateMachine } from 'little-state-machine';

function OnboardingSteps() {
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
                    justifyContent: 'center',
                    alignItems: 'center'
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
                        Account type
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
                            color: step >= 2 ? '#FFFFFF' : '#23282B',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        2
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Create account
                    </Typography>
                </Box>
                <RectangleLine></RectangleLine>
                {/* ellipsis step 3*/}
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
                                step > 3
                                    ? COLORS.success
                                    : step === 3
                                    ? COLORS.accent
                                    : COLORS.primary,
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: step >= 3 ? '#FFFFFF' : '#23282B'
                        }}
                    >
                        3
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Verify email
                    </Typography>
                </Box>
                <RectangleLine></RectangleLine>
                {/* ellipsis step 4*/}
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
                                step > 4
                                    ? COLORS.success
                                    : step === 4
                                    ? COLORS.accent
                                    : COLORS.primary,
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: step >= 4 ? '#FFFFFF' : '#23282B'
                        }}
                    >
                        4
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{
                            whiteSpace: 'nowrap',
                            color: step >= 4 ? '#FFFFFF' : '#23282B'
                        }}
                    >
                        Set up profile
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default OnboardingSteps;
