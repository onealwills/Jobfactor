import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import cover from '../../../assets/images/cover.jpg';
import cambridge from '../../../assets/images/cambridge.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import InfoChip from '../../Users/components/InfoChip';
import ScoreCard from '../../../components/ScoreCard.tsx';
import Section from '../../Users/components/Section';
import SectionHeading from '../../Users/components/SectionHeading';
import EducationSummary from '../../Users/components/EducationSummary';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import GlobalSearch from '../../../assets/icons/GlobalSearch';
import ArrowUpRight from '../../../assets/icons/ArrowUpRight';
import EmailSolid from '../../../assets/icons/EmailSolid';
import ArrowForward from '../../../assets/icons/ArrowForward';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';
import image1 from '../../../assets/images/galleryImage1.png';
import image2 from '../../../assets/images/galleryImage2.png';
import image3 from '../../../assets/images/galleryImage3.png';
import image4 from '../../../assets/images/galleryImage4.png';
import image5 from '../../../assets/images/galleryImage5.png';
import image6 from '../../../assets/images/galleryImage6.png';
import { useGetApplicantById } from '../../../utils/hooks/api/jobs/useGetApplicantById';
import { Avatar } from '@mui/material';
const images = [image1, image2, image3, image4, image5, image6];

function ApplicantDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: applicant, isFetching } = useGetApplicantById(id ?? '');
    console.log('applicant', applicant)
    return (
        <Container
            style={{
                paddingLeft: '35px',
                paddingRight: '0px',
                marginTop: '-48px',
                maxWidth: '100%'
            }}
        >
            {isFetching ? null
                :
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
                                                variant='headlineSmallSemiBold'
                                                sx={{
                                                    color: 'white',
                                                    textTransform: 'capitalize'
                                                }}
                                            >
                                                {applicant?.professionalProfile?.firstName} {applicant?.professionalProfile?.lastName}
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
                                            {applicant?.score}
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
                                        <Avatar
                                            sx={{
                                                width: '200px',
                                                height: '200px',
                                                border: '4px solid #FFF',
                                                objectFit: 'cover'
                                            }}
                                            src={applicant?.professionalProfile?.photoUrl}
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
                                                variant="titleLargeBold"
                                            >
                                                400+
                                            </Typography>
                                            &nbsp;
                                            <Typography
                                                component={'span'}
                                                color="#808080"
                                                variant='titleMediumRegular'
                                            >
                                                Connections
                                            </Typography>
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
                                                mt={1}
                                                marginBottom={'-30px'}
                                            >
                                                <Grid item>
                                                    <Typography
                                                        component="h2"
                                                        color="#23282B"
                                                        textTransform={'capitalize'}
                                                        variant='headlineMediumSemiBold'
                                                    >
                                                        {applicant?.professionalProfile?.firstName} {applicant?.professionalProfile?.lastName}
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
                                                            variant="titleMediumRegular"
                                                        >
                                                            Product Designer
                                                        </Typography>
                                                        <CheckCircleIcon
                                                            htmlColor="#49B6FF"
                                                            style={{
                                                                marginLeft: '-8px'
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid item marginLeft={'auto'} marginTop='-55px'>
                                                    <ScoreCard value={550} divider={1000} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                component={'p'}
                                                color="#23282B"
                                                variant='titleMediumRegular'
                                            >
                                                Web3 Product Designer | I want to
                                                design extraordinary things
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems={'center'}>
                                                <Grid item xs={10}>
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
                                                                label={applicant?.professionalProfile?.emailAddress}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={2} textAlign='right'>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        }}
                                                    >
                                                        <Button
                                                            variant='contained'
                                                            sx={{
                                                                p: '14px 16px',
                                                                fontSize: '14px',
                                                                fontWeight: 600,
                                                                lineHeight: '20px',
                                                                letterSpacing: '0.014px'
                                                            }}
                                                        >
                                                            View application
                                                        </Button>
                                                        <IconButton>
                                                            <MoreVertIcon fontSize="medium" />
                                                        </IconButton>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item xs={8}>
                                <Section px={0} mb={'20px'}>
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
                                                variant="titleLargeSemiBold"
                                                mb={1}
                                            >
                                                About me
                                            </Typography>
                                            <Typography
                                                component="h4"
                                                color="#808080"
                                                variant="titleMediumRegular"
                                                mb={1.5}
                                            >
                                                Tell the world about yourself.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box px={5}>
                                        <Typography
                                            component="p"
                                            color="#808080"
                                            variant="titleMediumRegular"
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
                                                variant="titleSmallBold"
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
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Education
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    py={0}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
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

                                </Section>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Work Experience
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    py={0}
                                    pb={2}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'Product Designer',
                                                image: cambridge
                                            },
                                            major: 'NASA',
                                            yearStarted: '2020',
                                            yearEnded: '2022'
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant='titleMediumBold'
                                            color='#494949'
                                        >
                                            Skills:&nbsp;
                                            <Typography
                                                component="span"
                                                variant='titleMediumRegular'
                                            >
                                                Customer Experience Design · Ux writing · Mobile Interface Design · Web Interface Design · Product Strategy · User Research · Interaction
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Section>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Volunteer Service
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    py={0}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'Graphics Designer',
                                                image: cambridge
                                            },
                                            major: 'GoPro INC.',
                                            yearStarted: '2016',
                                            yearEnded: '2018'
                                        }}
                                    />

                                </Section>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Licenses and Certification
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    py={0}
                                    mb={0}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'Google Certified Product Designer',
                                                image: cambridge
                                            },
                                            major: 'Google',
                                            yearStarted: '2016',
                                            yearEnded: '2018'
                                        }}
                                    />

                                </Section>
                                <Section
                                    px={2}
                                    py={0}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'Google Certified Product Designer',
                                                image: cambridge
                                            },
                                            major: 'Google',
                                            yearStarted: '2016',
                                            yearEnded: '2018'
                                        }}
                                    />

                                </Section>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Tests
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    pl={4}
                                    py={0}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'SAT',
                                            },
                                            major: 'College Board',
                                            yearStarted: '2016',
                                            yearEnded: '2018'
                                        }}
                                    />

                                </Section>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid #EDEDED'
                                    }}
                                >
                                    <Typography
                                        variant='titleLargeSemiBold'
                                    >
                                        Awards
                                    </Typography>
                                </Box>
                                <Section
                                    px={2}
                                    pl={4}
                                    py={0}
                                    mb={'20px'}
                                    sx={{
                                        borderTopRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottom: '1px solid #D8D8D8'
                                    }}
                                >
                                    <EducationSummary
                                        data={{
                                            university: {
                                                name: 'Employee of the year',
                                            },
                                            major: 'Jobfactor Inc.',
                                            yearStarted: '2016',
                                            yearEnded: '2018'
                                        }}
                                    />

                                </Section>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='titleLargeSemiBold'>Skills</Typography>
                                <Box
                                    sx={{
                                        mt: '16px',
                                        mb: '20px',
                                        gap: '12px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                    }}
                                >
                                    {skills.map((skill: ISkillTypes) => <SkillBadge item={skill} />)}
                                </Box>

                                <Typography variant='titleMediumRegular'>Website</Typography>
                                <Box
                                    sx={{
                                        mb: '16px',
                                        gap: '8px',
                                        display: 'flex',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                    }}
                                >
                                    <GlobalSearch />
                                    <Typography
                                        variant='titleMediumSemiBold'
                                        sx={{
                                            color: '#05668D',
                                        }}
                                    >
                                        Samsonjob.com
                                    </Typography>
                                    <ArrowUpRight />
                                </Box>
                                <Typography variant='titleMediumRegular'>Email</Typography>
                                <Box
                                    sx={{
                                        gap: '8px',
                                        display: 'flex',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                    }}
                                >
                                    <EmailSolid />
                                    <Typography
                                        variant='titleMediumSemiBold'
                                        sx={{
                                            color: '#05668D',
                                        }}
                                    >
                                        {applicant?.professionalProfile?.emailAddress}
                                    </Typography>
                                    <ArrowUpRight />
                                </Box>
                                <Button
                                    variant='contained'
                                    sx={{
                                        mt: '20px',
                                        mb: '40px',
                                        fontSize: '14px'
                                    }}
                                    endIcon={<ArrowForward />}
                                >
                                    Contact Information
                                </Button>

                                <Section
                                    heading={
                                        <SectionHeading ml={0} color="#494949" fontSize={"16px"}>
                                            Activities
                                        </SectionHeading>
                                    }
                                    onClick={() => { }}
                                    px={0}
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Container>
    );
}

interface ISkillTypes {
    background: string;
    title: string;
    shortForm?: string;
}
interface ISkillBadgeTypes {
    item: ISkillTypes;
}
const SkillBadge = ({ item }: ISkillBadgeTypes) => {
    return (<Box>
        <Typography
            variant='titleSmallSemiBold'
            sx={{
                color: '#FFFFFF',
                background: item.background,
                borderRadius: '6px',
                padding: '4px 8px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center'
            }}
        >
            {item.title}
            {item.shortForm ?
                <Typography
                    sx={{
                        background: 'rgba(5, 5, 5, 0.4)',
                        padding: '0px 4px',
                        borderRadius: '4px'
                    }}
                    variant='labelLargeBold'
                >
                    {item.shortForm}
                </Typography>
                : null
            }
        </Typography>
    </Box>)
}

const skills = [
    {
        title: 'Adobe XD',
        shortForm: 'T',
        background: '#07AF22'
    },
    {
        title: 'HTML',
        shortForm: 'H',
        background: '#F6C70E'
    },
    {
        title: 'Bubble',
        shortForm: 'B',
        background: '#E75541'
    },
    {
        title: 'Prototyping',
        shortForm: 'A',
        background: '#49B6FF'
    },
    {
        title: 'Figma',
        shortForm: 'F',
        background: '#07AF22'
    },
    {
        title: 'Webflow',
        shortForm: 'W',
        background: '#95C97A'
    },
    {
        title: 'Wireframing',
        background: '#808080'
    }
]
export default ApplicantDetails;
