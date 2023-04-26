import { Box, Button, IconButton, InputBase } from '@mui/material';
import { ArticleIcon } from '../../../assets/icons/ArticleIcon';
import { PhotoIcon } from '../../../assets/icons/PhotoIcon';
import { VideoIcon } from '../../../assets/icons/VideoIcon';
import SideNavProfile from '../../../assets/images/SideNavProfile.png';

function CreateFeedCard() {
    return (
        <Box
            sx={{
                height: 'fit-content',
                p: '20px',
                backgroundColor: 'white'
            }}
        >
            <Box sx={{ display: 'flex', gap: '16px' }}>
                <img height={72} width={72} src={SideNavProfile} alt="icon" />
                <InputBase
                    rows={4}
                    defaultValue="What’s happening?"
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
    );
}

export default CreateFeedCard;
