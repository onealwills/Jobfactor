import React, { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon';
import JobDetailItemTrashIcon from '../../../../assets/icons/JobDetailItemTrashIcon';
import JobDetailItemFlagIcon from '../../../../assets/icons/JobDetailItemFlagIcon';
import JobDetailItemShareIcon from '../../../../assets/icons/JobDetailItemShareIcon';
import JobDetailItemBookmarkIcon from '../../../../assets/icons/JobDetailItemBookmarkIcon';
import xteraSolutionLogo from '../../../../assets/images/xteraSolutionLogo.png';
import { useNavigate } from 'react-router-dom';
import ChipList from '../Chips/ChipList';
import { IJobItemDetail } from '../../types/IJobItemDetail';
import ApplyJob from './ApplyJob';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const JobItemDetail = (props: { jobId?: string }) => {

    const [applyjob, setApplyjob] = useState<boolean>(false);
    const [alreadyapply, setAlreadyApply] = useState<boolean>(false);
    const [selectedaction, setSelectedAction] = useState<any>([]);

    const onHideJob = (e: any) => {
        setApplyjob(false)
        if (e === 'submit') {
            setAlreadyApply(true)
        }
    }

    const jobItem: IJobItemDetail = {
        companyDescription:
            'Carry1st is the leading publisher of social games and interactive content in Africa. We work with studios across the globe – from Addis Ababa to Sofia to New York City – to level up their games and scale in dynamic, frontier markets. In addition to our full-stack publishing service, we’ve built a proprietary payments and ecommerce experience which allows customers to pay for digital content, even when they don’t have a credit card.',
        heading: 'Product Designer',
        jfScore: 550,
        jobTitle: 'Illustrator & Graphic Designer',
        location: 'Lagos (Remote)',
        employmentType: 'Full time',
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
        applicationClosingDate: 'Not Specified!',
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
            icon: JobDetailItemTrashIcon,
            coloricon: BookmarkIcon,

        },
        {
            id: 2,
            label: 'Flag',
            icon: JobDetailItemFlagIcon,
            coloricon: BookmarkIcon,
        },
        {
            id: 3,
            label: 'Share',
            icon: JobDetailItemShareIcon,
            coloricon: BookmarkIcon,

        },
        {
            id: 4,
            label: 'Save',
            icon: JobDetailItemBookmarkIcon,
            coloricon: BookmarkIcon,
        }
    ];

    const JobDetailHeader = (props: { jobItem: IJobItemDetail }) => {
        const { jobItem } = props;
        const navigate = useNavigate();
        return (
            <>
                <Box
                    sx={{
                        p: 4,
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
                            {jobItem.heading}
                        </Typography>
                    </Box>
                    {!alreadyapply ?
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2.5
                            }}
                        >
                            <Button variant="contained" sx={{ py: 1.5, px: 7 }} onClick={() => { setApplyjob(true) }}>
                                Apply
                            </Button>
                        </Box>
                        :
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2.5
                            }}
                        >
                            <Button disabled={true} variant="contained" sx={{ py: 1.5, px: 7, backgroundColor: '#EDEDED', color: '#808080' }}>
                                Applied
                            </Button>
                        </Box>
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 4,
                        pt: 0
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box>
                            <img
                                height={80}
                                width={80}
                                src={jobItem.aboutCompany.logo}
                                alt={'company logo'}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                    {jobItem.aboutCompany.name}
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#49B6FF',
                                        px: 1.5,
                                        py: 0.125,
                                        borderRadius: '6px',
                                        mt: 0.25
                                    }}
                                >
                                    <Typography
                                        variant="titleLargeSemiBold"
                                        color="white"
                                    >
                                        {jobItem.jfScore}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="bodyLargeRegular" color="#808080">
                                {jobItem.aboutCompany.address}
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
                                            flexDirection: 'column'
                                        }}
                                        onClick={() => {
                                            if (selectedaction?.includes(item?.id)) {
                                                let filter = selectedaction?.filter((x: any) => x != item?.id)
                                                setSelectedAction(filter)
                                            }
                                            else {
                                                setSelectedAction([...selectedaction, item?.id])
                                            }
                                        }}
                                    >
                                        <IconButton>
                                            {selectedaction?.includes(item?.id) ?
                                                <item.coloricon style={{color:'#FFC24C'}} />
                                                :
                                                <item.icon />

                                            }
                                        </IconButton>
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
                    </Box>
                </Box >
            </>
        );
    };

    const JobDescription = (props: { jobItem: IJobItemDetail }) => {
        const { jobItem } = props;
        return (
            <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                    <Typography variant="titleLargeBold" color="#23282B">
                        Job Description
                    </Typography>
                    <Typography variant="bodyLargeRegular" color="#808080">
                        {jobItem.companyDescription}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 3.5,
                        flexDirection: 'column',
                        gap: 3.5
                    }}
                >
                    <Typography variant="bodyLargeSemiBold" color="#808080">
                        We are Recruiting to Fill The Position Below
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="bodyLargeSemiBold" color="#808080">
                            Job Title:
                        </Typography>
                        <Typography variant="bodyLargeRegular" color="#808080">
                            {jobItem.jobTitle}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 3.5,
                        flexDirection: 'column',
                        gap: 3.5
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="bodyLargeSemiBold" color="#808080">
                            Location:
                        </Typography>
                        <Typography variant="bodyLargeRegular" color="#808080">
                            {jobItem.location}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 3.5,
                        flexDirection: 'column',
                        gap: 3.5
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="bodyLargeSemiBold" color="#808080">
                            Employment Type:
                        </Typography>
                        <Typography variant="bodyLargeRegular" color="#808080">
                            {jobItem.employmentType}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 3.5,
                        flexDirection: 'column',
                        gap: 3.5
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="bodyLargeSemiBold" color="#808080">
                            Department:
                        </Typography>
                        <Typography variant="bodyLargeRegular" color="#808080">
                            {jobItem.department}
                        </Typography>
                    </Box>
                </Box>
                <JobDescriptionSection
                    title="Job Description"
                    bulletPoints={jobItem.jobDescriptions}
                />
                <JobDescriptionSection
                    title="You will..."
                    bulletPoints={jobItem.responsibilities}
                />
                <JobDescriptionSection
                    title="What makes you a great candidate"
                    bulletPoints={jobItem.candidatureQualities}
                />
                <JobDescriptionSection
                    title={`What will it be like to work at ${jobItem.aboutCompany.name} ?`}
                    bulletPoints={jobItem.workingAt}
                />
                <JobDescriptionSection
                    title="Some additional perks..."
                    bulletPoints={jobItem.additionalPerks}
                />
                <Box
                    sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                    <Typography variant="bodyLargeRegular" color="#808080">
                        Application Closing Date:{' '}
                    </Typography>
                    <Typography variant="bodyLargeRegular" color="#808080">
                        {jobItem.applicationClosingDate}
                    </Typography>
                    <Typography variant="bodyLargeRegular" color="#808080">
                        Don't Keep! Kindly Share.
                    </Typography>
                </Box>
            </Box>
        );
    };

    const JobDescriptionSection = (props: {
        title: string;
        bulletPoints: string[];
    }) => {
        const { title, bulletPoints } = props;
        return (
            <Box
                sx={{
                    display: 'flex',
                    mt: 3.5,
                    flexDirection: 'column',
                    gap: 0.75
                }}
            >
                <Typography
                    variant="bodyLargeSemiBold"
                    color="black"
                    sx={{ textDecoration: 'underline' }}
                >
                    {title}
                </Typography>
                <Box>
                    {bulletPoints.map((bulletPoint: string) => (
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center'
                            }}
                        >
                            <Box sx={{ mt: 0.25, ml: 0.5 }}>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="3.5" fill="#808080" />
                                </svg>
                            </Box>
                            <Typography
                                sx={{ mt: 0.5 }}
                                variant="bodyLargeRegular"
                                color="#808080"
                            >
                                {bulletPoint}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    };

    const JobItemAboutCompany = (props: { jobItem: IJobItemDetail }) => {
        const { jobItem } = props;
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="titleLargeBold" color="#23282B">
                    About the Company
                </Typography>
                <Box sx={{ mt: 2 }} />
                <JobItemSectionHR height={'2px'} />
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Box>
                                <img
                                    height={80}
                                    width={80}
                                    src={jobItem.aboutCompany.logo}
                                    alt={'company logo'}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                        {jobItem.aboutCompany.name}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="bodyLargeRegular"
                                    color="#808080"
                                >
                                    {jobItem.aboutCompany.address}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{ px: 5, py: 1 }}>
                                Follow <Box sx={{ mr: 1 }} />
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
                                        fill="#05668D"
                                    />
                                    <path
                                        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
                                        fill="#05668D"
                                    />
                                </svg>
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Typography variant="titleLargeSemiBold">
                            {jobItem.aboutCompany.industry}
                        </Typography>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
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
                                {jobItem.aboutCompany.numberOfEmployees} employees
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
                                {jobItem.aboutCompany.employeesOnJF} on JobFactor
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <ChipList
                            chipsData={jobItem.aboutCompany.keywords}
                            displayAll={true}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="bodyLargeRegular" color="#494949">
                            {jobItem.aboutCompany.descriptions.map(
                                (description: string) => (
                                    <Box sx={{ mb: 2 }}> {description}</Box>
                                )
                            )}
                        </Typography>
                    </Box>
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
            <JobDetailHeader jobItem={jobItem} />
            <JobItemSectionHR height={'1px'} />
            <JobDescription jobItem={jobItem} />
            <JobItemSectionHR height={'1px'} />
            <JobItemAboutCompany jobItem={jobItem} />
            <ApplyJob showmoadl={applyjob} Hidemodal={(e) => { onHideJob(e) }} />
        </Box>
    );
};

export default JobItemDetail;
