import React, { useEffect, useState } from 'react';
import { IFeedItem } from '../types/IFeedItem';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DotIcon from '../../../assets/icons/DotIcon';
import UploadIcon from '../../../assets/icons/UploadIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import CommentIcon from '../../../assets/icons/CommentIcon';
import LikesIcon from '../../../assets/icons/LikesIcon';
import ViewIcon from '../../../assets/icons/ViewIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import VerifiedIcon from '../../../assets/icons/VerifiedIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PostCards from './PostCards';
import CommentsPopup from './CommentsPopup';

export const FeedItem = (props: { feed: IFeedItem }) => {
    const { feed } = props;

    const DescriptionRef = React.useRef<HTMLDivElement>(null);

    const [show, setShow] = useState(false);
    const [liked, setLiked] = useState(false);
    const [repostPopup, setRepostPopup] = useState(false);
    const [commentsPopup, setCommentsPopup] = useState(false);
    const [likes, setLikes] = useState(0);

    const onShowHidden = () => {
        if (DescriptionRef.current != null) {
            DescriptionRef.current.style.height = '100%';
            setShow(true);
        }
    };

    const onHide = () => {
        if (DescriptionRef.current != null) {
            DescriptionRef.current.style.height = '70px';
            setShow(false);
        }
    }
    useEffect(() => {
        if (feed?.likes) {
            setLikes(feed?.likes);
        }
    }, [feed?.likes])


    return (
        <>
            <Box
                sx={{
                    p: 4,
                    mt: 1,
                    mb: '32px',
                    borderRadius: '12px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '24px'
                    }}
                >
                    <Box>
                        <img src={feed.profileImage} alt="feed" style={{ width: 80, height: 80, borderRadius: 100 }} />
                    </Box>
                    <Box sx={{}}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '24px',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    sx={{ mt: -0.5 }}
                                    color="#23282B"
                                    fontFamily="open sans"
                                    fontSize={20}
                                    fontWeight={600}
                                >
                                    {feed.fullName}
                                </Typography>
                                <DotIcon />
                                <Typography
                                    sx={{ mt: -0.5 }}
                                    color="#808080"
                                    fontFamily="open sans"
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
                                {/* {feed.description.split('\n').map((line, index) => ( */}
                                <Typography
                                    color={'#808080'}
                                    fontFamily="open sans"
                                    fontSize={14}
                                    fontWeight={400}
                                    ref={DescriptionRef}
                                    //key={index}
                                    variant="body1"
                                    component="div"
                                    sx={feed?.description?.length > 200 ? { whiteSpace: 'pre-line', mb: 1, height: '70px', overflow: 'hidden' } : { whiteSpace: 'pre-line', mb: 1 }}
                                >
                                    {feed.description}
                                </Typography>
                                {/* ))} */}
                            </Typography>
                            {feed?.description?.length > 200 &&
                                <>
                                    {!show ?
                                        <Box>
                                            <Button variant="contained" sx={{ maxWidth: 'fit-content', gap: "10px", py: '5px', background: '#FCFBF8', color: '#05668D', fontSize: '14px', fontWeight: '700' }} onClick={() => { onShowHidden() }}>
                                                See More
                                            </Button>
                                        </Box>
                                        :
                                        <Box>
                                            <Button variant="contained" sx={{ maxWidth: 'fit-content', gap: "10px", py: '5px', background: '#FCFBF8', color: '#05668D', fontSize: '14px', fontWeight: '700' }} onClick={() => { onHide() }}>
                                                See Less
                                            </Button>
                                        </Box>
                                    }
                                </>
                            }
                        </Box>

                        <Box sx={{ mt: '36px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            {feed.images.map((image: any, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="feed"
                                    style={{
                                        width: '48%',
                                        height: '300px',
                                        objectFit: 'contain',
                                        borderRadius: '12px',
                                        marginTop: '20px',
                                        marginRight:
                                            index !== feed.images.length - 1
                                                ? '12px'
                                                : undefined
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
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '24px',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '18px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ViewIcon />
                                    {feed.views}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '18px',
                                        alignItems: 'center'
                                    }}
                                >
                                    {liked ?
                                        <IconButton
                                            onClick={() => { setLikes((prev) => prev - 1); setLiked(false) }}
                                            sx={{ m: 0, p: 0 }}
                                        >
                                            <LikesIcon />
                                        </IconButton> :
                                        <IconButton
                                            onClick={() => { setLikes((prev) => prev + 1); setLiked(true) }}
                                            sx={{ maxHeight: '20px', maxWidth: '20px', m: 0, p: 0 }}
                                        >
                                            <FavoriteBorderIcon sx={{ color: 'rgb(239, 111, 108)' }} />
                                        </IconButton>
                                    }
                                    {likes}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '18px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <IconButton
                                        onClick={() => { setCommentsPopup(true) }}
                                        sx={{ m: 0, p: 0 }}
                                    >
                                        <CommentIcon />
                                    </IconButton>
                                    {feed.comments}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '18px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <IconButton
                                        onClick={() => { setRepostPopup(true) }}
                                        sx={{ m: 0, p: 0 }}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    {feed.shares}
                                </Box>
                            </Box>
                            <UploadIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <PostCards repostPopup={true} showModal={repostPopup} data={feed} hideModal={() => { setRepostPopup(false) }} />
            <CommentsPopup open={commentsPopup} data={feed} handleClose={() => setCommentsPopup(false)} />
        </>
    );
};
