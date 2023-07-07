import { Box } from '@mui/material';
import Header from '../components/JobApplication/Header';
import { useAuth } from '../../../utils/context/AuthContext';
import ApplicationList from '../components/JobApplication/ApplicationList';
import { useGetSavedApplicantByCompanyId } from '../../../utils/hooks/api/saved-applicants/useGetSavedApplicantByCompanyId';
import { useEffect, useState } from 'react';
import { JobApplicationItem } from '../types/JobApplicationItem';

const SavedApplications = () => {
    const { user } = useAuth();
    const [applicants, setApplicants] = useState<JobApplicationItem[]>([]);
    const companyProfileId = user?.primaryCompanyProfile?.id ?? '';
    const { data, isFetching } = useGetSavedApplicantByCompanyId(companyProfileId);

    const updateData = (applicantId: string) => {
        setApplicants(data?.filter((x: JobApplicationItem) => x?.id !== applicantId && x?.isSaved === true));
    }

    useEffect(() => {
        if (data) {
            setApplicants(data);
        } else {
            setApplicants([])
        }
    }, [data]);

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            {isFetching ? null : <ApplicationList data={applicants?.length ? applicants : []} updateData={updateData} showMetrics={true} />}
        </Box>
    );
};

export default SavedApplications;
