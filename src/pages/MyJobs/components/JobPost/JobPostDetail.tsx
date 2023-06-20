import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useGetJobById } from '../../../../utils/hooks/api/jobs/useGetJobById';

const JobPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: jobDetails, isFetching } = useGetJobById(id ?? '');

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
                    <Typography
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            marginTop: '8px'
                        }}
                    >
                        Job ID : {jobDetails?.id}
                    </Typography>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: jobDetails?.description
                        }}
                    />
                    {/* <Box sx={{ marginTop: '30px' }}>
                <Typography
                    sx={{
                        color: '#23282B',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                >
                    About the role
                </Typography>
                <Typography
                    sx={{
                        color: '#808080',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}
                >
                    {jobDetails?.JobRole}
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
                    Summary of the role
                </Typography>
                <ul style={{ color: '#808080', fontSize: '16px' }}>
                    {jobDetails?.JobSummary?.map((item: string[]) => {
                        return <li>{item}</li>;
                    })}
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
                    Responsibilities
                </Typography>
                <ul style={{ color: '#808080', fontSize: '16px' }}>
                    {jobDetails?.jobDetails?.Responsibilities?.map(
                        (item: string[]) => {
                            return <li>{item}</li>;
                        }
                    )}
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
                    Location:
                </Typography>
                <Typography
                    sx={{
                        color: '#808080',
                        fontSize: '16px',
                        marginTop: '15px'
                    }}
                >
                    {jobDetails?.jobDetails?.location}
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
                    {jobDetails?.jobDetails?.skills?.map((item: any) => {
                        return (
                            <li>
                                {item?.key} {' - '}{' '}
                                <span
                                    style={{
                                        color: getCompetencyColor(
                                            item?.status ?? ''
                                        )
                                    }}
                                >
                                    {item?.status}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </Box>
            */}
                    <Box
                        sx={{
                            marginTop: '30px'
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                navigate(`applicants`, {
                                    state: {
                                        applicants: jobDetails?.applicants,
                                        title: jobDetails?.title
                                    }
                                });
                            }}
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
