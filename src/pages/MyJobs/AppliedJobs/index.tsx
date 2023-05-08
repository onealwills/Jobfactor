import { Box } from '@mui/material';
import JobsHeader from '../components/JobsHeader';
import JobsList from '../components/JobsList/JobsList';
import AspiringJobs from '../components/AspiringJobs';
import { IJobItem } from '../types/IJobItem';
import shellLogo from '../../../assets/images/shellLogo.png';

function AppliedJobs() {
    const item: IJobItem = {
        companyName: 'Shell Energy',
        location: 'Lagos',
        jobTitle: 'Product Designer',
        companyLogo: shellLogo,
        keywords: [
            { name: 'Office Environment', type: 'L', showbackground: true },
            { name: 'Job Security', type: 'A', showbackground: true },
            { name: 'Job Security', type: 'E', showbackground: true },
            { name: 'Job Security', type: 'E', showbackground: true }
        ],
        jobType: 'Full-time',
        salary: 'N250,000 a month',
        jobFitMetric: 3,
        requirements: {
            minJobFactorScore: 550,
            keywords: [
                { name: 'Visual Design', type: 'B', showbackground: false },
                { name: 'Motion Design', type: 'A', showbackground: false },
                { name: 'Prototyping', type: 'X', showbackground: false },
            ],
            responsibilities: [
                'Experience as a UI/UX designer or similar role for digital products and services ',
                'Coordinate with the UI design team on issues like navigation, page routing... '
            ]
        },
        posted: '3 days ago',
        alreadyapply: true
    };
    const data: IJobItem[] = Array.from(Array(2).keys()).map(() => item);

    return (
        <Box
            sx={{
                marginLeft: '15px'
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

export default AppliedJobs;
