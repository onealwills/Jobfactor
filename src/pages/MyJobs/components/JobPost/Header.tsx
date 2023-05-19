import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon';
import EllipseIcon3 from '../../../../assets/icons/EllipseIcon3';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '28px'
                }}
            >
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowLeftIcon />
                </IconButton>
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    Job Postings
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate('/new-jobpost');
                    }}
                    sx={{
                        padding: '15px 20px',
                        width: 'fit-content',
                        minWidth: '240px'
                    }}
                >
                    Post new job opening
                </Button>
                <EllipseIcon3 />
            </Box>
        </Box>
    );
};

export default Header;
