import { Box, Grid } from '@mui/material';
import JobPostItem from '../JobPost/JobPostItem';
import { PostJobItem } from '../../types/PostJobItem';
import { useGetJobs } from '../../../../utils/hooks/api/jobs/useGetJobs';

const JobPostList = () => {
    const { data: jobs, isFetched } = useGetJobs();
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box sx={{ mx: 4 }}>
                {isFetched ? (
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
                        {jobs.map((item: PostJobItem) => (
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                xl={12}
                                sx={{
                                    width: 'full'
                                }}
                                key={`job_${item.id}`}
                            >
                                <JobPostItem jobInfo={item} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    null
                )}
            </Box>
        </Box>
    );
};

export default JobPostList;
