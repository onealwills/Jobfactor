import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { PostJobItem } from '../../types/PostJobItem';
import LightBriefcase from '../../../../assets/icons/LightBriefcase';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const JobPostItem = (props: { jobInfo: PostJobItem }) => {
    const { jobInfo } = props;
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#fff',
                mb: 4
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <LightBriefcase />
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#23282B'
                    }}
                >
                    {jobInfo.title}
                </Typography>
            </Box>
            <Typography
                sx={{ color: '#808080', fontSize: '14px', marginTop: '8px' }}
            >
                Job ID : {jobInfo?.id}
            </Typography>
            <Typography
                sx={{ color: '#808080', fontSize: '14px', marginTop: '8px' }}
            >
                {moment(jobInfo?.createdAt).format('MM/DD/YYYY')}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: jobInfo?.description }} />
            {/* <Box sx={{ marginTop: '20px' }}>
                <Typography
                    sx={{
                        color: '#23282B',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                >
                    About the role
                </Typography>
                <Typography
                    sx={{
                        color: '#808080',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}
                >
                    {jobInfo?.JobRole}
                </Typography>
            </Box>
            <Box sx={{ marginTop: '20px' }}>
                <Typography
                    sx={{
                        color: '#23282B',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                >
                    Summary of the role
                </Typography>
                <ul style={{ color: '#808080', fontSize: '16px' }}>
                    {jobInfo?.JobSummary?.map((item) => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </Box> */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginTop: '20px'
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width: 'fit-content',
                        padding: '15px 20px',
                        minWidth: '240px'
                    }}
                    onClick={() => navigate(`/job-postdetail/${jobInfo?.id}`)}
                >
                    View Job Posting
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        padding: '15px 20px',
                        width: 'fit-content',
                        minWidth: '240px'
                    }}
                    onClick={() => {}}
                >
                    Check Applications
                </Button>
            </Box>
        </Box>
    );
};

export default JobPostItem;
