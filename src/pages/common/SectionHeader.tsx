import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

interface SectionHeaderProps {
    header: React.ReactNode;
    subHeader?: React.ReactNode;
}
const SectionHeader = ({ header, subHeader }: SectionHeaderProps) => {
    return (
        <Box sx={{ py: '1.5rem' }}>
            <Typography sx={{ mb: '1rem', fontWeight: '600' }} variant="h5">
                {header}
            </Typography>
            <Typography sx={{ color: '#808080' }} variant="subtitle2">
                {subHeader}
            </Typography>
            <Divider sx={{ width: '95%', pt: '1rem' }} />
        </Box>
    );
};

export default SectionHeader;
