import { Box } from '@mui/material';
import Header from '../components/JobPost/Header';
import JobPostList from '../components/JobPost/JobPostList';
import { PostJobItem } from '../types/PostJobItem';

const JobPostings = () => {
    const item: PostJobItem = {
        jobTitle: 'Product Designer',
        jobId: 'JF1234567',
        postdate: 'Feb 28, 2004',
        JobRole:
            'We are seeking an experienced and self-motivated product designer to join our team of talented developers and designers on a mission to make our wallet more accessible, simple, and secure.',
        JobSummary: [
            'Exceptional creativity and innovative design skills',
            '5+ years product design experience',
            'Proven experience working with product and engineering teams to ship successful products to users',
            'Experience owning the end-to-end design process, from idea to execution.......'
        ],
        jobDetails: {
            Responsibilities: [
                ' Collaborating with product and engineering to drive product strategy and build the wallet experience',
                ' Owning the end-to-end design journey from ideation, to prototyping, UI/UX, to user testing, to production-ready designs',
                ' Working closely with engineering and product teams to define and iterate on new ideas and features',
                ' Designing UI/UX user flows across all our platforms: iOS, Android, and Web',
                ' Designing UI/UX flows for the full wallet application including visual design, interaction design, and prototyping',
                ' Working closely with engineering and product to define, iterate and execute on new features'
            ],
            location: 'Remote',
            skills: [
                { key: 'Figma', status: 'Expert' },
                { key: 'HTML', status: 'Beginner' },
                { key: 'CSS', status: 'Beginner' }
            ]
        },
        active: true
    };

    const data: PostJobItem[] = Array.from(Array(1).keys()).map(() => item);

    return (
        <Box
            sx={{
                mt: -6,
                marginLeft: '20px'
            }}
        >
            <Header />
            <JobPostList tittle={'Product Designer'} data={data} />
            <JobPostList tittle={'Frontend Developer '} data={data} />
        </Box>
    );
};

export default JobPostings;
