import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../components/JobApplication/Header';
import ApplicationList from '../components/JobApplication/ApplicationList';
import { useLocation } from 'react-router-dom';

const JobApplicants = () => {
    const location = useLocation().state;
    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header title={location?.title ?? 'All Applicants'} />
            {location?.applicants ? (
                <ApplicationList
                    data={location?.applicants}
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
            )}
        </Box>
    );
};

export default JobApplicants;
