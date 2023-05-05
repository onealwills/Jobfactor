import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';

const Header = () => {

    
    return (
        <Box
            sx={{
                display: 'flex',
                alignContent: 'center',
                gap: 4,
                backgroundColor: '#fff',
                padding:'24px'
            }}
        >
            <ArrowLeftIcon />
            <Box>
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    Job Preference
                </Typography>
                <Typography sx={{ color: '#808080', marginTop: '20px' }}>
                    Update as needed to get better recommendation on Jobfactor. Employers may see these when your resume is set to public
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
