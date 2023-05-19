import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '../../../assets/icons/VerifiedIcon';
import DotIcon from '../../../assets/icons/DotIcon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '../../../assets/icons/MoreIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '../../../assets/icons/UploadIcon';
import JobBookmarkIcon from '../../../assets/icons/JobBookmarkIcon';
import Slider1 from '../../../assets/images/slider1.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { IFeedItem } from '../types/IFeedItem';

type PropTypes = {
    open: boolean;
    handleClose: () => void;
    data: IFeedItem;
};

const CommentsPopup = ({ open, handleClose, data }: PropTypes) => {
    const feed = {
        ...data,
        commentsData: [
            {
                id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                sourceUserId: '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                targetUserId: '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                message: 'Hello, how are you?',
                fullName: 'John Deo',
                replies: [
                    {
                        id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                        sourceUserId: '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                        targetUserId: '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                        message: 'Hello, how are you?',
                        fullName: 'John Deo',
                        isAccountVerified: true,
                        replies: []
                    },
                    {
                        id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                        fullName: 'John Deo',
                        sourceUserId: '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                        targetUserId: '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                        message: 'Hello, how are you?',
                        replies: [
                            {
                                id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                                fullName: 'John Deo',
                                sourceUserId:
                                    '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                                targetUserId:
                                    '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                                message: 'Hello, how are you?',
                                replies: []
                            },
                            {
                                id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                                sourceUserId:
                                    '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                                fullName: 'John Deo',
                                targetUserId:
                                    '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                                message: 'Hello, how are you?',
                                replies: [
                                    {
                                        id: 'ec2561c4-f13d-48fb-be8a-aafdc694c49e',
                                        sourceUserId:
                                            '8fbcf5ef-7ab2-4bb0-941e-bc8d91429e4e',
                                        targetUserId:
                                            '1ccc4f29-9349-4d11-8f66-d2e15ba721b8',
                                        message: 'Hello, how are you?',
                                        fullName: 'John Deo',
                                        isAccountVerified: true,
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="lg"
            sx={{
                '& .MuiPaper-root': {
                    height: '800px'
                }
            }}
            scroll="paper"
        >
            <Grid container sx={{ width: '1200px', height: '100%' }}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#23282B'
                    }}
                >
                    <Carousel
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        renderArrowNext={(clickHandler: () => void) => (
                            <IconButton
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    width: '44px',
                                    height: '44px',
                                    filter: 'drop-shadow(4px 4px 15px rgba(0, 0, 0, 0.15))',
                                    backdropFilter: 'blur(1px)',
                                    position: 'absolute',
                                    top: 0,
                                    zIndex: '99',
                                    bottom: 0,
                                    margin: 'auto',
                                    right: '35px'
                                }}
                                onClick={clickHandler}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        )}
                        renderArrowPrev={(clickHandler: () => void) => (
                            <IconButton
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    width: '44px',
                                    height: '44px',
                                    filter: 'drop-shadow(4px 4px 15px rgba(0, 0, 0, 0.15))',
                                    backdropFilter: 'blur(1px)',
                                    position: 'absolute',
                                    top: 0,
                                    zIndex: '99',
                                    bottom: 0,
                                    margin: 'auto',
                                    left: '35px'
                                }}
                                onClick={clickHandler}
                            >
                                <ArrowBack />
                            </IconButton>
                        )}
                    >
                        <div>
                            <img
                                src={Slider1}
                                style={{
                                    maxHeight: '481px',
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '721px'
                                }}
                                alt="slider_1"
                            />
                        </div>
                        <div>
                            <img
                                src={Slider1}
                                style={{
                                    maxHeight: '481px',
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '721px'
                                }}
                                alt="slider_2"
                            />
                        </div>
                        <div>
                            <img
                                src={Slider1}
                                style={{
                                    maxHeight: '481px',
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '721px'
                                }}
                                alt="slider_3"
                            />
                        </div>
                    </Carousel>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        maxHeight: '100%',
                        overflow: 'hidden',
                        flexDirection: 'column'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            pt: '12px',
                            pl: '20px',
                            pr: '30px',
                            pb: '18px',
                            gap: '16px'
                        }}
                    >
                        <Avatar
                            src={feed?.profileImage}
                            sx={{ width: '56px', height: '56px' }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            letterSpacing: '0.0015em',
                                            color: '#23282B',
                                            mr: '5px'
                                        }}
                                    >
                                        {feed?.fullName}
                                    </Typography>

                                    <VerifiedIcon />
                                    <Box
                                        sx={{
                                            ml: '13px',
                                            mr: '13px',
                                            mt: '-5px'
                                        }}
                                    >
                                        <DotIcon />
                                    </Box>
                                    <Button
                                        sx={{
                                            padding: '10px 16px',
                                            background: '#F2F2F2',
                                            borderRadius: '8px',
                                            textTransform: 'capitalize',
                                            fontFamily: 'Open Sans',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            letterSpacing: '0.0035em',
                                            color: '#05668D'
                                        }}
                                    >
                                        Follow
                                    </Button>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontSize: '14px',
                                        letterSpacing: '0.0035em',
                                        color: '#808080',
                                        mr: '5px'
                                    }}
                                >
                                    {feed?.jobTitle}
                                </Typography>
                            </Box>
                            <MoreIcon />
                        </Box>
                    </Box>
                    <DialogContent dividers>
                        {feed.commentsData.map((item) => (
                            <CommentBox item={item} />
                        ))}
                    </DialogContent>
                    <DialogActions
                        sx={{
                            display: 'block',
                            pl: 0,
                            pr: 0
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                pl: '20px',
                                pr: '20px'
                            }}
                        >
                            <Box>
                                <IconButton sx={{ p: 0, m: 0 }}>
                                    <UploadIcon color="#494949" />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        ml: '22px !important',
                                        mr: '11px'
                                    }}
                                >
                                    <FavoriteBorderIcon
                                        sx={{ color: '#494949' }}
                                    />
                                </IconButton>
                                <IconButton sx={{ p: 0, m: 0 }}>
                                    <JobBookmarkIcon color="#494949" />
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mt: '18px',
                                    mb: '26px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Avatar
                                        sx={{ width: '24px', height: '24px' }}
                                    >
                                        T
                                    </Avatar>
                                    <Avatar
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            mr: '-3px'
                                        }}
                                    >
                                        T
                                    </Avatar>
                                    <Avatar
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            mr: '-3px'
                                        }}
                                    >
                                        T
                                    </Avatar>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            letterSpacing: '0.0015em',
                                            color: '#23282B',
                                            ml: '12px'
                                        }}
                                    >
                                        Liked by
                                        <Typography
                                            sx={{
                                                fontWeight: '600'
                                            }}
                                            component="span"
                                        >
                                            {' '}
                                            Jrichard_
                                        </Typography>
                                        and{' '}
                                        <Typography
                                            sx={{
                                                fontWeight: '600'
                                            }}
                                            component="span"
                                        >
                                            {' '}
                                            others
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        letterSpacing: '0.0015em',
                                        color: '#808080',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    2 DAYS AGO
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                background: '#FCFBF8',
                                borderTop: '0.5px solid #D9D9D9',
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                width: '100%',
                                ml: '0 !important'
                            }}
                        >
                            <TextField
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '0'
                                    }
                                }}
                                placeholder="Add a comment..."
                            />
                            <Button
                                sx={{
                                    padding: '12px 35px',
                                    background: '#EDEDED',
                                    borderRadius: '8px',
                                    textTransform: 'capitalize',
                                    fontFamily: 'Open Sans',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    letterSpacing: '0.001em',
                                    color: '#808080'
                                }}
                            >
                                Post
                            </Button>
                        </Box>
                    </DialogActions>
                </Grid>
            </Grid>
        </Dialog>
    );
};

type itemType = {
    item: comments;
};
type comments = {
    id: string;
    sourceUserId: string;
    targetUserId: string;
    message: string;
    profileImage?: string;
    fullName: string;
    isAccountVerified?: boolean;
    replies: Array<comments>;
};
const CommentBox = ({ item }: itemType) => {
    const [showReplies, setShowReplies] = React.useState(false);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                gap: '16px'
            }}
        >
            <Avatar
                src={item?.profileImage}
                sx={{ width: '56px', height: '56px' }}
            />
            <Box sx={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: '600',
                                fontSize: '16px',
                                letterSpacing: '0.0015em',
                                color: '#23282B',
                                mr: '5px'
                            }}
                        >
                            {item?.fullName}
                        </Typography>
                        {item?.isAccountVerified ? <VerifiedIcon /> : null}
                    </Box>
                    <FavoriteBorderIcon
                        sx={{ color: '#808080', fontSize: '20px', mr: '5px' }}
                    />
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Open Sans',
                        letterSpacing: '0.001em',
                        color: '#23282B',
                        fontSize: '14px'
                    }}
                >
                    {item?.message}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Open Sans',
                        letterSpacing: '0.0015em',
                        color: '#808080',
                        mt: '12px'
                    }}
                >
                    2d
                </Typography>
                {item?.replies?.length > 0 ? (
                    <Button
                        sx={{
                            padding: '4px 16px',
                            background: '#F2F2F2',
                            borderRadius: '8px',
                            textTransform: 'capitalize',
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            letterSpacing: '0.0035em',
                            color: '#05668D',
                            mt: '12px',
                            mb: '12px'
                        }}
                        onClick={() => setShowReplies(!showReplies)}
                    >
                        View replies ({item?.replies?.length})
                    </Button>
                ) : null}
                {showReplies
                    ? item?.replies?.map((x) => <CommentBox item={x} />)
                    : null}
            </Box>
        </Box>
    );
};
export default CommentsPopup;
