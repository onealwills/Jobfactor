import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useGetJobById } from '../../../../utils/hooks/api/jobs/useGetJobById';
import { getCompetencyColor, getJobType, getWorkPlace, skillLevel } from '../../../../utils/Helper/helper';

const JobPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: jobDetails, isFetching } = useGetJobById(id ?? '','');

    return (
        <>
            {isFetching ? (
                null
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: '#fff',
                        mb: 4,
                        marginLeft: '20px',
                        mt: -6,
                        padding: '40px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}
                        >
                            <Box
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                <ArrowBackOutlinedIcon />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        color: '#23282B'
                                    }}
                                >
                                    {jobDetails?.title}
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            variant='contained'
                            sx={{
                                color: '#05668D',
                                borderRadius: '4px',
                                background: '#fcfbf8',
                                padding: '14px 48px',
                                fontSize: '14px',
                                border: '1px solid #05668D',
                                fontFamily: 'Open Sans',
                                width: 'auto',
                                fontWeight: '700',
                                textTransform: 'capitalize'
                            }}
                            onClick={() => navigate('/new-jobpost', { state: { id: jobDetails?.id } })}
                        >
                            Edit Job posting  
                        </Button>
                    </Box>
                    {/* <Typography
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            marginTop: '8px'
                        }}
                    >
                        Job ID : {jobDetails?.id}
                        Job Description
                    </Typography>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: jobDetails?.description
                        }}
                    /> */}
                    <Box sx={{ marginTop: '30px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            Job Overview
                        </Typography>
                        <Typography
                            sx={{
                                color: '#808080',
                                fontSize: '16px',
                                marginTop: '10px'
                            }}
                        >
                            <div
                        dangerouslySetInnerHTML={{
                            __html: jobDetails?.overview
                        }}
                    />
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            We're Recruiting to fill the position below
                        </Typography>
                        <Typography
                            sx={{
                                color: '#808080',
                                fontSize: '16px',
                                marginTop: '10px'
                            }}
                        >
                            <p>Job Title: {jobDetails?.title}</p>
                            <p>Location: {jobDetails?.location} ({getWorkPlace(jobDetails?.workplaceType)})</p>
                            <p>Employment Type: {getJobType(jobDetails?.jobType)} </p>
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            Responsibilities
                        </Typography>
                        <ul style={{ color: '#808080', fontSize: '16px' }}>
                            <li>{jobDetails?.responsibilities}</li>
                        </ul>
                    </Box>
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            Qualifications
                        </Typography>
                        <ul style={{ color: '#808080', fontSize: '16px' }}>
                            <li>{jobDetails?.qualifications}</li>
                        </ul>
                    </Box>                    
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            More:
                        </Typography>
                        <Typography
                            sx={{
                                color: '#808080',
                                fontSize: '16px',
                                marginTop: '15px'
                            }}
                        >
                            {jobDetails?.additionalNote}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            sx={{
                                color: '#23282B',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                        >
                            Required Skills and competency level:
                        </Typography>
                        <ul style={{ color: '#808080', fontSize: '16px' }}>
                            {jobDetails?.skills?.map((item: any) => {
                                return (
                                    <li>
                                        {item?.name} {' - '}{' '}
                                        <span
                                            style={{
                                                color: getCompetencyColor(
                                                    item?.competencyLevel ?? 0
                                                )
                                            }}
                                        >
                                            {skillLevel.filter(x => x.level === item?.competencyLevel)[0].name}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Box>

                    <Box
                        sx={{
                            marginTop: '30px'
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => navigate(`applicants`)}
                            sx={{
                                padding: '15px 20px',
                                width: 'fit-content',
                                minWidth: '240px'
                            }}
                        >
                            Check Applications
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default JobPostDetail;
