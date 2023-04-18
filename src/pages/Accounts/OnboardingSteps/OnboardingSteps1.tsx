import { Box, Typography } from '@mui/material';
import React from 'react';
import RectangleLine from '../../../assets/icons/RectangleLine';

function OnboardingSteps() {

    const COLORS = {
        accent: '#FFC24C', // yellow
        success: '#07AF22', // green 
        primary: '#D9D9D9', // grey
        activeStep: '#FAFAFA' // text color, active step
    }


    // TODO refactor these steps to use react stepper here:
    // https://mui.com/material-ui/react-stepper/
    // Make each step change the color and clickable

    return (
        <>
            <Box
                sx={{
                    height: '60px',
                    width: 'full',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#FFC24C',
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color:  '#FAFAFA'
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
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            height: '40px',
                            width: '40px',
                            mb: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        4
                    </Box>
                    <Typography
                        fontFamily={'open sans'}
                        fontSize={'12px'}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Set up profile
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default OnboardingSteps;
