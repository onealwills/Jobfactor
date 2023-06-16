import { Box } from '@mui/material';
import Header from '../components/JobPost/Header';
import JobPostList from '../components/JobPost/JobPostList';

const JobPostings = () => {
    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            <JobPostList />
        </Box>
    );
};

export default JobPostings;
