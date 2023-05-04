import { Box } from '@mui/material';
import JobsHeader from './components/JobsHeader';
import JobsList from './components/JobsList/JobsList';
import AspiringJobs from './components/AspiringJobs';
import { IJobItem } from './types/IJobItem';
import shellLogo from '../../assets/images/shellLogo.png';
import ApplyJob from './components/JobItem/ApplyJob';

function MyJobsPage() {
    const item: IJobItem = {
        companyName: 'Shell Energy',
        location: 'Lagos',
        jobTitle: 'Product Designer',
        companyLogo: shellLogo,
        keywords: [
            { name: 'Office Environment', type: 'L' },
            { name: 'Job Security', type: 'A' },
            { name: 'Job Security', type: 'E' },
            { name: 'Job Security', type: 'E' }
        ],
        jobType: 'Full-time',
        salary: 'N250,000 a month',
        jobFitMetric: 3,
        requirements: {
            minJobFactorScore: 550,
            keywords: [
                { name: 'Visual Design', type: 'B' },
                { name: 'Motion Design', type: 'B' },
                { name: 'Prototyping', type: 'B' },
                { name: 'Prototyping', type: 'B' }
            ],
            responsibilities: [
                'Experience as a UI/UX designer or similar role for digital products and services ',
                'Coordinate with the UI design team on issues like navigation, page routing... '
            ]
        },
        posted: '3 days ago'
    };
    const data: IJobItem[] = Array.from(Array(2).keys()).map(() => item);

    return (
        <Box
            sx={{
                mt: -6,
                ml: 2,
                mx: '40px',
                maxWidth: 1072
            }}
        >
            <JobsHeader />
            <JobsList
                title={'Recommended for you'}
                description={'Based on your profile'}
                data={data}
                showMetrics={true}
            />
            <AspiringJobs />
            <JobsList
                title={'Remote opportunities'}
                description={'Because you expressed interest in remote work'}
                data={data}
                showMetrics={false}
            />
            <JobsList
                title={'More jobs for you'}
                description={
                    'Based on your search history, profile and suggestions'
                }
                data={data}
                showMetrics={false}
            />
        </Box>
    );
}

export default MyJobsPage;
