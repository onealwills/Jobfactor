import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Box, Typography, IconButton, Grid, Chip } from '@mui/material';
import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import Progress from '../Home/components/Progress';
import InfoChip from './components/InfoChip';

function UsersPage() {
    return (
        <>
            <Box sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                overflow: 'hidden',
                paddingBottom: "40px",
            }}>
                <Box sx={{
                    position: 'relative',
                    paddingBottom: '109px',
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
                            height="109px"
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
                    padding="0 40px"
                    marginTop="-10px"
                >
                    <Grid
                        item
                        flexGrow={1}
                        marginTop="auto"
                    >
                        <Grid container direction="column" gap={2}>
                            <Grid item>
                                <Grid
                                    container
                                    gap={2}
                                    alignItems="center"
                                >
                                    <Grid container gap={2}>
                                        <Grid item>
                                            <Typography
                                                component="h2"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                lineHeight="1.125"
                                                fontSize={28}
                                                fontWeight={600}
                                            >
                                                Ronald Richard
                                            </Typography>
                                        </Grid>

                                        <Grid item marginTop="auto">
                                            <Grid
                                                container
                                                gap={2}
                                                alignItems="center"
                                            >
                                                <CircleIcon sx={{ fontSize: "7.25px" }} />
                                                <Typography
                                                    component="span"
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
                                    </Grid>
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
                                        <InfoChip type="location" label="California, USA" />
                                    </Grid>
                                    <Grid item>
                                        <CircleIcon sx={{ fontSize: "7.25px" }} />
                                    </Grid>
                                    <Grid item>
                                        <InfoChip type="phone" label="+234 704 555 0114" />
                                    </Grid>
                                    <Grid item>
                                        <CircleIcon sx={{ fontSize: "7.25px" }} />
                                    </Grid>
                                    <Grid item>
                                        <InfoChip type="email" label="Ronaldrichie@hotmail.com" />
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
