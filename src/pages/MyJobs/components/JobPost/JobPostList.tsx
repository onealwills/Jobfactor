import React from 'react';
import { Box, Grid } from '@mui/material';
import JobPostItem from '../JobPost/JobPostItem';
import { PostJobItem } from '../../types/PostJobItem';

const JobPostList = (props: { data: PostJobItem[]; tittle: string }) => {
    const { data, tittle } = props;

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box sx={{ mx: 4 }}>
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
                    {data.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            xl={12}
                            sx={{
                                width: 'full'
                            }}
                        >
                            <JobPostItem jobInfo={item} tittle={tittle} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default JobPostList;
