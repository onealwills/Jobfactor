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
                    Ok, give review
                </Typography>
            </Button>
        </Box>
    );
}

export default FeedbackCard;
