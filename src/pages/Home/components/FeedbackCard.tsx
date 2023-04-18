import { Box, Button, Typography } from '@mui/material';
import homeReviewImage from '../../../assets/images/homeReviewImage.png';

function FeedbackCard() {
    return (
        <Box sx={{ backgroundColor: 'white', p: 2 }}>
            <Typography
                color={'#494949'}
                fontFamily="open sans"
                fontWeight={700}
                fontSize={16}
            >
                Given feedback yet?
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    mt: '16px',
                    gap: '24px',
                    alignItems: 'center',
                    pb: '4px',
                }}
            >
                <img
                    height={48}
                    src={homeReviewImage}
                    alt={'profile'}
                    loading="lazy"
                />
                <Typography
                    color={'#808080'}
                    fontFamily="open sans"
                    fontWeight={400}
                    fontSize={14}
                >
                    <span
                        style={{
                            fontWeight: 700,
                            color: '#494949',
                        }}
                    >
                        Solomon Odewor{' '}
                    </span>
                    is requesting feedback from you as a witness to his recent
                    achievement.
                </Typography>
            </Box>
            <Button sx={{mt: 2.9, py: 1.5}} variant='outlined'>
                Ok, give review
            </Button>
        </Box>
    );
}

export default FeedbackCard;
