import Box from '@mui/material/Box';
import Header from '../components/JobApplication/Header';
import { useAuth } from '../../../utils/context/AuthContext';
import ApplicationList from '../components/JobApplication/ApplicationList';
import { useGetAllApplicantsByCompanyId } from '../../../utils/hooks/api/jobs/useGetAllApplicantsByCompanyId';

const JobApplications = () => {
    const { user } = useAuth();
    const companyId = user?.primaryCompanyProfile?.companyId ?? '';
    const { data: applicants, isFetching } = useGetAllApplicantsByCompanyId(companyId);

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            {isFetching ?
                null
                :
                <ApplicationList data={applicants?.length > 0 ? applicants : []} showMetrics={true} />
            }
        </Box>
    );
};

export default JobApplications;
