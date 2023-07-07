import React, { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ChipList from '../Chips/ChipList';
import { useNavigate } from 'react-router-dom';
import { IJobItem } from '../../types/IJobItem';
import JobSalaryIcon from '../../../../assets/icons/JobSalaryIcon';
import JobTypeIcon from '../../../../assets/icons/JobTypeIcon';
import JobBookmarkIcon from '../../../../assets/icons/JobBookmarkIcon';
import VerifiedIcon from '../../../../assets/icons/VerifiedIcon';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ApplyJob from './ApplyJob';
import moment from 'moment';
import { getJobType, getSalaryRange } from '../../../../utils/Helper/helper';
import { useSaveJob } from '../../../../utils/hooks/api/saved-jobs/useSaveJob';
import { useAuth } from '../../../../utils/context/AuthContext';
import SnackAlert from '../../../../components/Snackbar';
import { useDeleteSavedJob } from '../../../../utils/hooks/api/saved-jobs/useDeleteSavedJob';

const keywords = [
    { name: 'Office Environment', type: 'L', showbackground: true },
    { name: 'Job Security', type: 'A', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true }
];
const requirements = {
    minJobFactorScore: 550,
    keywords: [
        { name: 'Visual Design', type: 'B', showbackground: false },
        { name: 'Motion Design', type: 'A', showbackground: false },
        { name: 'Prototyping', type: 'X', showbackground: false }
    ]
};
const JobItem = (props: { jobInfo: IJobItem, updateData?: (jobId: string) => void }) => {
    const { jobInfo, updateData = () => { } } = props;
    const { user } = useAuth();
    const saveJob = useSaveJob();
    const deleteJob = useDeleteSavedJob();
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [applyjob, setApplyjob] = useState<boolean>(false);
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const onHideJob = (e: any) => {
        setApplyjob(false);
    };

    const toggleSaveJob = () => {
        if (!jobInfo.isSaved) {
            let data = {
                jobPostingId: jobInfo.id ?? '',
                professionalProfileId: user?.professionalProfile?.id ?? ''
            }
            saveJob.mutate(data, {
                onSuccess: (res) => {
                    if (res?.id) {
                        console.log('saveJob', res)
                        jobInfo.isSaved = true;
                        jobInfo.savedJobId = res?.id;
                        setType('success');
                        setMessage("Job saved successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log('err', err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        } else {
            deleteJob.mutate(jobInfo.savedJobId, {
                onSuccess: (res) => {
                    if (res) {
                        console.log('saveJob', res)
                        updateData(jobInfo?.id ?? '')
                        jobInfo.isSaved = false;
                        jobInfo.savedJobId = '';
                        setType('success');
                        setMessage("Job removed successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log('err', err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        }
    }

    const CompanyInfo = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        return (
            <Box
                sx={{
                    backgroundColor: '#DFEBF0',
                    borderRadius: '8px 8px 25px 25px',
                    py: 4,
                    px: 2
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box>
                            {jobInfo?.company?.logo ?
                                <img
                                    height={80}
                                    width={80}
                                    src={
                                        jobInfo?.company?.logo
                                    }
                                    alt={'company logo'}
                                />
                                : null
                            }
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    color: '#23282B'
                                }}
                            >
                                {jobInfo.title}
                            </Typography>
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            color: '#808080',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {jobInfo?.company?.name}
                                    </Typography>
                                    <VerifiedIcon />
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        color: '#808080'
                                    }}
                                >
                                    {jobInfo.location}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box
                            sx={{
                                mt: 0.75,
                                borderRadius: '100px',
                                color: 'white',
                                height: 32,
                                width: 32,
                                backgroundColor: 'red',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {3}
                        </Box>
                        {jobInfo.isSaved ? (
                            <Box
                                sx={{
                                    backgroundColor: '#FCFBF8',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}
                                onClick={toggleSaveJob}
                            >
                                <TurnedInIcon style={{ color: '#FFC24C' }} />
                            </Box>
                        ) : (
                            <IconButton
                                sx={{
                                    p: 0,
                                    m: 0,
                                    height: 'fit-content'
                                }}
                                onClick={toggleSaveJob}
                            >
                                <JobBookmarkIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>

                <ChipList chipsData={keywords} displayAll={false} />
            </Box>
        );
    };

    const JobPostingRequirements = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        return (
            <Box sx={{ backgroundColor: '#FCFBF8', padding: '20px' }}>
                <Typography
                    sx={{
                        fontFamily: 'Open Sans',
                        fontWeight: 600,
                        fontSize: '14px',
                        letterSpacing: '0.001em',
                        color: '#23282B',
                        textTransform: 'uppercase'
                    }}
                >
                    Requirements
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <ChipList
                        chipsData={requirements.keywords}
                        displayAll={false}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        mt: 2
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            fontSize: '14px',
                            letterSpacing: '0.001em',
                            color: '#808080'
                        }}
                    >
                        Minimum JobFactor Score:
                    </Typography>
                    <Typography
                        variant={'titleSmallSemiBold'}
                        color={'#808080'}
                    >
                        {jobInfo.score}
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeight: 600,
                            fontSize: '14px',
                            letterSpacing: '0.001em',
                            color: '#23282B',
                            textTransform: 'uppercase'
                        }}
                    >
                        More
                    </Typography>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            gap: 1,
                            fontFamily: 'Open Sans',
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#808080'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 0.5,
                                py: 1,
                                alignItems: 'center',
                                backgroundColor: '#FFF7E8',
                                borderRadius: '4px',
                                px: 1.5
                            }}
                        >
                            <JobTypeIcon />
                            {getJobType(jobInfo?.jobType ?? '')}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 0.5,
                                py: 1,
                                alignItems: 'center',
                                backgroundColor: '#FFF7E8',
                                borderRadius: '4px',
                                px: 1.5
                            }}
                        >
                            <JobSalaryIcon />
                            {getSalaryRange(jobInfo.salaryCurrency, jobInfo.salaryRangeFrom, jobInfo.salaryRangeTo)}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
                        <Box sx={{ mt: -0.3 }}>
                            <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="3.5"
                                    stroke="#494949"
                                />
                            </svg>
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#808080'
                            }}
                        >
                            {jobInfo.description}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            mt: 2,
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            fontSize: '12px',
                            letterSpacing: '0.001em',
                            color: '#23282B'
                        }}
                    >
                        {jobInfo.createdAt ? `Posted ${moment(jobInfo.createdAt).fromNow()}` : null}
                    </Typography>
                    <JobPostingCTA jobInfo={jobInfo} />
                </Box>
            </Box>
        );
    };

    const JobPostingCTA = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        const navigate = useNavigate();
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginTop: '20px'
                }}
            >
                {jobInfo?.isApplied ? (
                    <Button
                        variant="contained"
                        sx={{
                            padding: '10px 15px',
                            width: 'fit-content'
                        }}
                        disabled={true}
                    >
                        Applied
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        sx={{
                            padding: '10px 15px',
                            width: 'fit-content'
                        }}
                        onClick={() => setApplyjob(true)}
                    >
                        Apply
                    </Button>
                )}
                <Button
                    variant="outlined"
                    onClick={() => navigate(`/my-jobs/${jobInfo.id}`)}
                    sx={{
                        padding: '10px 15px',
                        width: 'fit-content',
                        mt: 1
                    }}
                >
                    View Details
                </Button>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                maxWidth: 520,
                width: '100%',
                backgroundColor: '#FCFBF8',
                borderRadius: '8px',
                mb: 4
            }}
        >
            <CompanyInfo jobInfo={jobInfo} />
            <JobPostingRequirements jobInfo={jobInfo} />
            <ApplyJob
                showModal={applyjob}
                queryKey="retrieve-jobs"
                jobId={jobInfo.id ?? ''}
                hideModal={(e) => {
                    onHideJob(e);
                }}
                companyName={jobInfo?.company?.name}
            />
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </Box>
    );
};

export default JobItem;
