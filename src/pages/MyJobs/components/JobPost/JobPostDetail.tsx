import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetJobById } from '../../../../utils/hooks/api/jobs/useGetJobById';
import { getJobType, getWorkPlace } from '../../../../utils/Helper/helper';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon';
import moment from 'moment';
import ExperienceChip from '../ExperienceChip';
import { useEffect } from 'react';

const JobPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: jobDetails, isFetching, refetch } = useGetJobById(id ?? '', '');

    useEffect(() => {
        refetch();
    }, [id])

    return (
        <>
            {isFetching ? (
                null
            ) : (
                <Box
                    sx={{
                        marginLeft: '35px',
                        marginRight: '40px',
                        mt: -6,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            backgroundColor: '#fff',
                            padding: '24px 40px',
                            borderBottom: '1px solid #D9D9D9'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}
                        >
                            <IconButton
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                <ArrowLeftIcon />
                            </IconButton>
                            <Typography
                                variant='titleLargeBold'
                                sx={{
                                    textTransform: 'capitalize',
                                    color: '#23282B'
                                }}
                            >
                                {jobDetails?.title}
                            </Typography>
                        </Box>
                        <Button
                            variant='contained'
                            sx={{
                                color: '#FFF',
                                borderRadius: '8px',
                                backgroundColor: '#05668D',
                                padding: '14px 48px',
                                fontSize: '14px',
                                border: '1px solid #05668D',
                                fontFamily: 'Open Sans',
                                width: 'auto',
                                fontWeight: '600',
                                textTransform: 'capitalize'
                            }}
                            onClick={() => navigate(`applicants`)}
                        >
                            View applicants
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            pl: '40px',
                            pr: '40px',
                            pt: '20px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pb: '36px'
                            }}
                        >
                            <Box
                                sx={{
                                    gap: '32px',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                >
                                    <img
                                        alt='logo'
                                        src={jobDetails?.company?.logo}
                                        style={{
                                            maxWidth: '80px',
                                            maxHeight: '80px',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                    <Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            }}
                                        >
                                            <Typography
                                                variant='titleLargeSemiBold'
                                                component={'p'}
                                            >
                                                {jobDetails?.company?.name}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    borderRadius: '6px',
                                                    padding: '0px 12px',
                                                    backgroundColor: '#49B6FF'
                                                }}
                                            >
                                                <Typography
                                                    variant='titleLargeSemiBold'
                                                    sx={{
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    {jobDetails?.minimumScore}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            variant='titleSmallRegular'
                                            sx={{
                                                color: '#808080',
                                                mt: '3px',
                                                mb: '3px'
                                            }}
                                            component={'p'}
                                        >
                                            {jobDetails?.id}
                                        </Typography>
                                        <Typography
                                            variant='titleSmallRegular'
                                            sx={{
                                                color: '#808080'
                                            }}
                                            component={'p'}
                                        >
                                            {jobDetails?.company?.yearFounded ? moment(jobDetails?.company?.yearFounded).format('MMM DD, YYYY') : null}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button
                                    variant='contained'
                                    sx={{
                                        color: '#05668D',
                                        borderRadius: '8px',
                                        background: '#fcfbf8',
                                        padding: '14px 48px',
                                        fontSize: '14px',
                                        border: '1px solid #05668D',
                                        fontFamily: 'Open Sans',
                                        width: 'auto',
                                        fontWeight: '600',
                                        textTransform: 'capitalize'
                                    }}
                                    onClick={() => navigate('/new-jobpost', { state: { id: jobDetails?.id } })}
                                >
                                    Edit Job posting
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                mt: '16px',
                            }}
                        >
                            <Typography
                                variant='headlineSmallSemiBold'
                            >
                                Job overview
                            </Typography>
                            <Typography
                                variant='titleMediumRegular'
                                sx={{
                                    color: '#808080',
                                    mt: '32px'
                                }}
                                component={'p'}
                            >
                                {jobDetails?.overview}
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '24px' }}>
                            <Typography
                                variant='titleMediumSemiBold'
                                color={'#23282B'}
                            >
                                We're Recruiting to fill the position below
                            </Typography>
                            <Typography
                                variant='titleMediumSemiBold'
                                component={'p'}
                                mt={'20px'}
                                color={'#23282B'}
                            >
                                Job Title: &nbsp;
                                <Typography
                                    variant='titleMediumRegular'
                                    color={'#808080'}
                                >
                                    {jobDetails?.title}
                                </Typography>
                            </Typography>
                            <Typography
                                variant='titleMediumSemiBold'
                                component={'p'}
                                mt={'20px'}
                                color={'#23282B'}
                            >
                                Location: &nbsp;
                                <Typography
                                    variant='titleMediumRegular'
                                    color={'#808080'}
                                >
                                    {jobDetails?.location} ({getWorkPlace(jobDetails?.workplaceType)})
                                </Typography>
                            </Typography>
                            <Typography
                                variant='titleMediumSemiBold'
                                component={'p'}
                                mt={'20px'}
                                color={'#23282B'}
                            >
                                Employment Type: &nbsp;
                                <Typography
                                    variant='titleMediumRegular'
                                    color={'#808080'}
                                >
                                    {getJobType(jobDetails?.jobType)}
                                </Typography>
                            </Typography>
                            <Typography
                                variant='titleMediumSemiBold'
                                component={'p'}
                                mt={'20px'}
                                color={'#23282B'}
                            >
                                Department: &nbsp;
                                <Typography
                                    variant='titleMediumRegular'
                                    color={'#808080'}
                                >
                                    {getJobType(jobDetails?.jobType)}
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '40px' }}>
                            <Typography
                                variant='headlineSmallSemiBold'
                            >
                                Responsibilities
                            </Typography>
                            <ul style={{ color: '#808080', fontSize: '16px', marginTop: '32px' }}>
                                {jobDetails?.responsibilities?.split('\n')?.map((item: string) => item ? <li key={`item_${item}`} >{item}</li> : null)}
                            </ul>
                        </Box>
                        <Box sx={{ marginTop: '24px' }}>
                            <Typography
                                variant='headlineSmallSemiBold'
                            >
                                Qualifications
                            </Typography>
                            <ul style={{ color: '#808080', fontSize: '16px', marginTop: '32px' }}>
                                {jobDetails?.qualifications?.split('\n')?.map((item: string) => item ? <li key={`item_${item}`} >{item}</li> : null)}
                            </ul>
                        </Box>
                        {jobDetails?.additionalNote ?
                            <Box sx={{ marginTop: '24px' }}>
                                <Typography
                                    variant='headlineSmallSemiBold'
                                >
                                    More:
                                </Typography>
                                <ul style={{ color: '#808080', fontSize: '16px', marginTop: '32px' }}>
                                    {jobDetails?.additionalNote?.split('\n')?.map((item: string) => item ? <li key={`item_${item}`} >{item}</li> : null)}
                                </ul>
                            </Box>
                            : null
                        }
                        <Box sx={{ marginTop: '24px' }}>
                            <Typography
                                variant='titleLargeSemiBold'
                            >
                                Required Skills and competency level:
                            </Typography>
                            <Box
                                sx={{
                                    mt: '24px',
                                    gap: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >

                                {jobDetails?.skills?.map((item: any) => <ExperienceChip item={item} />)}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                marginTop: '48px'
                            }}
                        >
                            <Typography
                                variant='headlineSmallSemiBold'
                            >
                                About the company
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    mt: '20px'
                                }}
                            >
                                <img
                                    alt='logo'
                                    src={jobDetails?.company?.logo}
                                    style={{
                                        maxWidth: '80px',
                                        maxHeight: '80px',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        <Typography
                                            variant='titleLargeSemiBold'
                                            component={'p'}
                                        >
                                            {jobDetails?.company?.name}
                                        </Typography>
                                        <Box
                                            sx={{
                                                borderRadius: '6px',
                                                padding: '0px 12px',
                                                backgroundColor: '#49B6FF'
                                            }}
                                        >
                                            <Typography
                                                variant='titleLargeSemiBold'
                                                sx={{
                                                    color: '#FFF'
                                                }}
                                            >
                                                {jobDetails?.minimumScore}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant='titleMediumRegular'
                                        sx={{
                                            color: '#808080',
                                            mt: '5px',
                                        }}
                                        component={'p'}
                                    >
                                        450 Belmont Ave, North Jersey
                                    </Typography>
                                </Box>
                            </Box>
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
                                >
                                    {jobDetails?.company?.companySize ?? 0} employees
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
                                {benefits.map(item => <ExperienceChip item={item} coloredBg={false}/>)}                                   
                            </Box>

                            <Typography
                                color={'#808080'}
                                variant='titleMediumRegular'
                            >
                                {jobDetails?.company?.bio}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
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
export default JobPostDetail;
