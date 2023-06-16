import Box from '@mui/material/Box';
import Header from '../components/JobApplication/Header';
import ApplicationList from '../components/JobApplication/ApplicationList';
import { useGetAllApplicants } from '../../../utils/hooks/api/jobs/useGetAllApplicants';
import Loader from '../../../components/Loader';

const JobApplications = () => {
    const { data: applicants, isLoading } = useGetAllApplicants();

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <ApplicationList data={applicants} showMetrics={true} />
            )}
        </Box>
    );
};

export default JobApplications;
