import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import EastIcon from '@mui/icons-material/East';
import {
    Box,
    Typography,
    IconButton,
    Grid,
    Container,
    Divider,
    Button,
    Rating,
    Avatar
} from '@mui/material';
import cover from '../../../assets/images/companyCover.png';
import profile from '../../../assets/images/companyProfile.png';
import cambridge from '../../../assets/images/cambridge.jpg';
import InfoChip from '../../Users/components/InfoChip';
import Section from '../../Users/components/Section';
import SectionHeading from '../../Users/components/SectionHeading';
import Image from '../../../components/Image';
import MedalIcon from '../../../assets/icons/MedalIcon';
import AnalyticsProfile from '../../../assets/icons/AnalyticsProfile';
import AnalyticsSearch from '../../../assets/icons/AnalyticsSearch';
import AnalyticsGraph from '../../../assets/icons/AnalyticsGraph';
import ContactInfoModal from '../components/ContactInfoModal';
import ScoreCard from '../../../components/ScoreCard.tsx';
import { useState } from 'react';
import EditAboutModal from '../components/EditAboutModal';
import EditIcon from '../../../assets/icons/EditIcon';
import EditProfileModal from '../components/EditProfileModal';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import { useNavigate } from 'react-router-dom';
import DotIcon from '../../../assets/icons/DotIcon';
import VerifiedIcon from '../../../assets/icons/VerifiedIcon';
import ArrowRight from '../../../assets/icons/ArrowRight';

const data = [
    { review: 'Salary, Compensation,Benefits', rating: 4 },
    { review: 'Work/Life balance, flexible work schedule', rating: 4 },
    {
        review: 'Carrer growth opportunities, reward and recoginition',
        rating: 4
    }
];
function AboutCompany() {
    const [openContactInfoModal, setOpenContactInfoModal] = useState(false);
    const [openAboutMeModal, setOpenAboutMeModal] = useState(false);
    const [openProfileInfoModal, setOpenProfileInfoModal] = useState(false);
    const navigate = useNavigate();

    const handleOnEditAboutMe = () => {
        setOpenAboutMeModal(true);
    };

    const handleOnEditContactInfo = () => {
        setOpenContactInfoModal(true);
    };

    const handleOnEditProfileInfo = () => {
        setOpenProfileInfoModal(true);
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
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        backdropFilter: 'blur(2.5px)',
                                        padding: '15px 40px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '25px'
                                        }}
                                    >
                                        <IconButton
                                            onClick={() => navigate(-1)}
                                        >
                                            <ArrowLeftIcon color="white" />
                                        </IconButton>
                                        <Typography
                                            sx={{
                                                fontSize: '24px',
                                                fontWeight: '600',
                                                fontFamily: 'Open Sans',
                                                color: 'white',
                                                lineHeight: '32px'
                                            }}
                                        >
                                            Jobfactor Inc.
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            background: '#49B6FF',
                                            borderRadius: '6px',
                                            padding: '8px 12px',
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            fontFamily: 'Open Sans',
                                            color: 'white',
                                            lineHeight: '100%'
                                        }}
                                    >
                                        550
                                    </Box>
                                </Box>
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
                                        alt="Jobfactor Inc."
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
                                                    Jobfactor INC.
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
                                                            fontSize: '7.25px'
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
                                                        Founded in 1986
                                                    </Typography>
                                                    <CheckCircleIcon
                                                        htmlColor="#49B6FF"
                                                        style={{
                                                            marginLeft: '-8px'
                                                        }}
                                                    />
                                                    <Grid item ml={1}>
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                width: 'auto',
                                                                minWidth:
                                                                    'auto',
                                                                color: '#808080',
                                                                backgroundColor:
                                                                    '#F2F2F2'
                                                            }}
                                                            sx={{
                                                                px: 1,
                                                                py: 1.25
                                                            }}
                                                            onClick={
                                                                handleOnEditProfileInfo
                                                            }
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
                                            Beyond resume, beyond Linkedin
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
                                                    label="jobfactor@hotmail.com"
                                                />
                                            </Grid>
                                            <Grid item ml={2}>
                                                <Button
                                                    variant="contained"
                                                    style={{
                                                        width: 'auto',
                                                        minWidth: 'auto',
                                                        color: '#808080',
                                                        backgroundColor:
                                                            '#F2F2F2'
                                                    }}
                                                    sx={{
                                                        px: 1,
                                                        py: 1.25
                                                    }}
                                                    onClick={
                                                        handleOnEditContactInfo
                                                    }
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
                                            About Jobfactor
                                        </Typography>
                                        <Typography
                                            component="h4"
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={400}
                                            mb={1.5}
                                        >
                                            Tell the world about your company.
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
                                px={0}
                                sx={{ borderRadius: 0, mb: '20px' }}
                            >
                                <Box
                                    px={5}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            component="h3"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={20}
                                            fontWeight={600}
                                        >
                                            Company News
                                        </Typography>
                                    </Box>
                                    <Button
                                        sx={{
                                            p: '8px',
                                            color: '#05668D',
                                            backgroundColor: '#F2F2F2',
                                            borderRadius: '8px',
                                            textTransform: 'capitalize',
                                            gap: 1
                                        }}
                                    >
                                        View all
                                        <EastIcon />
                                    </Button>
                                </Box>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    mb: 0
                                }}
                            >
                                <Grid container gap={2.5} wrap="nowrap">
                                    <Grid item>
                                        <Image
                                            src={cambridge}
                                            alt="University of Birmingham"
                                            sx={{
                                                width: '70px',
                                                height: '70px',
                                                objectFit: 'cover'
                                            }}
                                            border="3px #fff solid"
                                            borderRadius={2}
                                            display="block"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mb: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                30 January, 2023
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                3 minutes read
                                            </Typography>
                                        </Box>

                                        <Typography
                                            component="h4"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={600}
                                            mb={2}
                                        >
                                            lorem ipsum lorem ipsum lorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsum
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                color: '#05668D',
                                                backgroundColor: '#F2F2F2',
                                                borderRadius: '8px',
                                                textTransform: 'none',
                                                width: 'auto',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                gap: 1
                                            }}
                                        >
                                            Continue reading <EastIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    mb: 0
                                }}
                            >
                                <Grid container gap={2.5} wrap="nowrap">
                                    <Grid item>
                                        <Image
                                            src={cambridge}
                                            alt="University of Birmingham"
                                            sx={{
                                                width: '70px',
                                                height: '70px',
                                                objectFit: 'cover'
                                            }}
                                            border="3px #fff solid"
                                            borderRadius={2}
                                            display="block"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mb: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                30 January, 2023
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                3 minutes read
                                            </Typography>
                                        </Box>

                                        <Typography
                                            component="h4"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={600}
                                            mb={2}
                                        >
                                            lorem ipsum lorem ipsum lorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsum
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                color: '#05668D',
                                                backgroundColor: '#F2F2F2',
                                                borderRadius: '8px',
                                                textTransform: 'none',
                                                width: 'auto',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                gap: 1
                                            }}
                                        >
                                            Continue reading <EastIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    mb: 0
                                }}
                            >
                                <Grid container gap={2.5} wrap="nowrap">
                                    <Grid item>
                                        <Image
                                            src={cambridge}
                                            alt="University of Birmingham"
                                            sx={{
                                                width: '70px',
                                                height: '70px',
                                                objectFit: 'cover'
                                            }}
                                            border="3px #fff solid"
                                            borderRadius={2}
                                            display="block"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mb: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                30 January, 2023
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                3 minutes read
                                            </Typography>
                                        </Box>

                                        <Typography
                                            component="h4"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={600}
                                            mb={2}
                                        >
                                            lorem ipsum lorem ipsum lorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsumlorem ipsumlorem
                                            ipsumlorem ipsum
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                color: '#05668D',
                                                backgroundColor: '#F2F2F2',
                                                borderRadius: '8px',
                                                textTransform: 'none',
                                                width: 'auto',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                gap: 1
                                            }}
                                        >
                                            Continue reading <EastIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Section>
                            <Section
                                px={0}
                                sx={{ borderRadius: 0, mt: '36px', mb: '20px' }}
                            >
                                <Box
                                    px={5}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            component="h3"
                                            color="#23282B"
                                            fontFamily="open sans"
                                            fontSize={20}
                                            fontWeight={600}
                                        >
                                            Employees
                                        </Typography>
                                    </Box>
                                    <Button
                                        sx={{
                                            p: '8px',
                                            color: '#05668D',
                                            backgroundColor: '#F2F2F2',
                                            borderRadius: '8px',
                                            textTransform: 'capitalize',
                                            gap: 1
                                        }}
                                    >
                                        View all
                                        <EastIcon />
                                    </Button>
                                </Box>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    pt: '20px',
                                    mb: 0
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}
                                >
                                    <Avatar
                                        src={profile}
                                        sx={{ width: '60px', height: '60px' }}
                                    />
                                    <Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <Typography
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontWeight={600}
                                                fontSize={14}
                                            >
                                                Jenny Wilson
                                            </Typography>
                                            <VerifiedIcon />
                                            <DotIcon />
                                            <Box
                                                sx={{
                                                    background: '#808080',
                                                    color: 'white',
                                                    borderRadius: '5px',
                                                    p: '5px 10px',
                                                    fontFamily: 'Open sans',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                Admin
                                            </Box>
                                        </Box>
                                        <Typography
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={12}
                                        >
                                            Lead Marketer
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mt: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                March 2020 - Present
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                2 years, 7 months
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    pt: '20px',
                                    mb: 0
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}
                                >
                                    <Avatar
                                        src={profile}
                                        sx={{ width: '60px', height: '60px' }}
                                    />
                                    <Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <Typography
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontWeight={600}
                                                fontSize={14}
                                            >
                                                Jenny Wilson
                                            </Typography>
                                            <VerifiedIcon />
                                            <DotIcon />
                                            <Box
                                                sx={{
                                                    background: '#808080',
                                                    color: 'white',
                                                    borderRadius: '5px',
                                                    p: '5px 10px',
                                                    fontFamily: 'Open sans',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                Admin
                                            </Box>
                                        </Box>
                                        <Typography
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={12}
                                        >
                                            Lead Marketer
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mt: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                March 2020 - Present
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                2 years, 7 months
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Section>
                            <Section
                                sx={{
                                    borderBottom: '1px solid #ccc',
                                    borderRadius: 0,
                                    pt: '20px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}
                                >
                                    <Avatar
                                        src={profile}
                                        sx={{ width: '60px', height: '60px' }}
                                    />
                                    <Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <Typography
                                                color="#23282B"
                                                fontFamily="open sans"
                                                fontWeight={600}
                                                fontSize={14}
                                            >
                                                Jenny Wilson
                                            </Typography>
                                            <VerifiedIcon />
                                            <DotIcon />
                                            <Box
                                                sx={{
                                                    background: '#808080',
                                                    color: 'white',
                                                    borderRadius: '5px',
                                                    p: '5px 10px',
                                                    fontFamily: 'Open sans',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                Admin
                                            </Box>
                                        </Box>
                                        <Typography
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={12}
                                        >
                                            Lead Marketer
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                mt: '5px'
                                            }}
                                        >
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                March 2020 - Present
                                            </Typography>
                                            <DotIcon />
                                            <Typography
                                                color="#808080"
                                                fontFamily="open sans"
                                                fontSize={12}
                                            >
                                                2 years, 7 months
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Section>
                            <Section py={2.5}>
                                <Grid
                                    container
                                    gap={2.5}
                                    alignItems="center"
                                    wrap="nowrap"
                                >
                                    <Grid item py={1} pr={1}>
                                        <MedalIcon color={'rgb(72 181 254)'} />
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
                                            RATE AND REVIEW EMPLOYEE
                                        </Typography>
                                        <Typography
                                            component="p"
                                            color="#808080"
                                            fontFamily="open sans"
                                            fontSize={16}
                                            fontWeight={400}
                                            pr={8}
                                        >
                                            Rate and review past and present
                                            employees
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                            sx={{
                                                background: '#F2F2F2',
                                                borderRadius: '5px'
                                            }}
                                        >
                                            <ArrowRight />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Section>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography component={'h6'} variant="h6">
                                Company Reviews
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#808080',
                                    fontSize: '16px',
                                    mt: '5px'
                                }}
                            >
                                All reviews shown are anonymous
                            </Typography>
                            {data.map((item) => (
                                <Box
                                    sx={{
                                        padding: '20px 0',
                                        m: 'auto 20px',
                                        borderBottom: '1px solid #808080'
                                    }}
                                >
                                    <Typography
                                        fontWeight={'600'}
                                        mb={'5px'}
                                        color="#808080"
                                        textTransform={'uppercase'}
                                    >
                                        {item.review}
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={item.rating}
                                        readOnly
                                    />
                                </Box>
                            ))}

                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#05668D',
                                    mt: '20px',
                                    mb: '40px'
                                }}
                            >
                                View reviews
                            </Button>
                            <Section
                                heading={
                                    <SectionHeading ml={0} fontSize={16}>
                                        Analytics
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={0}
                                py={0}
                                mb={2.5}
                                bgcolor="transparent"
                            >
                                <Grid
                                    container
                                    gap={1}
                                    wrap="nowrap"
                                    height="140px"
                                >
                                    <Grid width={'100%'} item bgcolor="#e3f6ff">
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
                                    <Grid item width={'100%'} bgcolor="#e3f6ff">
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
                                    <Grid item bgcolor="#e3f6ff" width={'100%'}>
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
            <ContactInfoModal
                open={openContactInfoModal}
                setOpen={setOpenContactInfoModal}
            />
            <EditAboutModal
                open={openAboutMeModal}
                setOpen={setOpenAboutMeModal}
            />
            <EditProfileModal
                open={openProfileInfoModal}
                setOpen={setOpenProfileInfoModal}
            />
        </Container>
    );
}

export default AboutCompany;
