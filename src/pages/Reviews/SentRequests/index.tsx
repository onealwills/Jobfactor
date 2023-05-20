import React from 'react';
import { Box, Paper } from '@mui/material';
import SectionHeader from '../../common/SectionHeader';

const SentRequests = () => {
    return (
        <>
            <SectionHeader
                header={'People you requested reviews from'}
                subHeader={
                    'See all those you requested to have them review your profile'
                }
            />
        </>
    );
};

export default SentRequests;
