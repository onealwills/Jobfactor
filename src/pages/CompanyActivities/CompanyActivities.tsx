import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    IconButton,
    Grid,
    Box,
    Typography,
    Container,
    Button,
    ImageList,
    ImageListItem
} from '@mui/material';
import cover from '../../assets/images/companyCover.png';
import profile from '../../assets/images/companyProfile.png';
import InfoChip from '../Users/components/InfoChip';
import Section from '../Activities/components/Section';
import SectionHeading from '../Users/components/SectionHeading';
import Image from '../../components/Image';
import AnalyticsProfile from '../../assets/icons/AnalyticsProfile';
import AnalyticsSearch from '../../assets/icons/AnalyticsSearch';
import AnalyticsGraph from '../../assets/icons/AnalyticsGraph';
import ContactInfoModal from '../AboutCompany/components/ContactInfoModal';
import ScoreCard from '../../components/ScoreCard.tsx';
import { useState } from 'react';
import EditIcon from '../../assets/icons/EditIcon';
import EditProfileModal from '../AboutCompany/components/EditProfileModal';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import image1 from '../../assets/images/galleryImage1.png';
import image2 from '../../assets/images/galleryImage2.png';
import image3 from '../../assets/images/galleryImage3.png';
import image4 from '../../assets/images/galleryImage4.png';
import image5 from '../../assets/images/galleryImage5.png';
import image6 from '../../assets/images/galleryImage6.png';
import feedImg from '../../assets/images/slider1.png';
import profImg1 from '../../assets/images/profileReview.png';
import profImg2 from '../../assets/images/feed2.png';
import profImg3 from '../../assets/images/SideNavProfile.png';
import ProfileList from '../Activities/components/ProfileList';
import { useNavigate } from 'react-router-dom';
import { FeedItem } from '../Home/components/FeedItem';

const images = [image1, image2, image3, image4, image5, image6];

const data = [
    {
        profileImage: profile,
        fullName: 'Jobfactor Inc.',
        jobTitle: 'Product Designer',
        description:
            'Hello everyone,If you wan to get started in brand design you can send me a private message so I can put you through all you will need to get started. #startyourtechjourneynow',
        views: 2456,
        likes: 500,
        comments: 156,
        shares: 75,
        images: [feedImg],
        isAccountVerified: true
    },
    {
        profileImage: profile,
        fullName: 'Jobfactor Inc.',
        jobTitle: 'Product Designer',
        description: 'test',
        views: 2456,
        likes: 500,
        comments: 156,
        shares: 75,
        images: [],
        isAccountVerified: true
    }
];
const professionals = [
    {
        profileImage: profImg1,
        fullName: 'Jane Cooper',
        jobTitle: 'Product Designer',
        score: 550
    },
    {
        profileImage: profImg2,
        fullName: 'Esther Howard',
        jobTitle: 'Accounting leader',
        score: 450
    },
    {
        profileImage: profImg3,
        fullName: 'Kathryn Murphy',
        jobTitle: 'Human Resource',
        score: 750
    }
];

function CompanyActivities() {
    const [openContactInfoModal, setOpenContactInfoModal] = useState(false);
    const [openProfileInfoModal, setOpenProfileInfoModal] = useState(false);
    const navigate = useNavigate();

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
                                                    Jobfactor Inc.
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
                            {data.map((feed) => (
                                <FeedItem feed={feed} />
                            ))}
                        </Grid>
                        <Grid item xs={4}>
                            <Section
                                heading={
                                    <SectionHeading ml={0}>
                                        Gallery
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={2}
                                py={0}
                            >
                                <ImageList
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '12px'
                                    }}
                                    cols={3}
                                >
                                    {images.map((item) => (
                                        <ImageListItem>
                                            <img
                                                src={item}
                                                alt={'Gallery'}
                                                style={{ width: '100%' }}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Section>

                            <Section
                                heading={
                                    <SectionHeading ml={0}>
                                        Top Professionals in your industry
                                    </SectionHeading>
                                }
                                onClick={() => {}}
                                px={'12px'}
                                py={'16px'}
                            >
                                {professionals.map((person) => (
                                    <ProfileList data={person} />
                                ))}
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
            <ContactInfoModal
                open={openContactInfoModal}
                setOpen={setOpenContactInfoModal}
            />
            <EditProfileModal
                open={openProfileInfoModal}
                setOpen={setOpenProfileInfoModal}
            />
        </Container>
    );
}

export default CompanyActivities;
