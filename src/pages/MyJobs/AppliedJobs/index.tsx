import { Box } from '@mui/material';
import JobsHeader from '../components/JobsHeader';
import JobsList from '../components/JobsList/JobsList';
import { IJobItem } from '../types/IJobItem';
import { useGetAppliedJobs } from '../../../utils/hooks/api/jobs/useGetAppliedJobs';
import { useAuth } from '../../../utils/context/AuthContext';

function AppliedJobs() {
    const { user } = useAuth();
    const { data: jobs, isFetching } = useGetAppliedJobs(
        user.professionalProfile.id
    );

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <JobsHeader title="Applied Jobs" />
            {isFetching ? (
                null
            ) : (
                <>
                    <JobsList
                        title={'Applied Jobs'}
                        description={'Based on your profile'}
                        data={jobs.map((x: IJobItem) => ({
                            ...x,
                            ...x.jobPosting,
                            isApplied: true
                        }))}
                        showMetrics={true}
                    />
                </>
            )}
        </Box>
    );
}

export default AppliedJobs;
