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
import { useAuth } from '../../../../utils/context/AuthContext';
import { getJobType, getSalaryRange } from '../../../../utils/Helper/helper';
import { useSaveJob } from '../../../../utils/hooks/api/saved-jobs/useSaveJob';
import SnackAlert from '../../../../components/Snackbar';
import { useDeleteSavedJob } from '../../../../utils/hooks/api/saved-jobs/useDeleteSavedJob';
import ExperienceChip from '../ExperienceChip';
import { ISelectedSkillType } from '../../types/ISkillType';

const keywords = [
    { name: 'Office Environment', type: 'L', showbackground: true },
    { name: 'Job Security', type: 'A', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true }
];

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
                    borderTopRightRadius: '8px',
                    borderTopLeftRadius: '8px',
                    border: '1px solid #D8D8D8',
                    borderBottomWidth: 0,
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#FFECC8',
                        borderRadius: '8px 8px 25px 25px',
                        height: 'fit-content',
                        p: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', gap: '16px' }}>
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
                                    variant='titleMediumSemiBold'
                                    sx={{
                                        color: '#23282B'
                                    }}
                                >
                                    {jobInfo.title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Typography
                                        variant='titleSmallSemiBold'
                                        sx={{
                                            color: '#808080',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {jobInfo?.company?.name}
                                    </Typography>
                                    <VerifiedIcon />
                                </Box>
                                <Typography
                                    variant='titleSmallRegular'
                                    sx={{
                                        color: '#808080'
                                    }}
                                >
                                    {jobInfo.location}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}
                        >
                            <Box
                                sx={{
                                    mt: '5px',
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
                </Box >
            </Box>
        );
    };

    const JobPostingRequirements = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        return (
            <Box
                sx={{
                    backgroundColor: '#FCFBF8',
                    padding: '20px',
                    border: '1px solid #D8D8D8',
                    borderTopWidth: 0,
                    borderBottomRightRadius: '8px',
                    borderBottomLeftRadius: '8px',
                    pt: '16px'
                }}
            >
                <Typography
                    variant='titleMediumSemiBold'
                    sx={{
                        color: '#23282B',
                        textTransform: 'uppercase'
                    }}
                >
                    Requirements
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        mt: '17px'
                    }}
                >
                    <Typography
                        variant='titleSmallRegular'
                        sx={{
                            color: '#363636'
                        }}
                    >
                        Minimum JobFactor Score:
                    </Typography>
                    <Box
                        sx={{
                            p: '0px 8px',
                            borderRadius: '4px',
                            backgroundColor: '#49B6FF'

                        }}
                    >
                        <Typography
                            variant={'titleSmallSemiBold'}
                            color={'#FFF'}
                        >
                            {jobInfo.score ?? 0}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: '9px' }}>
                    <Box
                        sx={{
                            gap: '8px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {jobInfo?.skills?.slice(0, 3)?.map((item: ISelectedSkillType) => <ExperienceChip
                            item={item}
                            coloredBg={false}
                            titleStyle={{ fontSize: '12px' }}
                            shortFormStyle={{ fontSize: '14px', fontWeight: 700 }}
                        />
                        )}
                        {jobInfo?.skills?.slice(3, jobInfo?.skills?.length)?.length ?
                            <Typography
                                variant='labelLargeRegular'
                                color={'#23282B'}
                            >
                                +{jobInfo?.skills?.slice(3, jobInfo?.skills?.length)?.length}
                            </Typography>
                            : null
                        }
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: '8px',
                        display: 'flex',
                        gap: '4px',
                        fontFamily: 'Open Sans',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: '#808080'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '4px',
                            alignItems: 'center',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '4px',
                            p: '4px 12px'
                        }}
                    >
                        <JobTypeIcon />
                        {getJobType(jobInfo?.jobType ?? '')}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '4px',
                            alignItems: 'center',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '4px',
                            p: '4px 12px'
                        }}
                    >
                        <JobSalaryIcon />
                        {getSalaryRange(jobInfo.salaryCurrency, jobInfo.salaryRangeFrom, jobInfo.salaryRangeTo)}
                    </Box>
                </Box>
                <Box sx={{ mt: '16px' }}>
                    <Typography
                        sx={{
                            color: '#23282B',
                        }}
                        variant='titleMediumSemiBold'
                    >
                        More
                    </Typography>
                    <ul
                        style={{
                            color: '#5B5B5B',
                            fontSize: '14px',
                            marginTop: '12px',
                            marginBottom: 0,
                            maxHeight: '65px',
                            height: '65px',
                            overflow: 'hidden',
                        }}>
                        {jobInfo?.responsibilities?.split('\n')?.map((item: string) => item ? <li className='responsibilities' key={`item_${item}`}>{item}</li> : null)}
                    </ul>
                    <Typography
                        variant='labelMediumRegular'
                        sx={{
                            mt: '12px',
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
                    alignItems: 'center',
                    marginTop: '20px',
                    gap: '8px'
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => navigate(`/my-jobs/${jobInfo.id}`)}
                    sx={{
                        padding: '10px 15px',
                        flex: 1,
                        fontSize: '12px',
                        fontWeight: 600
                    }}
                >
                    View Details
                </Button>
                {jobInfo?.isApplied ? (
                    <Button
                        variant="contained"
                        sx={{
                            padding: '10px 15px',
                            width: 'fit-content',
                            flex: 2,
                            fontSize: '14px',
                            fontWeight: 600
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
                            width: 'fit-content',
                            flex: 2,
                            fontSize: '14px',
                            fontWeight: 600
                        }}
                        onClick={() => setApplyjob(true)}
                    >
                        Apply
                    </Button>
                )}
            </Box>
        );
    };

    return (
        <Box
            sx={{
                maxWidth: '480px',
                width: '100%',
                backgroundColor: '#FCFBF8',
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
