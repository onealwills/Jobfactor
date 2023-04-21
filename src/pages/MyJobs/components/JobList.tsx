import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import JobItem from './JobItem/JobItem';
import JobMetrics from './JobMetrics';

const JobList = () => {
    const data = Array.from(Array(100).keys());
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log({ isSmallScreen });
    return (
        <Box sx={{ backgroundColor: '#FFFFFF' }}>
            <Box sx={{ mx: 4 }}>
                <JobMetrics />
                <Grid container spacing={2} sx={{
                    flexGrow: 1,
                    marginTop: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    {data.map((item) => (
                        <Grid item xs={12} lg={12} xl={6} key={item} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'full',
                            gap: '32px',
                        }}>
                            <JobItem />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};


export default JobList;