import { Box } from '@mui/material';
import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import NavBase from '../../components/Navigation/NavBase';

function UsersPage() {
    return (
        <>
            <Box sx={{
                position: 'relative',
                paddingBottom: '100px',
            }}>
                <Box sx={{
                    overflow: 'hidden',
                    backgroundClip: 'content-box',
                }}>
                    <img 
                        style={{
                            height: '259px',
                            width: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                        alt="Cover"
                        src={cover}
                    />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    gap: '16px',
                }}>
                    <Box sx={{
                        border: '3px #fff solid',
                        borderRadius: '50%',
                        boxShadow: "-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)",
                        marginLeft: '24px',
                        overflow: 'hidden',
                        width: 'fit-content',
                    }}>
                        <img 
                            style={{
                                display: 'block',
                                height: '200px',
                                width: '200px',
                            }}
                            alt="Profile pic"
                            src={profile}
                        />
                    </Box>
                    <Box sx={{
                        marginTop: 'auto',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        400+ connections
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default UsersPage;
