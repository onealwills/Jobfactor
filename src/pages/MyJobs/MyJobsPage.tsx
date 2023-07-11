import { Box } from '@mui/material';
import { IJobItem } from './types/IJobItem';
import { useEffect, useState } from 'react';
import JobsHeader from './components/JobsHeader';
import AspiringJobs from './components/AspiringJobs';
import JobsList from './components/JobsList/JobsList';
import { useGetJobs } from '../../utils/hooks/api/jobs/useGetJobs';
import { useAuth } from '../../utils/context/AuthContext';

function MyJobsPage() {
    const { user } = useAuth();
    const { data: jobs, isFetching } = useGetJobs(user?.professionalProfile?.id ?? '');
    const [filteredJobs, setFilteredJobs] = useState<IJobItem[]>([]);
    useEffect(() => {
        if (jobs) {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs([])
        }
    }, [jobs])

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <JobsHeader
                title="Jobs"
                jobs={jobs}
                setJobs={setFilteredJobs}
            />
            {isFetching ?
                null
                :
                <>
                    <JobsList
                        title={'Recommended for you'}
                        description={'Based on your profile and search history '}
                        data={filteredJobs}
                        showMetrics={true}
                        showheader={true}
                    />
                    {/* <AspiringJobs />
                    <JobsList
                        title={'Remote opportunities'}
                        description={
                            'Because you expressed interest in remote work'
                        }
                        data={filteredJobs}
                        showMetrics={false}
                        showheader={true}
                    />
                    <JobsList
                        title={'More jobs for you'}
                        description={
                            'Based on your search history, profile and suggestions'
                        }
                        data={filteredJobs}
                        showMetrics={false}
                        showheader={true}
                    /> */}
                </>
            }
        </Box>
    );
}

export default MyJobsPage;
