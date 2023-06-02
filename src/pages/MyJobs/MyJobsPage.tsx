import { Box } from '@mui/material';
import JobsHeader from './components/JobsHeader';
import JobsList from './components/JobsList/JobsList';
import AspiringJobs from './components/AspiringJobs';
import { useGetJobs } from '../../utils/hooks/api/jobs/useGetJobs';
import Loader from '../../components/Loader';

function MyJobsPage() {
    const { data: jobs, isLoading } = useGetJobs();

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <JobsHeader title="Jobs" />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <JobsList
                        title={'Recommended for you'}
                        description={'Based on your profile'}
                        data={jobs}
                        showMetrics={true}
                        showheader={true}
                    />
                    <AspiringJobs />
                    <JobsList
                        title={'Remote opportunities'}
                        description={
                            'Because you expressed interest in remote work'
                        }
                        data={jobs}
                        showMetrics={false}
                        showheader={true}
                    />
                    <JobsList
                        title={'More jobs for you'}
                        description={
                            'Based on your search history, profile and suggestions'
                        }
                        data={jobs}
                        showMetrics={false}
                        showheader={true}
                    />
                </>
            )}
        </Box>
    );
}

export default MyJobsPage;
