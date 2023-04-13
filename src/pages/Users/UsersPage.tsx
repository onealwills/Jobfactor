import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { 
    Box,
    Typography,
    IconButton,
    Grid,
    Container,
    Divider,
    Button,
    List,
    ListItem
} from '@mui/material';

import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import cambridge from '../../assets/images/cambridge.jpg';
import nasa from '../../assets/images/nasa.png';
import huawei from '../../assets/images/huawei.png'
import northface from '../../assets/images/northface.png';

import Progress from '../Home/components/Progress';
import InfoChip from './components/InfoChip';
import Section from './components/Section';
import SectionHeading from './components/SectionHeading';
import Image from '../../components/Image';
import MedalIcon from '../../assets/icons/MedalIcon';
import EducationSummary from './components/EducationSummary';
import WorkSummary from './components/WorkSummary';
import AnalyticsProfile from '../../assets/icons/AnalyticsProfile';
import AnalyticsSearch from '../../assets/icons/AnalyticsSearch';
import AnalyticsGraph from '../../assets/icons/AnalyticsGraph';

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
                gap={4}
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
                                    borderRadius="50%"
                                    overflow="hidden"
                                    width="fit-content"
                                    boxShadow="-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)"
                                    position="relative"
                                >
                                    <Image
                                        src={profile}
                                        sx={{
                                            width: "200px",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                        alt="Ronald Richard"
                                        border="3px #fff solid"
                                        borderRadius="50%"
                                        display="block"
                                    />
                                </Box>
                                <Grid
                                    container
                                    wrap="nowrap"
                                    width="auto"
                                    marginTop="auto"
                                    height="109px"
                                    flexGrow={1}
                                    alignItems="center"
                                    pb={2}
                                    marginLeft={-1}
                                >
                                    <Grid
                                        item
                                        flexGrow={1}
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
                            px={5}
                            marginTop={-3.5}
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
                                                        <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
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
                                        <Grid container gap={1} alignItems="center">
                                            <Grid item>
                                                <InfoChip type="location" label="California, USA" />
                                            </Grid>
                                            <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
                                            <Grid item>
                                                <InfoChip type="phone" label="+234 704 555 0114" />
                                            </Grid>
                                            <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
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
                           <Section px={0}>
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
                                    component="h4"
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
                            <Box px={5}>
                                <Typography
                                    component="p"
                                    color="#808080"
                                    fontFamily="open sans"
                                    fontSize={16}
                                    fontWeight={400}
                                    mt={4}
                                    mb={2.5}
                                >
                                    Hello! I'm Solomon, 
                                    <br/><br/>
                                    A web3 Product Designer with a dream of building a multimillion dollars design agency.
                                    <br/>
                                    With over 6 years of experience in experiential marketing, brand strategy, and design, I have worked across multiple verticals of businesses ranging from FMCG’s, E-commerce, Fin-tech, Ed-tech, and Prop-tech. ...
                                </Typography>
                                <Button
                                    disableRipple
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        borderRadius: '8px',
                                        padding: '0 16px'
                                    }}
                                    endIcon={<ExpandMoreRoundedIcon />}
                                >
                                    <Typography
                                        color={'#05668D'}
                                        fontFamily="open sans"
                                        fontWeight={700}
                                        fontSize={14}
                                        sx={{ textTransform: 'none', py: 1 }}
                                    >
                                        See more
                                    </Typography>
                                </Button>
                            </Box>
                           </Section>
                           <Section 
                                heading={
                                    <SectionHeading>Improve your Job matches</SectionHeading>
                                } 
                                py={2.5}
                            >
                                <List>
                                    <ListItem sx={{ padding: 0 }}>
                                        <Grid container wrap="nowrap" alignItems="center">
                                            <Grid flexGrow={1} item>
                                                <Typography
                                                    component="h4"
                                                    color="#23282B"
                                                    fontFamily="open sans"
                                                    fontSize={16}
                                                    fontWeight={600}
                                                    mb={1}
                                                >
                                                    Qualifications
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    color="#808080"
                                                    fontFamily="open sans"
                                                    fontSize={16}
                                                    fontWeight={400}
                                                >
                                                    Highlight your skills, education and experience
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <ArrowRightIcon fontSize="large" htmlColor="#055C7F" />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Box py={4.5}>
                                        <Divider/>
                                    </Box>
                                    <ListItem sx={{ padding: 0 }}>
                                        <Grid container wrap="nowrap" alignItems="center">
                                            <Grid flexGrow={1} item>
                                                <Typography
                                                    component="h4"
                                                    color="#23282B"
                                                    fontFamily="open sans"
                                                    fontSize={16}
                                                    fontWeight={600}
                                                    mb={1}
                                                >
                                                    Job Preference
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    color="#808080"
                                                    fontFamily="open sans"
                                                    fontSize={16}
                                                    fontWeight={400}
                                                >
                                                    Save specific details about your desired job
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <ArrowRightIcon fontSize="large" htmlColor="#055C7F" />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List>
                           </Section>
                           <Section
                                py={2.5}
                                heading={
                                    <SectionHeading>Resumes</SectionHeading>
                                }
                            >
                                <Grid container gap={2.5} alignItems="center" wrap="nowrap">
                                    <Grid item>
                                        <Image
                                            src={cambridge}
                                            alt="University of Birmingham"
                                            sx={{
                                                width: "66px",
                                                height: "100px",
                                                objectFit: "cover"
                                            }}
                                            border="3px #fff solid"
                                            borderRadius={2}
                                            display="block"
                                        />
                                    </Grid>
                                    <Grid item flexGrow={1}>
                                        <Typography
                                            component="h4"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={600}
                                            mb={1}
                                        >
                                            Jobfactor Resume
                                        </Typography>
                                        <Typography
                                            component="p"
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={400}
                                            mb={1}
                                        >
                                            Updated Jun 24, 2023
                                        </Typography>
                                        <Grid container alignItems="center" gap={.5}>
                                            <VisibilityOffIcon />
                                            <Typography
                                                component="p"
                                                color="#494949"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                            >
                                                Private
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <ArrowRightIcon fontSize="large" htmlColor="#055C7F" />
                                    </Grid>
                                </Grid>
                           </Section>
                           <Section
                                py={2.5}
                                heading={
                                    <SectionHeading>Help other Job Seekers</SectionHeading>
                                }
                           >
                                <Grid container gap={2.5} alignItems="center" wrap="nowrap">
                                    <Grid item py={1} pr={1}>
                                        <MedalIcon />
                                    </Grid>
                                    <Grid item flexGrow={1}>
                                        <Typography
                                            component="h4"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={600}
                                            mb={1}
                                        >
                                            Review companies
                                        </Typography>
                                        <Typography
                                            component="p"
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={400}
                                            pr={8}
                                        >
                                            Review companies you have worked for, this contributes to your Jobfactor score
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <ArrowRightIcon fontSize="large" htmlColor="#055C7F" />
                                    </Grid>
                                </Grid>                                
                            </Section>
                        </Grid>
                        <Grid item xs={4}>
                            <Section 
                                heading={
                                    <SectionHeading ml={0}>Education</SectionHeading>
                                } 
                                onClick={() => {}} 
                                px={2} 
                                py={0}
                            > 
                                <EducationSummary data={{
                                        university: {
                                            name: "Birmingham University",
                                            image: cambridge
                                        },
                                        major: "MSc Power Systems",
                                        yearStarted: "2016",
                                        yearEnded: "2018"
                                    }}
                                />
                                <EducationSummary data={{
                                        university: {
                                            name: "University of Saskatchewan",
                                        },
                                        major: "B.ENG Electrical Engineering",
                                        yearStarted: "2020",
                                        yearEnded: "2022"
                                    }}
                                />
                            </Section>

                            <Section 
                                heading={
                                    <SectionHeading ml={0}>Work Experience</SectionHeading>
                                }
                                onClick={() => {}} px={2} py={0}
                            >
                                <WorkSummary data={{
                                    employer: {
                                        name: "NASA",
                                        image: nasa
                                    },
                                    title: "Lead Product Designer",
                                    yearStarted: "2016",
                                    rankings: [
                                        "leader",
                                        "expert",
                                        "advanced",
                                        "experienced"
                                    ]
                                }}/>
                                <WorkSummary data={{
                                    employer: {
                                        name: "Huawei",
                                        image: huawei
                                    },
                                    title: "Lead Product Designer",
                                    yearStarted: "2016",
                                    rankings: [
                                        "beginner",
                                        "advanced",
                                        "leader",
                                        "expert",
                                    ]
                                }}/>
                                <WorkSummary data={{
                                    employer: {
                                        name: "The North Face",
                                        image: northface
                                    },
                                    title: "Volunteer Service",
                                    yearStarted: "2016",
                                    rankings: [
                                        "experienced",
                                        "advanced",
                                        "leader",
                                        "expert",
                                    ]
                                }}/>
                            </Section>

                            <Section 
                                heading={
                                    <SectionHeading ml={0} fontSize={16}>Analytics</SectionHeading>
                                } onClick={() => {}}
                                px={2}
                                py={0}
                                mb={2.5}
                                bgcolor="transparent"
                            >
                                <Grid container gap={0.33} overflow="hidden" borderRadius={1.5} wrap="nowrap" height="140px">
                                    <Grid item bgcolor="#FFFFFF" flexGrow={1} maxWidth="33%">
                                        <Grid container flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                                            <AnalyticsProfile />
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                PROFILE<br/>VIEWS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item bgcolor="#FFFFFF" flexGrow={1} maxWidth="33%">
                                        <Grid container flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                                            <AnalyticsSearch />
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                SEARCH<br/>APPEARANCES
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item bgcolor="#FFFFFF" flexGrow={1} maxWidth="33%">
                                        <Grid container flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                                            <AnalyticsGraph/>
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                POSTS<br />ENGAGEMENTS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Section>

                            <Button
                                    disableRipple
                                    sx={{
                                        backgroundColor: '#05668D',
                                        borderRadius: '8px',
                                        width: "100%"
                                    }}
                                >
                                    <Typography
                                        color={'#FFFFFF'}
                                        fontFamily="open sans"
                                        fontWeight={700}
                                        fontSize={14}
                                        sx={{ textTransform: 'none', py: .5 }}
                                    >
                                        Upgrade to Premium plan
                                    </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default UsersPage;
