import { Box, Button, IconButton, InputBase } from '@mui/material';
import { ArticleIcon } from '../../../assets/icons/ArticleIcon';
import { PhotoIcon } from '../../../assets/icons/PhotoIcon';
import { VideoIcon } from '../../../assets/icons/VideoIcon';
import SideNavProfile from '../../../assets/images/profile-sq.png';
import { useState } from 'react';
import PostCards from './PostCards';

function CreateFeedCard() {
    const [showmodal, setShowModal] = useState<boolean>(false);
    let data = {
        userimage: SideNavProfile,
        username: 'Jacob Jones'
    };

    return (
        <>
            <Box
                sx={{
                    height: 'fit-content',
                    p: '20px',
                    backgroundColor: 'white'
                }}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    <img
                        height={72}
                        width={72}
                        src={SideNavProfile}
                        alt="icon"
                        style={{ borderRadius: 100 }}
                    />
                    <InputBase
                        rows={4}
                        defaultValue="What’s happening?"
                        readOnly={true}
                        sx={{
                            backgroundColor: '#FCFBF8',
                            width: '100%',
                            overflowY: 'auto',
                            padding: 0,
                            paddingTop: '24px',
                            paddingLeft: '32px',
                            fontFamily: 'open sans',
                            color: '#23282B'
                        }}
                        multiline
                    />
                </Box>
                <Box
                    sx={{
                        ml: '94px',
                        mr: 0.5,
                        mt: '28px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', gap: '32px' }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '10px'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                            >
                                <PhotoIcon />
                            </IconButton>
                            Photo
                        </Box>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '10px'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                            >
                                <VideoIcon />
                            </IconButton>
                            Video
                        </Box>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '10px'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                            >
                                <ArticleIcon />
                            </IconButton>
                            Article
                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ maxWidth: 100, py: 1 }}>
                        Post
                    </Button>
                </Box>
            </Box>
            {showmodal && (
                <PostCards
                    showModal={showmodal}
                    data={data}
                    hideModal={() => {
                        setShowModal(false);
                    }}
                />
            )}
        </>
    );
}

export default CreateFeedCard;
