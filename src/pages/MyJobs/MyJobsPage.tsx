import { Box } from '@mui/material';
import JobsHeader from './components/JobsHeader';
import JobList from './components/JobList';
 
function MyJobsPage() {
    return (
        <Box sx={{
            mt: -6,
            ml: 2,
            mx: '40px',
            maxWidth: 1072,
        }}>
            <JobsHeader />
            {/*<JobMetrics />*/}
            <JobList />
        </Box>
    );
}

export default MyJobsPage;

