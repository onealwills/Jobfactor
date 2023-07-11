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
                p: '24px 40px',
                mb: '4px'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <LightBriefcase />
                <Typography
                    variant='titleLargeBold'
                    sx={{
                        color: '#23282B',
                        textTransform: 'capitalize'
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
                sx={{ color: '#808080', fontSize: '14px', marginTop: '8px', textTransform: 'capitalize' }}
            >
                {moment(jobInfo?.createdAt).format('MMM DD, YYYY')}
            </Typography>
            <Box sx={{ marginTop: '20px' }}>
                <Typography
                    sx={{
                        color: '#23282B',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                >
                    Job overview
                </Typography>
                <Typography
                    sx={{
                        color: '#808080',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}
                >
                    {jobInfo?.overview}
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
                    Qualification
                </Typography>
                <ul style={{ color: '#808080', fontSize: '16px' }}>
                    {jobInfo?.qualifications?.split('\n')?.map((item) => item ? <li key={`item_${item}`} >{item}</li> : null)}
                </ul>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginTop: '20px'
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        padding: '15px 20px',
                        width: 'fit-content',
                        minWidth: '240px'
                    }}
                    onClick={() => navigate(`/job-postdetail/${jobInfo?.id}/applicants`)}
                >
                    View applicants
                </Button>
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
            </Box>
        </Box>
    );
};

export default JobPostItem;
