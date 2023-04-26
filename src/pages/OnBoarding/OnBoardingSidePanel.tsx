import { Box, Typography } from '@mui/material';
import React from 'react';
import JobFactorIcon from '../../assets/icons/JobFactorIcon';
import profileReview from './../../assets/images/profileReview.png';
import EllipsisIcon from '../../assets/icons/EllipsisIcon';
import { Link } from 'react-router-dom';

const loginTitle = 'Professionals meet companies';
const loginSubHeading =
    'Start your journey with us, discover the world’s best platform that connects professionals and companies';
const cardReview =
    'Absolutely amazing, the vetting algorithym is the best at proving ones level of experience';

function Column() {
    return (
        <>
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
                    gap: '40px'
                }}
            >
                {/* Column1 */}
                {/* Logo */}
                <Box sx={{ mt: '51px', width: '80%', alignSelf: 'center' }}>
                    <Link to={'/'}>
                        <JobFactorIcon />
                    </Link>
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
                            opacity: '0.85'
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
                            opacity: '0.65'
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
                            mb: '24px'
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
                                opacity: '0.75'
                            }}
                        >
                            {cardReview}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={profileReview}
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
                                        color: '#23282B'
                                    }}
                                >
                                    Mark Fisher
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontFamily: 'open sans',
                                        opacity: ' 0.75',
                                        color: '#23282B'
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
                            mb: '80px'
                        }}
                    >
                        <EllipsisIcon />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Column;
