import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


const TypographySystem = () => {
    return <Box>

        <Box sx={{ width: 'full', backgroundColor: '#247DA9', pt: 2, pb: 3.5 }}>
            <Typography variant={'displayLargeBold'} color={'white'} sx={{ pb: 1.5, pl: 10 }}>Typography
                System
            </Typography>
        </Box>
        <Box sx={{
            mt: '86px',
            ml: '85px',
            display: 'flex',
            gap: '56px',
            width: 'full',
            alignItems: 'center',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='displayLargeRegular'>Display Large</Typography>
                <Typography variant='displayMediumRegular'>Display Medium</Typography>
                <Typography variant='displaySmallRegular'>Display Small</Typography>

                <Typography variant='headlineLargeRegular'>Headline Large</Typography>
                <Typography variant='headlineMediumRegular'>Headline Medium</Typography>
                <Typography variant='headlineSmallRegular'>Headline Small</Typography>

                <Typography variant='titleLargeRegular'>Title Large</Typography>
                <Typography variant='titleMediumRegular'>Title Medium</Typography>
                <Typography variant='titleSmallRegular'>Title Small</Typography>

                <Typography variant='labelLargeRegular'>Label Large</Typography>
                <Typography variant='labelMediumRegular'>Label Medium</Typography>

                <Typography variant='bodyLargeRegular'>Body Large</Typography>
                <Typography variant='bodyMediumRegular'>Body Medium</Typography>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='displayLargeSemiBold'>Display Large M</Typography>
                <Typography variant='displayMediumSemiBold'>Display Medium M</Typography>
                <Typography variant='displaySmallSemiBold'>Display Small M</Typography>

                <Typography variant='headlineLargeSemiBold'>Headline Large M</Typography>
                <Typography variant='headlineMediumSemiBold'>Headline Medium M</Typography>
                <Typography variant='headlineSmallSemiBold'>Headline Small M</Typography>

                <Typography variant='titleLargeSemiBold'>Title Large M</Typography>
                <Typography variant='titleMediumSemiBold'>Title Medium M</Typography>
                <Typography variant='titleSmallSemiBold'>Title Small M</Typography>

                <Typography variant='labelLargeSemiBold'>Label Large M</Typography>
                <Typography variant='labelMediumSemiBold'>Label Medium M</Typography>

                <Typography variant='bodyLargeSemiBold'>Body Large M</Typography>
                <Typography variant='bodyMediumSemiBold'>Body Medium M</Typography>


            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='displayLargeBold'>Display Large B</Typography>
                <Typography variant='displayMediumBold'>Display Medium B</Typography>
                <Typography variant='displaySmallBold'>Display Small B</Typography>

                <Typography variant='headlineLargeBold'>Headline Large B</Typography>
                <Typography variant='headlineMediumBold'>Headline Medium B</Typography>
                <Typography variant='headlineSmallBold'>Headline Small B</Typography>

                <Typography variant='titleLargeBold'>Title Large B</Typography>
                <Typography variant='titleMediumBold'>Title Medium B</Typography>
                <Typography variant='titleSmallBold'>Title Small B</Typography>

                <Typography variant='labelLargeBold'>Label Large B</Typography>
                <Typography variant='labelMediumBold'>Label Medium B</Typography>

                <Typography variant='bodyLargeBold'>Body Large B</Typography>
                <Typography variant='bodyMediumBold'>Body Medium B</Typography>
            </Box>
        </Box>
    </Box>;
};
const JobFactorThemePage = () => {
    return (<Box>
        <TypographySystem />
    </Box>);
};

export default JobFactorThemePage;