import { Box } from '@mui/material';
import JobsHeader from './components/JobsHeader';
import JobsList from './components/JobsList/JobsList';
import AspiringJobs from './components/AspiringJobs';
import { useGetJobs } from '../../utils/hooks/api/jobs/useGetJobs';
import { useGetAppliedJobs } from '../../utils/hooks/api/jobs/useGetAppliedJobs';
import { useAuth } from '../../utils/context/AuthContext';
import { useEffect, useState } from 'react';
import { IJobItem } from './types/IJobItem';

function MyJobsPage() {
    const { user } = useAuth();
    const { data, isFetching } = useGetJobs();
    const [jobs, setJobs] = useState<IJobItem[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { data: appliedJobs, isFetching: appliedJobsFetching } =
        useGetAppliedJobs(user.professionalProfile.id);

    useEffect(() => {
        setIsLoaded(false);
        if (!isFetching && !appliedJobsFetching) {
            let jobIds: string[] = [];
            let jobs: IJobItem[] = [];
            appliedJobs.map((x: IJobItem) =>
                jobIds.push(x?.jobPosting?.id ?? '')
            );
            data.filter((x: IJobItem) => {
                if (jobIds.includes(x.id ?? '')) {
                    jobs.push({ ...x, isApplied: true });
                } else {
                    jobs.push({ ...x, isApplied: false });
                }
                return null;
            });
            setJobs(jobs);
            setIsLoaded(true);
        }
    }, [isFetching, appliedJobsFetching, appliedJobs, data]);

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <JobsHeader title="Jobs" />
            {isLoaded ? (
                <>
                    <JobsList
                        title={'Recommended for you'}
                        description={'Based on your profile'}
                        data={jobs}
                        showMetrics={true}
                        showheader={true}
                    />
                    <AspiringJobs />
                    <JobsList
                        title={'Remote opportunities'}
                        description={
                            'Because you expressed interest in remote work'
                        }
                        data={jobs}
                        showMetrics={false}
                        showheader={true}
                    />
                    <JobsList
                        title={'More jobs for you'}
                        description={
                            'Based on your search history, profile and suggestions'
                        }
                        data={jobs}
                        showMetrics={false}
                        showheader={true}
                    />
                </>
            ) : null}
        </Box>
    );
}

export default MyJobsPage;
