import { IFeedItem } from '../types/IFeedItem';
import { Box, Typography } from '@mui/material';
import DotIcon from '../../../assets/icons/DotIcon';
import UploadIcon from '../../../assets/icons/UploadIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import CommentIcon from '../../../assets/icons/CommentIcon';
import LikesIcon from '../../../assets/icons/LikesIcon';
import ViewIcon from '../../../assets/icons/ViewIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import VerifiedIcon from '../../../assets/icons/VerifiedIcon';

export const FeedItem = (props: { feed: IFeedItem }) => {
    const { feed } = props;
    return (
        <Box
            sx={{
                p: 4,
                backgroundColor: 'white',
                mt: 1,
                mb: '32px',
                borderRadius: '12px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '24px',
                }}
            >
                <Box>
                    <img src={feed.profileImage} alt='feed' />
                </Box>
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '24px',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{ mt: -0.5 }}
                                color='#23282B'
                                fontFamily='open sans'
                                fontSize={20}
                                fontWeight={600}
                            >
                                {feed.fullName}
                            </Typography>
                            <DotIcon />
                            <Typography
                                sx={{ mt: -0.5 }}
                                color='#808080'
                                fontFamily='open sans'
                                fontSize={16}
                                fontWeight={400}
                            >
                                {feed.jobTitle}
                            </Typography>
                            <VerifiedIcon />
                        </Box>
                        <MoreIcon />
                    </Box>

                    <Box sx={{ mt: '18px' }}>
                        <Typography sx={{ whiteSpace: 'pre-line' }}>
                            {feed.description.split('\n').map((line, index) => (
                                <Typography
                                    color={'#808080'}
                                    fontFamily='open sans'
                                    fontSize={14}
                                    fontWeight={400}
                                    key={index}
                                    variant='body1'
                                    component='div'
                                    sx={{ whiteSpace: 'pre-line', mb: 1 }} // add margin bottom
                                >
                                    {line}
                                </Typography>
                            ))}
                        </Typography>
                    </Box>

                    <Box sx={{ mt: '36px' }}>
                        {feed.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt='feed'
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    marginRight:
                                        index !== feed.images.length - 1
                                            ? '12px'
                                            : undefined,
                                }}
                            />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            mt: '30px',
                            display: 'flex',
                            gap: '24px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '24px',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                }}
                            >
                                <ViewIcon />
                                {feed.views}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                }}
                            >
                                <LikesIcon />
                                {feed.likes}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                }}
                            >
                                <CommentIcon />
                                {feed.comments}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                }}
                            >
                                <ShareIcon />
                                {feed.shares}
                            </Box>
                        </Box>
                        <UploadIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
