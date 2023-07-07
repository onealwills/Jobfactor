import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../components/JobApplication/Header';
import ApplicationList from '../components/JobApplication/ApplicationList';
import { useParams } from 'react-router-dom';
import { useGetJobById } from '../../../utils/hooks/api/jobs/useGetJobById';
import { useAuth } from '../../../utils/context/AuthContext';

const JobApplicants = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { data: job, isFetching } = useGetJobById(id ? id : '', user?.primaryCompanyProfile?.id ?? '');



 

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header title={job?.title ?? 'All Applicants'} />
            {!isFetching ?
                (job?.applicants?.length > 0 ? (
                    <ApplicationList
                        data={job?.applicants}
                        showMetrics={true}
                    />
                ) : (
                    <Typography
                        variant="titleMediumSemiBold"
                        component={'p'}
                        sx={{
                            mt: '20px',
                            textAlign: 'center'
                        }}
                    >
                        No applicants found!
                    </Typography>
                ))
                : null
            }
        </Box>
    );
};

export default JobApplicants;
