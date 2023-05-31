import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
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

const keywords = [
    { name: 'Office Environment', type: 'L', showbackground: true },
    { name: 'Job Security', type: 'A', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true },
    { name: 'Job Security', type: 'E', showbackground: true }
]
const requirements = {
    minJobFactorScore: 550,
    keywords: [
        { name: 'Visual Design', type: 'B', showbackground: false },
        { name: 'Motion Design', type: 'A', showbackground: false },
        { name: 'Prototyping', type: 'X', showbackground: false }
    ]
}
const JobItem = (props: { jobInfo: IJobItem }) => {
    const { jobInfo } = props;

    const [applyjob, setApplyjob] = useState<boolean>(false);
    const [alreadyapply, setAlreadyApply] = useState<boolean>(false);

    const onHideJob = (e: any) => {
        setApplyjob(false);
        if (e === 'submit') {
            setAlreadyApply(true);
        }
    };

    const handleApplyNow = () => {
        // let data = {
        //     jobPostingId: jobInfo?.id,
        //     professionalProfileId: ''
        // }
        // useApplyJob().mutate(data, {
        //     onSuccess: async (data) => {
        //     },
        //     onError: (error) => {
        //         console.error(error);
        //         alert(error);
        //     }
        // });
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
                            <img
                                height={80}
                                width={80}
                                src={jobInfo?.company?.logo ?? jobInfo?.companyLogo}
                                alt={'company logo'}
                            />
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
                                {jobInfo.title ?? jobInfo.jobTitle}
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
                                        {jobInfo?.company?.name ?? jobInfo.companyName}
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
                                    {jobInfo.location ?? 'Lagos'}
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
                            {jobInfo.jobFitMetric ?? 3}
                        </Box>
                        {jobInfo?.savedjob ? (
                            <Box
                                sx={{
                                    backgroundColor: '#FCFBF8',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <TurnedInIcon style={{ color: '#FFC24C' }} />
                            </Box>
                        ) : (
                            <JobBookmarkIcon />
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
                        {requirements.minJobFactorScore}
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
                            {jobInfo.jobType ?? 'Full-time'}
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
                            {jobInfo.salary ?? 'N250,000 a month'}
                        </Box>
                    </Box>
                    <Box
                        sx={{ display: 'flex', gap: 2, mt: 1.5 }}
                    >
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
                        Posted {moment(jobInfo.createdAt).fromNow()}
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
                {jobInfo.status === "OPEN" ?
                    <Button
                        variant="contained"
                        sx={{
                            padding: '10px 15px',
                            width: 'fit-content'
                        }}
                        onClick={() => {
                            setApplyjob(true);
                        }}
                    >
                        Apply
                    </Button>
                    :
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
                }
                <Button
                    variant="outlined"
                    onClick={() =>
                        navigate(`/my-jobs/${jobInfo.id}`)
                    }
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
                hideModal={(e) => {
                    onHideJob(e);
                }}
            />
        </Box>
    );
};

export default JobItem;
