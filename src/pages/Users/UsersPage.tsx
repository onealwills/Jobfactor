import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import { Box, Typography, IconButton, Grid, Chip } from '@mui/material';
import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import Progress from '../Home/components/Progress';

function UsersPage() {
    return (
        <>
            <Box sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                overflow: 'hidden',
            }}>
                <Box sx={{
                    position: 'relative',
                    paddingBottom: '91px',
                }}>
                    <Box sx={{
                        overflow: 'hidden',
                        borderRadius: '0 0 5px 5px'
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
                    <Grid
                        container
                        gap={3}
                        position={"absolute"}
                        bottom={"0"}
                    >
                        <Box sx={{
                            border: '3px #fff solid',
                            borderRadius: '50%',
                            boxShadow: "-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)",
                            marginLeft: '40px',
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
                        <Grid
                            container
                            wrap="nowrap"
                            width="auto"
                            marginTop="auto"
                            height="91px"
                            flexGrow="1"
                            alignItems="center"
                        >
                            <Grid
                                item
                                flexGrow="1"
                            >
                                <Typography
                                    component="span"
                                    color="#23282B"
                                    fontFamily="open sans"
                                    fontSize={20}
                                    fontWeight={700}
                                >
                                    400+
                                </Typography>
                                &nbsp;
                                <Typography
                                    component={'span'}
                                    color="#808080"
                                    fontFamily="open sans"
                                    fontSize={16}
                                    fontWeight={400}
                                >
                                    Connections
                                </Typography>
                            </Grid>
                            
                            <Grid
                                item
                                flexShrink="1"
                                paddingRight="40px"
                            >
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    container
                    alignItems="center"
                    padding="0 40px"
                >
                    <Grid
                        item
                        flexGrow={1}
                    >
                        <Grid container direction="column" gap={2}>
                            <Grid item>
                                <Grid
                                    container
                                    gap={2}
                                    alignItems={"center"}
                                >
                                    <Typography
                                        component={'h2'}
                                        color="#23282B"
                                        fontFamily="open sans"
                                        fontSize={28}
                                        fontWeight={600}
                                    >
                                        Ronald Richard
                                    </Typography>
                                    <Typography
                                        component={'h2'}
                                        color="#23282B"
                                        fontFamily="open sans"
                                        fontSize={24}
                                        fontWeight={600}
                                    >
                                        &bull;
                                    </Typography>
                                    <Typography
                                        component={'span'}
                                        color="#808080"
                                        fontFamily="open sans"
                                        fontSize={16}
                                        fontWeight={400}
                                    >
                                        Product Designer
                                    </Typography>
                                    <CheckCircleIcon htmlColor="#49B6FF" />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography
                                    component={'p'}
                                    color="#23282B"
                                    fontFamily="open sans"
                                    fontSize={16}
                                    fontWeight={400}
                                >
                                    Web3 Product Designer | I want to design extraordinary things
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container gap={2}>
                                    <Grid item>
                                        <Chip label="California, USA" icon={<PlaceIcon />} />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="+234 704 555 0114" icon={<LocalPhoneIcon />} />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Ronaldrichie@outlook.com" icon={<EmailIcon />} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item flexShrink={1}>
                        <Progress value={550} divider={1000} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default UsersPage;
