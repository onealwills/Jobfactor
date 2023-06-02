import { Box } from '@mui/material';
import Header from '../components/JobApplication/Header';
import { JobApplicationItem } from '../types/JobApplicationItem';
import ApplicationList from '../components/JobApplication/ApplicationList';
import Profile from '../../../assets/images/profile-sq.png';
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
