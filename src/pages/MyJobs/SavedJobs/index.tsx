import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { IJobItem } from '../types/IJobItem';
import JobsHeader from '../components/JobsHeader';
import AspiringJobs from '../components/AspiringJobs';
import JobsList from '../components/JobsList/JobsList';
import { useAuth } from '../../../utils/context/AuthContext';
import { useGetSavedJobsByProfessionalId } from '../../../utils/hooks/api/saved-jobs/useGetSavedJobsByProfessionalId';

function SavedJobs() {

    const { user } = useAuth();
    const [filteredJobs, setFilteredJobs] = useState<IJobItem[]>([]);
    const professionalProfileId = user?.professionalProfile?.id ?? '';
    const { data: jobs, isFetching } = useGetSavedJobsByProfessionalId(professionalProfileId);

    const updateData = (jobId: string) => {
        setFilteredJobs(jobs?.filter((x: IJobItem) => x?.id !== jobId && x?.isSaved === true));
    }
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
                title="Saved Jobs"
                jobs={jobs}
                setJobs={setFilteredJobs}
            />
            {isFetching ?
                null
                :
                <>
                    <JobsList
                        title={'Recommended for you'}
                        description={'Based on your profile'}
                        data={filteredJobs}
                        showMetrics={true}
                        showheader={true}
                        updateData={updateData}
                    />
                    {/* <AspiringJobs />
                    <JobsList
                        title={'Remote opportunities'}
                        description={'Because you expressed interest in remote work'}
                        data={filteredJobs}
                        showMetrics={false}
                    />
                    <JobsList
                        title={'More jobs for you'}
                        description={
                            'Based on your search history, profile and suggestions'
                        }
                        data={filteredJobs}
                        showMetrics={false}
                    /> */}
                </>
            }
        </Box>
    );
}

export default SavedJobs;
