import { Box, Typography } from '@mui/material';
import React from 'react';

interface SectionHeaderProps {
  header: React.ReactNode;
  subHeader?: React.ReactNode;
}
const SectionHeader = ({ header, subHeader }: SectionHeaderProps) => {
  return (
    <Box>
      <Typography variant="h4">{header}</Typography>
      <Typography variant="h6">{subHeader}</Typography>
    </Box>
  );
};

export default SectionHeader;
