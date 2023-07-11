import { useEffect, useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon';
import JobDetailItemTrashIcon from '../../../../assets/icons/JobDetailItemTrashIcon';
import JobDetailItemFlagIcon from '../../../../assets/icons/JobDetailItemFlagIcon';
import JobDetailItemShareIcon from '../../../../assets/icons/JobDetailItemShareIcon';
import JobDetailItemBookmarkIcon from '../../../../assets/icons/JobDetailItemBookmarkIcon';
import xteraSolutionLogo from '../../../../assets/images/xteraSolutionLogo.png';
import { useNavigate, useParams } from 'react-router-dom';
import ChipList from '../Chips/ChipList';
import { IJobItemDetail } from '../../types/IJobItemDetail';
import ApplyJob from './ApplyJob';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useGetJobById } from '../../../../utils/hooks/api/jobs/useGetJobById';
import { useAuth } from '../../../../utils/context/AuthContext';
import { getJobType, getSalaryRange, getWorkPlace } from '../../../../utils/Helper/helper';
import { useSaveJob } from '../../../../utils/hooks/api/saved-jobs/useSaveJob';
import { useDeleteSavedJob } from '../../../../utils/hooks/api/saved-jobs/useDeleteSavedJob';
import SnackAlert from '../../../../components/Snackbar';
import ExperienceChip from '../ExperienceChip';

interface IApplicantType {
    professionalProfile: {
        id: string;
    }
}
const JobItemDetail = (props: { jobId?: string }) => {
    const { user } = useAuth();
    const { id } = useParams();
    const saveJob = useSaveJob();
    const removeSavedJob = useDeleteSavedJob();
    const [message, setMessage] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [applyjob, setApplyjob] = useState<boolean>(false);
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const { data: job, isFetching } = useGetJobById(id ? id : '', user?.professionalProfile?.id ?? "", true);

    const onHideJob = (e: any) => {
        setApplyjob(false);

    };

    const toggleSaveJob = () => {
        if (!isSaved) {
            let data = {
                jobPostingId: job.id ?? '',
                professionalProfileId: user?.professionalProfile?.id ?? ''
            }
            saveJob.mutate(data, {
                onSuccess: (res) => {
                    if (res?.id) {
                        console.log('saveJob', res)
                        setIsSaved(true);
                        setType('success');
                        setMessage("Job saved successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log('err', err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        } else {
            removeSavedJob.mutate(job?.savedJobId, {
                onSuccess: (res) => {
                    if (res) {
                        console.log('saveJob', res)
                        setIsSaved(false);
                        setType('success');
                        setMessage("Job removed successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log('err', err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        }
    }

    useEffect(() => {
        setIsSaved(job?.isSaved);
    }, [job?.isSaved])

    const jobItem: IJobItemDetail = {
        companyDescription:
            'Carry1st is the leading publisher of social games and interactive content in Africa. We work with studios across the globe – from Addis Ababa to Sofia to New York City – to level up their games and scale in dynamic, frontier markets. In addition to our full-stack publishing service, we’ve built a proprietary payments and ecommerce experience which allows customers to pay for digital content, even when they don’t have a credit card.',
        heading: 'Product Designer',
        jfScore: 550,
        jobTitle: 'Illustrator & Graphic Designer',
        location: 'Lagos (Remote)',
        department: 'Growth',
        jobDescriptions: [
            'As an illustrator & graphic designer you will be responsible for creating engaging graphics and original pieces of artwork for our growing portfolio of games.',
            'You will work in close collaboration with our Lead Animator, LiveOps Manager, Creative Marketing and Shop team – using your creative flair for design to translate briefs into high-quality, engaging designs.',
            'Our graphics should capture the attention of those who see them communicate the right message.'
        ],
        responsibilities: [
            'Take ownership of and co-create creative design briefs tied to marketing campaigns',
            'Design compelling assets geared towards meeting and achieving project goals',
            'Work with Creative Lead to both conceptualize and iterate compositions for deployment',
            'Collaborate with internal and external editors and marketers to deliver high quality designs under ambitious timelines'
        ],
        candidatureQualities: [
            'Proficiency in Adobe Creative Suite. +2 years experience in Graphic Design and / or Illustration',
            'A creative flair and a strong ability to translate requirements into design',
            'Knowledge of layout and typography',
            'Attentive to design feedback, with the ability to quickly iterate to match the creative direction',
            'Bonus: a love of or desire to work in mobile gaming'
        ],
        workingAt: [
            'Build awesome, industry-changing products, every day',
            'Grow with a VC-backed startup at the intersection of gaming, fintech, and web3',
            'Work from anywhere in the world with international teammates',
            'Own shares in the Company – enabling you to benefit from the value you create'
        ],
        additionalPerks: [
            'Co-working excursions: Travel to meet your colleagues in cities around the world',
            'Awesome equipment: Get everything you need to work effectively',
            'Remote working allowance: Put an additional $600 / year to optimise your WFH experience',
            'Learning and development: Attend courses, conferences and training events',
            'Social events: Participate in regular company events to relax and connect with teammates',
            'Birthday leave: Enjoy a paid day off on your special day.'
        ],
        expiredAt: 'Not Specified!',
        aboutCompany: {
            name: 'Xtera Solution',
            address: '450 Belmont Ave, North Jersey ',
            logo: xteraSolutionLogo,
            industry: 'Entertainment',
            numberOfEmployees: '11-50',
            employeesOnJF: 12,
            keywords: [
                { name: 'Job Security', type: 'X' },
                { name: 'Work Schedule', type: 'T' },
                {
                    name: 'Salary and Benefits',
                    type: 'B'
                },
                {
                    name: 'Office Environment',
                    type: 'A'
                }
            ],
            descriptions: [
                'Carry1st is the leading publisher of social games and interactive content in Africa. We work with studios across the globe - from Addis Ababa to Sofia to New York City - to level up their games and scale them in dynamic, new markets. To serve our customers in Africa, we’ve built out a proprietary payments and ecommerce experience which gives our users the ability to pay for digital content, even when they don’t have a credit card.',
                'Our team is as diverse as our partners - hailing from 14 countries and companies like King, Rovio, War gaming, The Carlyle Group and Morgan Stanley. We’re a passionate, international team that works hard and has a sense of humor. We value originality of thinking, thoughtfulness and courage. Carry1st is a fully remote, distributed company and we are looking for the best people to join us as we rapidly innovate and scale.'
            ]
        }
    };

    const actionItems = [
        {
            id: 1,
            label: 'Hide',
            onClick: () => { },
            icon: <JobDetailItemTrashIcon />
        },
        {
            id: 2,
            label: 'Flag',
            onClick: () => { },
            icon: <JobDetailItemFlagIcon />
        },
        {
            id: 3,
            label: 'Share',
            onClick: () => { },
            icon: <JobDetailItemShareIcon />
        },
        {
            id: 4,
            label: 'Save',
            onClick: toggleSaveJob,
            icon: isSaved ? <BookmarkIcon style={{ color: '#FFC24C' }} /> : <JobDetailItemBookmarkIcon />,
        }
    ];

    const JobDetailHeader = (props: { jobItem: IJobItemDetail }) => {
        const navigate = useNavigate();
        return (
            <>
                <Box
                    sx={{
                        p: '24px 40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                            gap: 4
                        }}
                    >
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowLeftIcon />
                        </IconButton>
                        <Typography
                            variant="headlineMediumSemiBold"
                            color="#23282B"
                            sx={{ mt: 0.5 }}
                        >
                            {job?.title}
                        </Typography>
                    </Box>
                    {job?.applicants &&
                        job?.applicants.filter(
                            (applicant: IApplicantType) =>
                                applicant?.professionalProfile.id ===
                                user?.professionalProfile?.id
                        ).length > 0 ? (
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2.5
                            }}
                        >
                            <Button
                                disabled={true}
                                variant="contained"
                                sx={{
                                    py: 1.5,
                                    px: 7,
                                    backgroundColor: '#EDEDED',
                                    color: '#808080'
                                }}
                            >
                                Applied
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2.5
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{ py: 1.5, px: 7 }}
                                onClick={() => {
                                    setApplyjob(true);
                                }}
                            >
                                Apply
                            </Button>
                        </Box>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: '12px 40px',
                        backgroundColor: '#F2F2F2'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        <Box>
                            <img
                                height={80}
                                width={80}
                                style={{ borderRadius: '100px' }}
                                src={job?.company?.logo}
                                alt={'company logo'}
                            />
                        </Box>

                        <Box
                            sx={{
                                gap: '8px',
                                display: 'flex',
                                alignSelf: 'start',
                                flexDirection: 'column'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Typography
                                    variant="titleLargeSemiBold"
                                    color="#23282B"
                                >
                                    {job?.company?.name}
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#49B6FF',
                                        p: '0 12px',
                                        borderRadius: '6px',
                                        mt: 0.25
                                    }}
                                >
                                    <Typography
                                        variant="titleLargeSemiBold"
                                        color="white"
                                    >
                                        {550}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant="labelLargeRegular"
                                color="#808080"
                            >
                                Job ID: {job.id}
                            </Typography>
                            <Typography
                                variant="labelLargeRegular"
                                color="#808080"
                            >
                                {job?.company?.yearFounded}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '36px' }}>
                        {actionItems.map((item) => {
                            return (
                                <>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column'
                                        }}
                                        onClick={item.onClick}
                                    >
                                        <IconButton>{item.icon}</IconButton>
                                        <Typography
                                            variant="bodyMediumSemiBold"
                                            color="#808080"
                                        >
                                            {item.label}
                                        </Typography>
                                    </Box >
                                </>
                            );
                        })}
                    </Box >
                </Box >
            </>
        );
    };

    const JobDescription = () => {
        return (
            <Box sx={{ p: '40px', pt: '20px' }}>
                <Box
                    sx={{ mb: '16px' }}
                >
                    <Typography variant="titleLargeSemiBold" color="#23282B" component={'div'}>
                        Job overview
                    </Typography>
                    <Typography variant="bodyLargeRegular" color="#808080" mt={3} component={'div'}>
                        {job?.overview}
                    </Typography>
                </Box>
                <Typography variant="bodyLargeSemiBold" color="#23282B" component={'div'}>
                    Job Title: &nbsp;
                    <Typography color="#808080" component={'span'}>
                        {job?.title}
                    </Typography>
                </Typography>
                <Typography variant="bodyLargeSemiBold" mt={'20px'} color="#23282B" component={'div'}>
                    Workplace type: &nbsp;
                    <Typography color="#808080" component={'span'}>
                        {getWorkPlace(job?.workplaceType)}
                    </Typography>
                </Typography>
                <Typography variant="bodyLargeSemiBold" mt={'20px'} color="#23282B" component={'div'}>
                    Job location: &nbsp;
                    <Typography color="#808080" component={'span'}>
                        {job?.location}
                    </Typography>
                </Typography>
                <Typography variant="bodyLargeSemiBold" mt={'20px'} color="#23282B" component={'div'}>
                    Years of experience: &nbsp;
                    <Typography color="#808080" component={'span'}>
                        {job?.yearsOfExperience} {(job?.yearsOfExperience && Number(job?.yearsOfExperience) > 1) ? 'years' : 'year'}
                    </Typography>
                </Typography>
                <Typography variant="bodyLargeSemiBold" mt={'20px'} color="#23282B" component={'div'}>
                    Salary range: &nbsp;
                    <Typography color="#808080" component={'span'}>
                        {job?.salaryCurrency} {job?.salaryRangeFrom} - {job?.salaryCurrency} {job?.salaryRangeTo} per month
                    </Typography>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        mt: '20px'
                    }}
                >
                    <Typography variant="bodyLargeSemiBold" color="#23282B" component={'div'}>
                        Minimum jobfactor score:
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: '#49B6FF',
                            p: '0px 12px',
                            borderRadius: '6px',
                        }}
                    >
                        <Typography
                            variant="titleLargeSemiBold"
                            color="white"
                        >
                            {job.minimumScore}
                        </Typography>
                    </Box>
                </Box>
                <JobDescriptionSection
                    title="Responsibilities"
                    bulletPoints={job.responsibilities?.split('\n')}
                />
                <JobDescriptionSection
                    title="Qualifications"
                    bulletPoints={job.qualifications?.split('\n')}
                />
                <JobDescriptionSection
                    title={`More `}
                    bulletPoints={job.additionalNote?.split('\n')}
                />

                <Box sx={{ marginTop: '28px' }}>
                    <Typography
                        variant='titleLargeSemiBold'
                    >
                        Required skills and competency levels
                    </Typography>
                    <Box
                        sx={{
                            mt: '24px',
                            gap: '12px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >

                        {job?.skills?.map((item: any) => <ExperienceChip item={item} coloredBg={false} />)}
                    </Box>
                </Box>
            </Box >
        );
    };

    const JobDescriptionSection = (props: {
        title: string;
        bulletPoints: string[];
    }) => {
        const { title, bulletPoints = [] } = props;
        return (
            <Box
                sx={{
                    display: 'flex',
                    mt: '30px',
                    flexDirection: 'column',
                    gap: 0.75
                }}
            >
                <Typography
                    variant="titleLargeSemiBold"
                    color="#23282B"
                >
                    {title}
                </Typography>
                <ul style={{ color: '#808080', fontSize: '16px', marginTop: '32px' }}>
                    {bulletPoints?.map((item: string) => item ? <li key={`item_${item}`} >{item}</li> : null)}
                </ul>
            </Box>
        );
    };

    const JobItemAboutCompany = (props: { jobItem: IJobItemDetail }) => {
        const { jobItem } = props;
        return (
            <Box sx={{ p: '16px 40px 32px' }}>
                <Typography variant="titleLargeSemiBold" color="#23282B">
                    About the Company
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        <Box>
                            <img
                                height={80}
                                width={80}
                                style={{ borderRadius: '100px' }}
                                src={job?.company?.logo}
                                alt={'company logo'}
                            />
                        </Box>

                        <Box
                            sx={{
                                gap: '8px',
                                display: 'flex',
                                alignSelf: 'start',
                                flexDirection: 'column'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Typography
                                    variant="titleLargeSemiBold"
                                    color="#23282B"
                                >
                                    {job?.company?.name}
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#49B6FF',
                                        p: '0 12px',
                                        borderRadius: '6px',
                                        mt: 0.25
                                    }}
                                >
                                    <Typography
                                        variant="titleLargeSemiBold"
                                        color="white"
                                    >
                                        {550}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant="labelLargeRegular"
                                color="#808080"
                            >
                                Job ID: {job.id}
                            </Typography>
                            <Typography
                                variant="labelLargeRegular"
                                color="#808080"
                            >
                                {job?.company?.yearFounded}
                            </Typography>
                        </Box>
                    </Box>
                    {/* <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Typography variant="titleLargeSemiBold">
                            {jobItem.aboutCompany.industry}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}
                        >
                            <svg
                                width="6"
                                height="6"
                                viewBox="0 0 6 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="3" cy="3" r="3" fill="#494949" />
                            </svg>

                            <Typography variant="titleLargeSemiBold">
                                {jobItem.aboutCompany.numberOfEmployees}{' '}
                                employees
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                ml: 0.5
                            }}
                        >
                            <svg
                                width="6"
                                height="6"
                                viewBox="0 0 6 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="3" cy="3" r="3" fill="#494949" />
                            </svg>

                            <Typography variant="titleLargeSemiBold">
                                {jobItem.aboutCompany.employeesOnJF} on
                                JobFactor
                            </Typography>
                        </Box>
                    </Box> */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            mt: '26px'
                        }}
                    >
                        <Typography
                            variant='titleMediumSemiBold'
                            color={'#808080'}
                        >
                            Entertainment
                        </Typography>
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '100px',
                                backgroundColor: '#494949',
                            }}
                        />
                        <Typography
                            variant='titleMediumSemiBold'
                            color={'#808080'}
                        >
                            {job?.company?.companySize ?? 0} employees
                        </Typography>
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '100px',
                                backgroundColor: '#494949',
                            }}
                        />
                        <Typography
                            variant='titleMediumSemiBold'
                            color={'#808080'}
                        >
                            12 on Jobfactor
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: '16px',
                            mb: '16px',
                            gap: '12px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {benefits.map(item => <ExperienceChip item={item} />)}
                    </Box>
                    <Typography
                        color={'#808080'}
                        variant='titleMediumRegular'
                    >
                        {job?.company?.bio}
                    </Typography>
                </Box>
            </Box>
        );
    };

    const JobItemSectionHR = (props: { height: string }) => {
        const { height } = props;
        return <Box sx={{ height: height, backgroundColor: '#EDEDED' }} />;
    };

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                mt: -6,
                ml: 2
            }}
        >
            {isFetching ? (
                null
            ) : (
                <>
                    <JobDetailHeader jobItem={jobItem} />
                    <JobDescription />
                    <JobItemSectionHR height={'20px'} />
                    <JobItemAboutCompany jobItem={jobItem} />
                    <ApplyJob
                        jobId={id ?? ''}
                        showModal={applyjob}
                        hideModal={(e) => {
                            onHideJob(e);
                        }}
                        queryKey="retrieve-job"
                        companyName={job.company.name}
                    />
                </>
            )}
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </Box>
    );
};

const benefits = [
    {
        name: 'Salary and benefits',
        competencyLevel: 1
    },
    {
        name: 'Work schedule',
        competencyLevel: 2
    },
    {
        name: 'Office environment',
        competencyLevel: 3
    },
    {
        name: 'Job security',
        competencyLevel: 4
    }
]

export default JobItemDetail;
