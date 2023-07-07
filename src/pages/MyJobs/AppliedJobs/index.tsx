import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { IJobItem } from '../types/IJobItem';
import JobsHeader from '../components/JobsHeader';
import JobsList from '../components/JobsList/JobsList';
import { useAuth } from '../../../utils/context/AuthContext';
import { useGetAppliedJobs } from '../../../utils/hooks/api/jobs/useGetAppliedJobs';

function AppliedJobs() {
    const { user } = useAuth();
    const [filteredJobs, setFilteredJobs] = useState<IJobItem[]>([]);
    const professionalProfileId = user?.professionalProfile?.id ?? '';

    const { data: jobs, isFetching } = useGetAppliedJobs(professionalProfileId);

    useEffect(() => {
        if (jobs) {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs([])
        }
    }, [jobs]);

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <JobsHeader
                title="Applied Jobs"
                jobs={jobs}
                setJobs={setFilteredJobs}
            />
            {isFetching ?
                null
                :
                <JobsList
                    title={'Applied Jobs'}
                    description={'Based on your profile'}
                    data={filteredJobs}
                    showMetrics={true}
                />
            }
        </Box>
    );
}

export default AppliedJobs;
