import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Box, Typography, IconButton, Grid, Container, Divider } from '@mui/material';
import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import Progress from '../Home/components/Progress';
import InfoChip from './components/InfoChip';

function UsersPage() {
    return (
        <Container style={{
            paddingLeft: "35px",
            paddingRight: "0px",
            marginTop: "-48px",
            maxWidth: "100%",
        }}>
            <Grid
                container
                direction="column"
                gap={4.5}
            >
                <Grid item>
                    <Box
                        bgcolor="#fff"
                        borderRadius={1}
                        overflow="hidden"
                        pb={5}
                    >
                        <Box
                            position="relative"
                            pb="109px"
                        >
                            <Box
                                overflow="hidden"
                                borderRadius={[0, 0, 1, 1]}
                            >
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
                                bottom={0}
                            >
                                <Box
                                    ml={5}
                                    border="3px #fff solid"
                                    borderRadius="50%"
                                    overflow="hidden"
                                    width="fit-content"
                                    boxShadow="-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)">
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
                                    pb={2.25}
                                    marginLeft={-1.5}
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
                                        paddingRight="32px"
                                    >
                                        <IconButton>
                                            <MoreVertIcon fontSize="medium" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid
                            container
                            padding="0 40px"
                            marginTop="-30px"
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
                                            <Grid container gap={1.75}>
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
                                                        <CheckCircleIcon htmlColor="#49B6FF" style={{marginLeft: "-8px"}}/>
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
                                        <Grid container gap={1}>
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
                                <Box py={1}>
                                    <Progress value={550} divider={1000} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>          
                </Grid>
                <Grid item>
                    <Grid
                        container
                        wrap="nowrap"
                        spacing={2}
                    >
                        <Grid item xs={8}>
                            <Box style={{
                                backgroundColor: "#fff",
                                borderRadius: "12px",
                            }} py={3}>
                                <Box px={5}>
                                    <Typography
                                        component="h3"
                                        color="#23282B"
                                        fontFamily="open sans"
                                        fontSize={20}
                                        fontWeight={600}
                                        mb={1}
                                    >
                                        About me
                                    </Typography>
                                    <Typography
                                        component="h3"
                                        color="#808080"
                                        fontFamily="open sans"
                                        fontSize={16}
                                        fontWeight={400}
                                        mb={1.5}
                                    >
                                        Tell the world about yourself.
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            { /* Column 2 */ }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default UsersPage;
