import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChipList from '../Chips/ChipList';
import { useNavigate } from 'react-router-dom';
import { IJobItem } from '../../types/IJobItem';
import JobSalaryIcon from '../../../../assets/icons/JobSalaryIcon';
import JobTypeIcon from '../../../../assets/icons/JobTypeIcon';
import JobBookmarkIcon from '../../../../assets/icons/JobBookmarkIcon';
import VerifiedIcon from '../../../../assets/icons/VerifiedIcon';
import ApplyJob from './ApplyJob';


const JobItem = (props: { jobInfo: IJobItem }) => {
    const { jobInfo } = props;

    const [applyjob, setApplyjob] = useState<boolean>(false);
    const [alreadyapply, setAlreadyApply] = useState<boolean>(false);

    const onHideJob = (e: any) => {
        setApplyjob(false)
        if (e === 'submit') {
            setAlreadyApply(true)
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
                        <Box sx={{ mt: 1 }}>
                            <img
                                height={80}
                                width={80}
                                src={jobInfo.companyLogo}
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
                                {jobInfo.jobTitle}
                            </Typography>
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mt: 1
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
                                        {jobInfo.companyName}
                                    </Typography>{' '}
                                    <VerifiedIcon />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 0.75 }}>
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
                            {jobInfo.jobFitMetric}
                        </Box>
                        <JobBookmarkIcon />
                    </Box>
                </Box>

                <ChipList chipsData={jobInfo.keywords} displayAll={false} />
            </Box>
        );
    };

    const JobPostingRequirements = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        return (
            <Box
                sx={{ backgroundColor: '#FCFBF8', mt: '24px', pb: 10, px: '20px' }}
            >
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
                        chipsData={jobInfo.requirements.keywords}
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
                    <Typography variant={'titleSmallSemiBold'} color={'#808080'}>
                        {jobInfo.requirements.minJobFactorScore}
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
                            {jobInfo.jobType}
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
                            {jobInfo.salary}
                        </Box>
                    </Box>
                    {jobInfo.requirements.responsibilities.map(
                        (responsibility, index) => (
                            <Box
                                key={index}
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
                                    {responsibility}
                                </Typography>
                            </Box>
                        )
                    )}
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
                        Posted {jobInfo.posted}
                    </Typography>
                </Box>
            </Box>
        );
    };


    const JobPostingCTA = (props: { jobInfo: IJobItem }) => {
        const { jobInfo } = props;
        const jobId = 1234;
        const navigate = useNavigate();
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
                {(!jobInfo?.alreadyapply && !alreadyapply) ?
                    <Button
                        variant="contained"
                        sx={{
                            py: '12px',
                            px: '150px',
                            width: '90%'
                        }}
                        onClick={() => { setApplyjob(true) }}
                    >
                        Apply
                    </Button>
                    :
                    <Button
                        variant="contained"
                        sx={{
                            py: '12px',
                            px: '150px',
                            width: '90%'
                        }}
                        disabled={true}
                    >
                        Applied
                    </Button>
                }
                <Button
                    variant="outlined"
                    onClick={() => navigate(`/my-jobs/${jobId}`)}
                    sx={{
                        py: '12px',
                        mt: 1,
                        width: '90%'
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
            <ApplyJob showmoadl={applyjob} Hidemodal={(e) => { onHideJob(e) }} />
            <JobPostingCTA jobInfo={jobInfo} />
        </Box>
    );
}

export default JobItem;
