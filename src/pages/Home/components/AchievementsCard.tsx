import { Box, Button, Typography } from '@mui/material';

function AchievementsCard() {
    return (
        <Box sx={{ backgroundColor: 'white', p: 2 }}>
            <Typography
                color={'#494949'}
                fontFamily="open sans"
                fontWeight={700}
                fontSize={16}
            >
                Have any recent achievements?
            </Typography>

            <Typography
                sx={{ mt: '16px', pb: 1 }}
                color={'#808080'}
                fontFamily="open sans"
                fontWeight={400}
                fontSize={14}
            >
                Tell the world about your recent achievements and get reviews
                from people who witnessed your achievements{' '}
            </Typography>
            <Button sx={{ mt: 2.5, py: 1.5 }} variant="outlined">
                Post an achievement
            </Button>
        </Box>
    );
}

export default AchievementsCard;
