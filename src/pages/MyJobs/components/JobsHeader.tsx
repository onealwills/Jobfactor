import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import { JobsFilterIcon } from '../../../assets/icons/JobsFilterIcon';

const JobsHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: 4
                }}
            >
                <ArrowLeftIcon />
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    Jobs
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2.5
                }}
            >
                <Typography>Date Posted</Typography>
                <Typography>Location Type</Typography>
                <Typography>Job Type</Typography>
                <JobsFilterIcon />
            </Box>
        </Box>
    );
};

export default JobsHeader;
