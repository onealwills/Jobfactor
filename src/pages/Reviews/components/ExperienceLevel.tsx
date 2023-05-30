import { Typography, Box } from '@mui/material';
import { IExperienceLevelTypes } from '../types';

const ExperienceLevel = (props: IExperienceLevelTypes) => {
    return (
        <Box>
            <Typography
                variant="titleSmallSemiBold"
                sx={{
                    color: '#FFFFFF',
                    background: props.background,
                    borderRadius: '6px',
                    padding: '6px 16px',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                }}
            >
                {props.title}
                <Typography
                    variant="titleSmallBold"
                    sx={{
                        background: 'rgba(5, 5, 5, 0.4)',
                        padding: '0px 4px',
                        borderRadius: '4px'
                    }}
                >
                    {props.shortForm}
                </Typography>
            </Typography>
        </Box>
    );
};

export default ExperienceLevel;
