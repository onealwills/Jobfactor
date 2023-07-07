import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import JobItem from '../JobItem/JobItem';
import JobMetrics from './JobMetrics';
import { IJobItem } from '../../types/IJobItem';
import JobListHeader from './JobListHeader';

const JobsList = (props: {
    data: IJobItem[];
    title: string;
    description: string;
    showMetrics?: boolean;
    showheader?: boolean;
    updateData?: (jobId: string) => void;
}) => {
    const { data, title, description, showMetrics, showheader, updateData = () => { } } = props;
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box sx={{ mx: 4 }}>
                {showheader && (
                    <JobListHeader title={title} description={description} />
                )}
                {showMetrics ? <JobMetrics /> : null}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                        marginTop: '20px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {data?.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            xl={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 'full',
                                gap: '32px'
                            }}
                        >
                            <JobItem jobInfo={item} updateData={updateData}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default JobsList;
