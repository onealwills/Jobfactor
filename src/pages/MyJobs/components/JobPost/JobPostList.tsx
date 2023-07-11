import { Box, Grid } from '@mui/material';
import JobPostItem from '../JobPost/JobPostItem';
import { PostJobItem } from '../../types/PostJobItem';
import { useAuth } from '../../../../utils/context/AuthContext';
import { useGetJobsByCompanyId } from '../../../../utils/hooks/api/jobs/useGetJobsByCompanyId';

const JobPostList = () => {
    const { user } = useAuth();
    const companyId = user?.primaryCompanyProfile?.companyId ?? '';
    const { data: jobs, isFetched } = useGetJobsByCompanyId(companyId);
    return (
        <Box sx={{ mt: '8px' }}>
            <Box>
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
                        {jobs ? jobs?.map((item: PostJobItem) => (
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
                        ))
                            : null
                        }
                    </Grid>
                ) : (
                    null
                )}
            </Box>
        </Box>
    );
};

export default JobPostList;
