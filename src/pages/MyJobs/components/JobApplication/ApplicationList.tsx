import React from 'react';
import { Box, Grid } from '@mui/material';
import JobMetrics from '../JobsList/JobMetrics';
import { JobApplicationItem } from '../../types/JobApplicationItem';
import ApplicationItem from './ApplicationItem';

const ApplicationList = (props: {
    data: JobApplicationItem[];
    showMetrics?: boolean;
}) => {
    const { data, showMetrics } = props;

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box sx={{ mx: 4 }}>
                {showMetrics ? <JobMetrics /> : null}
                <Grid
                    container
                    sx={{
                        flexGrow: 1,
                        marginTop: '20px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {data.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            xl={12}
                            sx={{
                                width: 'full',
                                margin: '10px 0'
                            }}
                        >
                            <ApplicationItem ApplcantInfo={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ApplicationList;
