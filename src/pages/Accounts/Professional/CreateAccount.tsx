import {
    Box,
    Typography,
    InputLabel,
    InputBase,
    Checkbox,
    Button,
    FormGroup,
    FormControlLabel,
} from '@mui/material';
import React from 'react';
import JobFactorIcon from '../../../assets/icons/JobFactorIcon';
import EllipsisIcon from '../../../assets/icons/EllipsisIcon';
import RectangleLine from '../../../assets/icons/RectangleLine';

const loginTitle = 'Professionals meet companies';
const loginSubHeading =
    'Start your journey with us, discover the world’s best platform that connects professionals and companies';
const cardReiew =
    'Absolutely amazing, the vetting algorithym is the best at proving ones level of experience';

function CreateAccount() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: { md: 'row', xs: 'column' },
                    alignItems: 'center',
                    backgroundColor: '#FCFBF8',
                    width: '100%',
                }}
            >
                {/* left column */}
                <Box
                    sx={{
                        backgroundColor: '#F1F1F1',
                        flexBasis: '33.33%',
                        m: { md: '40px', xs: '0px' },
                        minHeight: { md: 'calc(100vh - 80px)', xs: '100%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: { lg: '553px', xs: '50%' },
                        gap: '40px',
                    }}
                >
                    {/* Column1 */}
                    {/* Logo */}
                    <Box sx={{ mt: '51px', width: '80%', alignSelf: 'center' }}>
                        <JobFactorIcon />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '45px',
                                fontFamily: 'open sans',
                                fontStyle: 'semibold',
                                fontWeight: '600',
                                textAlign: 'left',
                                mb: '28px',
                                mt: '10px',
                                px: '53px',
                                color: '#23282B',
                                lineHeight: '52px',
                                opacity: '0.85',
                            }}
                        >
                            {loginTitle}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontFamily: 'open sans',
                                lineHeight: '28px',
                                color: '#23282B',
                                textAlign: 'left',
                                px: '53px',
                                opacity: '0.65',
                            }}
                        >
                            {loginSubHeading}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '80%', alignSelf: 'center' }}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: '24px 20px',
                                backgroundColor: '#FFFFFF',
                                mb: '24px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'open sans',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    lineHeight: '28px',
                                    mb: '28px',
                                    color: '#23282B',
                                    opacity: '0.75',
                                }}
                            >
                                {cardReiew}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src=""
                                    alt="Reviewer Avatar"
                                    height="64"
                                    width="64"
                                ></img>
                                <Box sx={{ ml: '16px' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontFamily: 'open sans',
                                            fontWeight: '700',
                                            opacity: ' 0.9',
                                            color: '#23282B',
                                        }}
                                    >
                                        Mark Fisher
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontFamily: 'open sans',
                                            opacity: ' 0.75',
                                            color: '#23282B',
                                        }}
                                    >
                                        Professional
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: '24px',
                                mb: '80px',
                            }}
                        >
                            <EllipsisIcon />
                        </Box>
                    </Box>
                </Box>

                {/* right column */}
                <Box
                    sx={{
                        flexBasis: '66.66%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: '40px',
                        my: '40px',
                        mt: '82px',
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
                        {/* steps */}
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
                        <Box
                            sx={{
                                height: '364px',
                                width: '458px',
                                mt: '71px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                fontSize={'32px'}
                                fontWeight={'semibold'}
                            >
                                What best describes you?
                            </Typography>
                            {/* checkboxes */}
                            <FormGroup sx={{ mt: '32px' }}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="I am a Professional"
                                    sx={{
                                        mb: '20px',
                                        borderBottom: '1px solid #EDEDED',
                                        height: '56px',
                                        width: '458px',
                                        padding: '16px',
                                        backgroundColor:'#FFFFFF'
                                    }}
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="I am a Company"
                                ></FormControlLabel>
                            </FormGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CreateAccount;
