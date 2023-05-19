import { Box } from '@mui/material';
import Header from '../components/JobApplication/Header';
import { JobApplicationItem } from '../types/JobApplicationItem';
import ApplicationList from '../components/JobApplication/ApplicationList';
import Profile from '../../../assets/images/profile-sq.png';

const SavedApplications = () => {
    const item: JobApplicationItem = {
        Profile: Profile,
        Applicantname: 'Marvin McKinney',
        Companyname: 'Xtera Solutions',
        Jobtype: 'Sales Manager',
        jobfit: 3,
        Postdate: '3 days',
        ApplicationViews: 550,
        keywords: [
            { name: 'Beginner', type: 'B', showbackground: false },
            { name: 'Mobile Int', type: 'E', showbackground: false },
            {
                name: 'Customer Experience Design',
                type: 'A',
                showbackground: false
            }
        ],
        active: true,
        saved: true
    };

    const data: JobApplicationItem[] = Array.from(Array(3).keys()).map(
        () => item
    );

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            <ApplicationList data={data} showMetrics={true} />
        </Box>
    );
};

export default SavedApplications;
