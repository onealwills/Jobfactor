import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { JobsBadgeIcon } from '../../../assets/icons/JobsBadgeIcon';

const AspiringJobsHeader = () => {
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #D9D9D9',
                    pb: '20px',
                    pt: 1.5
                }}
            >
                <Box sx={{ mx: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                        }}
                    >
                        <Typography
                            variant="headlineSmallSemiBold"
                            color="#23282B"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            Aspiring Jobs
                            <JobsBadgeIcon />
                        </Typography>

                        <Typography
                            variant="titleMediumRegular"
                            color="#808080"
                        >
                            Based on your interests in other fields
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const JobsAspiringProfileViewIcon = () => {
    return (
        <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M42.682 13.9591C40.982 12.0791 38.142 11.1391 34.022 11.1391H33.542V11.0591C33.542 7.69906 33.542 3.53906 26.022 3.53906H22.982C15.462 3.53906 15.462 7.71906 15.462 11.0591V11.1591H14.982C10.842 11.1591 8.02203 12.0991 6.32203 13.9791C4.34203 16.1791 4.40203 19.1391 4.60203 21.1591L4.62203 21.2991L4.82203 23.3991C4.84203 23.4191 4.88203 23.4591 4.92203 23.4791C5.58203 23.9191 6.26203 24.3591 6.98203 24.7591C7.26203 24.9391 7.56203 25.0991 7.86203 25.2591C11.282 27.1391 15.042 28.3991 18.862 29.0191C19.042 30.8991 19.862 33.0991 24.242 33.0991C28.622 33.0991 29.482 30.9191 29.622 28.9791C33.702 28.3191 37.642 26.8991 41.202 24.8191C41.322 24.7591 41.402 24.6991 41.502 24.6391C42.422 24.1191 43.282 23.5591 44.122 22.9391C44.162 22.9191 44.202 22.8791 44.222 22.8391L44.302 22.1191L44.402 21.1791C44.422 21.0591 44.422 20.9591 44.442 20.8191C44.602 18.7991 44.562 16.0391 42.682 13.9591ZM26.682 27.6591C26.682 29.7791 26.682 30.0991 24.222 30.0991C21.762 30.0991 21.762 29.7191 21.762 27.6791V25.1591H26.682V27.6591ZM18.322 11.1391V11.0591C18.322 7.65906 18.322 6.39906 22.982 6.39906H26.022C30.682 6.39906 30.682 7.67906 30.682 11.0591V11.1591H18.322V11.1391Z"
                fill="#49B6FF"
            />
            <path
                opacity="0.4"
                d="M41.5003 24.6008C41.4003 24.6608 41.3003 24.7208 41.2003 24.7808C37.6403 26.8608 33.7003 28.2608 29.6203 28.9408C29.4603 30.8608 28.6203 33.0608 24.2403 33.0608C19.8603 33.0608 19.0203 30.8808 18.8603 28.9808C15.0403 28.3808 11.2803 27.1208 7.86031 25.2208C7.56031 25.0608 7.26031 24.9008 6.98031 24.7208C6.26031 24.3208 5.58031 23.8808 4.92031 23.4408C4.88031 23.4208 4.84031 23.3808 4.82031 23.3608L6.04031 36.3808C6.46031 40.3608 8.10031 44.4608 16.9003 44.4608H32.1403C40.9403 44.4608 42.5803 40.3608 43.0003 36.3608L44.2603 22.8008C44.2403 22.8408 44.2003 22.8808 44.1603 22.9008C43.3003 23.5208 42.4203 24.1008 41.5003 24.6008Z"
                fill="#49B6FF"
            />
        </svg>
    );
};

const JobsAspiringSearchIcon = () => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.4"
                d="M22.02 40.04C31.9722 40.04 40.04 31.9722 40.04 22.02C40.04 12.0678 31.9722 4 22.02 4C12.0678 4 4 12.0678 4 22.02C4 31.9722 12.0678 40.04 22.02 40.04Z"
                fill="#49B6FF"
            />
            <path
                d="M43.984 37.9C43.324 36.68 41.924 36 40.044 36C38.624 36 37.404 36.58 36.684 37.58C35.964 38.58 35.804 39.92 36.244 41.26C37.104 43.86 38.604 44.44 39.424 44.54C39.544 44.56 39.664 44.56 39.804 44.56C40.684 44.56 42.044 44.18 43.364 42.2C44.424 40.66 44.624 39.12 43.984 37.9Z"
                fill="#49B6FF"
            />
        </svg>
    );
};

const JobsAspiringGraphIcon = () => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M43.3403 13.8988C42.0603 9.55883 38.4403 5.93883 34.1003 4.65883C30.8003 3.69883 28.5203 3.77883 26.9403 4.95883C25.0403 6.37883 24.8203 8.93883 24.8203 10.7588V15.7388C24.8203 20.6588 27.0603 23.1588 31.4603 23.1588H37.2003C39.0003 23.1588 41.5803 22.9388 43.0003 21.0388C44.2203 19.4788 44.3203 17.1988 43.3403 13.8988Z"
                fill="#49B6FF"
            />
            <path
                opacity="0.4"
                d="M37.8227 26.7183C37.3027 26.1183 36.5427 25.7783 35.7627 25.7783H28.6027C25.0827 25.7783 22.2227 22.9183 22.2227 19.3983V12.2383C22.2227 11.4583 21.8827 10.6983 21.2827 10.1783C20.7027 9.65835 19.9027 9.41835 19.1427 9.51835C14.4427 10.1183 10.1227 12.6983 7.30273 16.5783C4.46273 20.4783 3.42273 25.2383 4.32273 29.9983C5.62273 36.8783 11.1227 42.3783 18.0227 43.6783C19.1227 43.8983 20.2227 43.9983 21.3227 43.9983C24.9427 43.9983 28.4427 42.8783 31.4227 40.6983C35.3027 37.8783 37.8827 33.5583 38.4827 28.8583C38.5827 28.0783 38.3427 27.2983 37.8227 26.7183Z"
                fill="#49B6FF"
            />
        </svg>
    );
};
const AspiringJobsMainSection = () => {
    const data = [
        {
            title: 'Profile Views',
            description: 'Find out who viewed your profile.',
            icon: <JobsAspiringProfileViewIcon />
        },
        {
            title: 'Search Appearances',
            description: 'See how you appear in search results.',
            icon: <JobsAspiringSearchIcon />
        },
        {
            title: 'Post engagements',
            description: 'Checkout who is engaging with your posts.',
            icon: <JobsAspiringGraphIcon />
        }
    ];

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    justifyContent: 'space-between',
                    pb: '20px',
                    pt: 1.5,
                    mx: '70px'
                }}
            >
                {data.map((item, index) => {
                    return (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5
                                }}
                            >
                                {item.icon}
                                <Typography
                                    variant="titleLargeSemiBold"
                                    color="#23282B"
                                    sx={{ textTransform: 'capitalize' }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 200,
                                    mx: 'auto',
                                    textAlign: 'center',
                                    mt: 2
                                }}
                            >
                                <Typography
                                    variant="titleMediumRegular"
                                    color="#23282B"
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};
const AspiringJobCTA = () => {
    return (
        <Button
            variant="contained"
            sx={{
                borderRadius: '0px 0px 8px 8px',
                py: '14px'
            }}
        >
            Upgrade to Premium plan <Box sx={{ mr: 1.5 }} />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.8075 5.49V6.23L14.2675 4.18C12.9275 3.41 11.0575 3.41 9.7275 4.18L6.1875 6.24V5.49C6.1875 3.24 7.4175 2 9.6675 2H14.3275C16.5775 2 17.8075 3.24 17.8075 5.49Z"
                    fill="white"
                />
                <path
                    d="M17.84 7.96828L17.7 7.89828L16.34 7.11828L13.52 5.48828C12.66 4.98828 11.34 4.98828 10.48 5.48828L7.66 7.10828L6.3 7.90828L6.12 7.99828C4.37 9.17828 4.25 9.39828 4.25 11.2883V15.8083C4.25 17.6983 4.37 17.9183 6.16 19.1283L10.48 21.6183C10.91 21.8783 11.45 21.9883 12 21.9883C12.54 21.9883 13.09 21.8683 13.52 21.6183L17.88 19.0983C19.64 17.9183 19.75 17.7083 19.75 15.8083V11.2883C19.75 9.39828 19.63 9.17828 17.84 7.96828ZM14.79 13.4983L14.18 14.2483C14.08 14.3583 14.01 14.5683 14.02 14.7183L14.08 15.6783C14.12 16.2683 13.7 16.5683 13.15 16.3583L12.26 15.9983C12.12 15.9483 11.89 15.9483 11.75 15.9983L10.86 16.3483C10.31 16.5683 9.89 16.2583 9.93 15.6683L9.99 14.7083C10 14.5583 9.93 14.3483 9.83 14.2383L9.21 13.4983C8.83 13.0483 9 12.5483 9.57 12.3983L10.5 12.1583C10.65 12.1183 10.82 11.9783 10.9 11.8583L11.42 11.0583C11.74 10.5583 12.25 10.5583 12.58 11.0583L13.1 11.8583C13.18 11.9883 13.36 12.1183 13.5 12.1583L14.43 12.3983C15 12.5483 15.17 13.0483 14.79 13.4983Z"
                    fill="white"
                />
            </svg>
        </Button>
    );
};
const AspiringJobs = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'white'
            }}
        >
            <AspiringJobsHeader />
            <AspiringJobsMainSection />
            <AspiringJobCTA />
        </Box>
    );
};

export default AspiringJobs;
