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
            <Button
                disableRipple
                sx={{
                    backgroundColor: '#FCFBF8',
                    border: '1px solid #05668D',
                    borderRadius: '8px',
                    width: '100%',
                    mt: '24px',
                }}
            >
                <Typography
                    color={'#05668D'}
                    fontFamily="open sans"
                    fontWeight={600}
                    fontSize={14}
                    sx={{ textTransform: 'none', py: 1 }}
                >
                    Post an achievement
                </Typography>
            </Button>
        </Box>
    );
}

export default AchievementsCard;
