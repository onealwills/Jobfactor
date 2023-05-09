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
import huawei from '../../assets/images/huawei.png';
import northface from '../../assets/images/northface.png';
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
import { Ranking } from './types/Ranking';
import EditProfileInfoDialog from './components/EditProfileInfoDialog';
import ScoreCard from '../../components/ScoreCard.tsx';
import { useState } from 'react';
import EditProfileAboutMeDialog from './components/Modals/EditProfileAboutMeDialog';
import EditIcon from '../../assets/icons/EditIcon';

function UsersPage() {
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [openAboutMeModal, setOpenAboutMeModal] = useState(false);

    const handleOnEditAboutMe = () => {
        setOpenAboutMeModal(true);
    };

    const handleOnEditProfile = () => {
        setOpenProfileModal(true);
    };

    return (
        <Container
            style={{
                paddingLeft: '35px',
                paddingRight: '0px',
                marginTop: '-48px',
                maxWidth: '100%'
            }}
        >
            <Grid container direction="column" gap={4}>
                <Grid item>
                    <Box
                        bgcolor="#fff"
                        borderRadius={1}
                        overflow="hidden"
                        pb={5}
                    >
                        <Box position="relative" pb="109px">
                            <Box overflow="hidden" borderRadius={[0, 0, 1, 1]}>
                                <img
                                    style={{
                                        height: '259px',
                                        width: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                    alt="Cover"
                                    src={cover}
                                />
                            </Box>
                            <Grid
                                container
                                gap={3}
                                position={'absolute'}
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
                                            width: '200px',
                                            height: '200px',
                                            objectFit: 'cover'
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
                                    <Grid item flexGrow={1}>
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
                        <Grid container px={5} marginTop={-3.5}>
                            <Grid item flexGrow={1} marginTop="auto">
                                <Grid container direction="column" gap={2}>
                                    <Grid item>
                                        <Grid
                                            container
                                            gap={2}
                                            alignItems="center"
                                        >

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

                                                <Grid item>
                                                    <Grid
                                                        container
                                                        gap={2}
                                                        alignItems="center"
                                                    >
                                                        <CircleIcon
                                                            sx={{
                                                                fontSize:
                                                                    '7.25px'
                                                            }}
                                                            htmlColor="#494949"
                                                        />
                                                        <Typography
                                                            component="span"
                                                            color="#808080"
                                                            fontFamily="open sans"
                                                            fontSize={16}
                                                            fontWeight={400}
                                                        >
                                                            Product Designer
                                                        </Typography>
                                                        <CheckCircleIcon
                                                            htmlColor="#49B6FF"
                                                            style={{
                                                                marginLeft:
                                                                    '-8px'
                                                            }}
                                                        />
                                                        <Grid item ml={1}>
                                                            <Button 
                                                                variant="contained"
                                                                style={{
                                                                    width: 'auto',
                                                                    minWidth: 'auto',
                                                                    color: '#808080',
                                                                    backgroundColor: '#F2F2F2',
                                                                }}
                                                                sx={{
                                                                    px: 1,
                                                                    py: 1.25,
                                                                }}
                                                                onClick={handleOnEditProfile}
                                                            >
                                                                <EditIcon fontSize="small" />
                                                            </Button>
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
                                            Web3 Product Designer | I want to
                                            design extraordinary things
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid
                                            container
                                            gap={1}
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                <InfoChip
                                                    type="location"
                                                    label="California, USA"
                                                />
                                            </Grid>
                                            <CircleIcon
                                                sx={{ fontSize: '7.25px' }}
                                                htmlColor="#494949"
                                            />
                                            <Grid item>
                                                <InfoChip
                                                    type="phone"
                                                    label="+234 704 555 0114"
                                                />
                                            </Grid>
                                            <CircleIcon
                                                sx={{ fontSize: '7.25px' }}
                                                htmlColor="#494949"
                                            />
                                            <Grid item>
                                                <InfoChip
                                                    type="email"
                                                    label="Ronaldrichie@hotmail.com"
                                                />
                                            </Grid>
                                            <Grid item ml={2}>
                                                <Button 
                                                    variant="contained"
                                                    style={{
                                                        width: 'auto',
                                                        minWidth: 'auto',
                                                        color: '#808080',
                                                        backgroundColor: '#F2F2F2',
                                                    }}
                                                    sx={{
                                                        px: 1,
                                                        py: 1.25,
                                                    }}
                                                >
                                                    <EditIcon fontSize="small" />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item flexShrink={1}>
                                <Box py={1}>
                                    <ScoreCard value={550} divider={1000} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs={8}>
                            <Section px={0}>
                                <Box
                                    px={5}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box>
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
                                    <Button
                                        sx={{
                                            mt: 1,
                                            height: '40px',
                                            width: '80px',
                                            py: '8px',
                                            px: '8px',
                                            maxHeight: '40px',
                                            color: '#05668D',
                                            backgroundColor: '#F2F2F2',
                                            borderRadius: '8px',
                                            textTransform: 'none',
                                            gap: 1
                                        }}
                                        onClick={handleOnEditAboutMe}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.61763 16.2657C4.1093 16.2657 3.6343 16.0907 3.29263 15.7657C2.8593 15.3573 2.65097 14.7407 2.72597 14.074L3.0343 11.374C3.09263 10.8657 3.40097 10.1907 3.7593 9.82398L10.601 2.58232C12.3093 0.773983 14.0926 0.723983 15.901 2.43232C17.7093 4.14065 17.7593 5.92398 16.051 7.73232L9.2093 14.974C8.8593 15.349 8.2093 15.699 7.70096 15.7823L5.01763 16.2407C4.87597 16.249 4.75097 16.2657 4.61763 16.2657ZM13.276 2.42398C12.6343 2.42398 12.076 2.82398 11.5093 3.42398L4.66763 10.674C4.50097 10.849 4.3093 11.2657 4.27597 11.5073L3.96763 14.2073C3.9343 14.4823 4.00097 14.7073 4.15097 14.849C4.30097 14.9907 4.52597 15.0407 4.80097 14.999L7.4843 14.5407C7.72597 14.499 8.12597 14.2823 8.29263 14.1073L15.1343 6.86565C16.1676 5.76565 16.5426 4.74898 15.0343 3.33232C14.3676 2.69065 13.7926 2.42398 13.276 2.42398Z"
                                                fill="#05668D"
                                            />
                                            <path
                                                d="M14.4497 9.12601C14.433 9.12601 14.408 9.12601 14.3914 9.12601C11.7914 8.86768 9.69971 6.89268 9.29971 4.30935C9.24971 3.96768 9.48305 3.65101 9.82471 3.59268C10.1664 3.54268 10.483 3.77601 10.5414 4.11768C10.858 6.13435 12.4914 7.68435 14.5247 7.88435C14.8664 7.91768 15.1164 8.22601 15.083 8.56768C15.0414 8.88435 14.7664 9.12601 14.4497 9.12601Z"
                                                fill="#05668D"
                                            />
                                            <path
                                                d="M17.5 18.9609H2.5C2.15833 18.9609 1.875 18.6776 1.875 18.3359C1.875 17.9943 2.15833 17.7109 2.5 17.7109H17.5C17.8417 17.7109 18.125 17.9943 18.125 18.3359C18.125 18.6776 17.8417 18.9609 17.5 18.9609Z"
                                                fill="#05668D"
                                            />
                                        </svg>
                                        Edit
                                    </Button>
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
                                        <br />
                                        <br />
                                        A web3 Product Designer with a dream of
                                        building a multimillion dollars design
                                        agency.
                                        <br />
                                        With over 6 years of experience in
                                        experiential marketing, brand strategy,
                                        and design, I have worked across
                                        multiple verticals of businesses ranging
                                        from FMCG’s, E-commerce, Fin-tech,
                                        Ed-tech, and Prop-tech. ...
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
                                            sx={{
                                                textTransform: 'none',
                                                py: 1
                                            }}
                                        >
                                            See more
                                        </Typography>
                                    </Button>
                                </Box>
                            </Section>
                            <Section
                                heading={
                                    <SectionHeading>
                                        Improve your Job matches
                                    </SectionHeading>
                                }
                                py={2.5}
                            >
                                <List>
                                    <ListItem sx={{ padding: 0 }}>
                                        <Grid
                                            container
                                            wrap="nowrap"
                                            alignItems="center"
                                        >
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
                                                    Highlight your skills,
                                                    education and experience
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <ArrowRightIcon
                                                    fontSize="large"
                                                    htmlColor="#055C7F"
                                                />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Box py={4.5}>
                                        <Divider />
                                    </Box>
                                    <ListItem sx={{ padding: 0 }}>
                                        <Grid
                                            container
                                            wrap="nowrap"
                                            alignItems="center"
                                        >
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
                                                    Save specific details about
                                                    your desired job
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <ArrowRightIcon
                                                    fontSize="large"
                                                    htmlColor="#055C7F"
                                                />
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
                                <Grid
                                    container
                                    gap={2.5}
                                    alignItems="center"
                                    wrap="nowrap"
                                >
                                    <Grid item>
                                        <Image
                                            src={cambridge}
                                            alt="University of Birmingham"
                                            sx={{
                                                width: '66px',
                                                height: '100px',
                                                objectFit: 'cover'
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
                                        <Grid
                                            container
                                            alignItems="center"
                                            gap={0.5}
                                        >
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
                                        <ArrowRightIcon
                                            fontSize="large"
                                            htmlColor="#055C7F"
                                        />
                                    </Grid>
                                </Grid>
                            </Section>
                            <Section
                                py={2.5}
                                heading={
                                    <SectionHeading>
                                        Help other Job Seekers
                                    </SectionHeading>
                                }
                            >
                                <Grid
                                    container
                                    gap={2.5}
                                    alignItems="center"
                                    wrap="nowrap"
                                >
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
                                            Review companies you have worked
                                            for, this contributes to your
                                            Jobfactor score
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <ArrowRightIcon
                                            fontSize="large"
                                            htmlColor="#055C7F"
                                        />
                                    </Grid>
                                </Grid>
                            </Section>
                        </Grid>
                        <Grid item xs={4}>
                            <Section
                                heading={
                                    <SectionHeading ml={0}>
                                        Education
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={2}
                                py={0}
                            >
                                <EducationSummary
                                    data={{
                                        university: {
                                            name: 'Birmingham University',
                                            image: cambridge
                                        },
                                        major: 'MSc Power Systems',
                                        yearStarted: '2016',
                                        yearEnded: '2018'
                                    }}
                                />
                                <EducationSummary
                                    data={{
                                        university: {
                                            name: 'University of Saskatchewan'
                                        },
                                        major: 'B.ENG Electrical Engineering',
                                        yearStarted: '2020',
                                        yearEnded: '2022'
                                    }}
                                />
                            </Section>

                            <Section
                                heading={
                                    <SectionHeading ml={0}>
                                        Work Experience
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={2}
                                py={0}
                            >
                                <WorkSummary
                                    data={{
                                        employer: {
                                            name: 'NASA',
                                            image: nasa
                                        },
                                        title: 'Lead Product Designer',
                                        yearStarted: '2016',
                                        rankings: [
                                            Ranking.Leader,
                                            Ranking.Expert,
                                            Ranking.Advanced,
                                            Ranking.Experienced
                                        ]
                                    }}
                                />
                                <WorkSummary
                                    data={{
                                        employer: {
                                            name: 'Huawei',
                                            image: huawei
                                        },
                                        title: 'Lead Product Designer',
                                        yearStarted: '2016',
                                        rankings: [
                                            Ranking.Beginner,
                                            Ranking.Advanced,
                                            Ranking.Leader,
                                            Ranking.Expert
                                        ]
                                    }}
                                />
                                <WorkSummary
                                    data={{
                                        employer: {
                                            name: 'The North Face',
                                            image: northface
                                        },
                                        title: 'Volunteer Service',
                                        yearStarted: '2016',
                                        rankings: [
                                            Ranking.Experienced,
                                            Ranking.Advanced,
                                            Ranking.Leader,
                                            Ranking.Expert
                                        ]
                                    }}
                                />
                            </Section>

                            <Section
                                heading={
                                    <SectionHeading ml={0} fontSize={16}>
                                        Analytics
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={2}
                                py={0}
                                mb={2.5}
                                bgcolor="transparent"
                            >
                                <Grid
                                    container
                                    gap={0.33}
                                    overflow="hidden"
                                    borderRadius={1.5}
                                    wrap="nowrap"
                                    height="140px"
                                >
                                    <Grid
                                        item
                                        bgcolor="#FFFFFF"
                                        flexGrow={1}
                                        maxWidth="33%"
                                    >
                                        <Grid
                                            container
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            height="100%"
                                        >
                                            <AnalyticsProfile />
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                PROFILE
                                                <br />
                                                VIEWS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        bgcolor="#FFFFFF"
                                        flexGrow={1}
                                        maxWidth="33%"
                                    >
                                        <Grid
                                            container
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            height="100%"
                                        >
                                            <AnalyticsSearch />
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                SEARCH
                                                <br />
                                                APPEARANCES
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        bgcolor="#FFFFFF"
                                        flexGrow={1}
                                        maxWidth="33%"
                                    >
                                        <Grid
                                            container
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            height="100%"
                                        >
                                            <AnalyticsGraph />
                                            <Typography
                                                component="p"
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontSize={14}
                                                fontWeight={600}
                                                textAlign="center"
                                            >
                                                POSTS
                                                <br />
                                                ENGAGEMENTS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Section>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#05668D',
                                    borderRadius: '8px',
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    color={'#FFFFFF'}
                                    fontFamily="open sans"
                                    fontWeight={700}
                                    fontSize={14}
                                    sx={{ textTransform: 'none', py: 0.5 }}
                                >
                                    Upgrade to Premium plan
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <EditProfileInfoDialog
                open={openProfileModal}
                setOpen={setOpenProfileModal}
            />
            <EditProfileAboutMeDialog
                open={openAboutMeModal}
                setOpen={setOpenAboutMeModal}
            />
        </Container>
    );
}

export default UsersPage;
