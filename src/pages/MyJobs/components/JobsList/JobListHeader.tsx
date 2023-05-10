import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const JobListHeader = (props: { title: string; description: string }) => {
    const { title, description } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #D9D9D9',
                pb: '20px',
                pt: 1.5
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="headlineSmallSemiBold" color="#23282B">
                    {title}
                </Typography>

                <Typography variant="titleMediumRegular" color="#808080">
                    {description}
                </Typography>
            </Box>
            <Button
                sx={{
                    backgroundColor: '#F2F2F2',
                    color: '#05668D',
                    borderRadius: '5px',
                    textTransform: 'none',
                    maxHeight: '36px',
                    padding: '5px 15px',
                    mt: 1.5
                }}
            >
                View all
            </Button>
        </Box>
    );
};

export default JobListHeader;
