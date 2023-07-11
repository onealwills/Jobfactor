import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    CircularProgress
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Edit from '../../../../assets/icons/Edit';
import Cancel from '../../../../assets/icons/Cancel';
import LogoIcon from '../../../../assets/icons/LogoIcon';
import Mail from '../../../../assets/icons/Mail';
import Phone from '../../../../assets/icons/Phone';
import Birthday from '../../../../assets/icons/Birthday';
import Location from '../../../../assets/icons/Location';
import Delete from '../../../../assets/icons/Delete';
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import SnackAlert from '../../../../components/Snackbar';
import { useQueryClient } from 'react-query';
import { useApplyJob } from '../../../../utils/hooks/api/jobs/useApplyJob';
import { useAuth } from '../../../../utils/context/AuthContext';

const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    border: 0,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    maxHeight: 800,
    overflowY: 'auto'
};

interface ApplyJobProps {
    showModal: boolean;
    hideModal: (e?: any) => void;
    jobId: string;
    queryKey: string;
    companyName: string | undefined;
}

const ApplyJob = ({
    showModal,
    jobId,
    hideModal,
    queryKey = '',
    companyName = ''
}: ApplyJobProps) => {
    const [progress, setProgress] = useState<number>(25);
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>(
        'info'
    );
    const applyNow = useApplyJob();
    const queryClient = useQueryClient();
    const { user } = useAuth();

    useEffect(() => {
        setProgress(25);
    }, [showModal]);


    const handleApplyNow = () => {
        if (user?.id && jobId) {
            setLoading(true);
            let data = {
                jobPostingId: jobId ?? '',
                professionalProfileId: user?.professionalProfile?.id ?? ''
            };
            applyNow.mutate(data, {
                onSuccess: (res) => {
                    setType('success');
                    setMessage('Applied Successfully');
                    setShow(true);
                    if (queryKey) {
                        queryClient.invalidateQueries({ queryKey: [queryKey] });
                    }
                    setLoading(false);
                    hideModal();
                },
                onError: (error) => {
                    setType('success');
                    setMessage('Error occured please try again later!');
                    setShow(true);
                    setLoading(false);
                }
            });
        }
    };

    const ProgressBar = () => {
        const ProgressBarLiner = styled(LinearProgress)(({ theme }) => ({
            height: 10,
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: '#FFF7E8'
            },
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: '#FFC24C'
            }
        }));

        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ width: '95%' }}>
                    <ProgressBarLiner variant="determinate" value={progress} />
                </Box>
                <Box sx={{ minWidth: 30, textAlign: 'right' }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        );
    };

    const ContactInfo = () => {
        return (
            <>
                <Box sx={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                    <Box>
                        <img
                            height={80}
                            width={80}
                            src={user?.professionalProfile?.photoUrl}
                            alt="icon"
                            style={{ borderRadius: 100 }}
                        />
                    </Box>
                    <Box sx={{ marginLeft: '15px' }}>
                        <p
                            style={{
                                marginBottom: '4px',
                                marginTop: 0,
                                fontSize: '16px',
                                fontWeight: '700'
                            }}
                        >
                            {user?.professionalProfile?.firstName} {user?.professionalProfile?.lastName}
                        </p>
                        <p
                            style={{
                                marginBottom: '4px',
                                marginTop: 0,
                                fontSize: '16px',
                                fontWeight: '400'
                            }}
                        >
                            {user?.professionalProfile?.currentEmployment?.jobTitle}
                        </p>
                        <p
                            style={{
                                marginBottom: '4px',
                                marginTop: 0,
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#808080'
                            }}
                        >
                            {user?.professionalProfile?.currentEmployment?.location}
                        </p>
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: '24px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <p
                            style={{
                                margin: '0px',
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#23282B'
                            }}
                        >
                            {'Contact Info'}
                        </p>
                    </Box>
                    <Button
                        sx={{
                            fontSize: '14px',
                            color: '#05668D',
                            width: 'auto',
                            fontWeight: '700',
                            backgroundColor: '#F2F2F2',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            padding: '8px 12px'
                        }}
                        endIcon={<Edit />}
                    >
                        Edit
                    </Button>
                </Box>
                <Box sx={{ width: '100%', marginTop: '12px' }}>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '40px' }}>
                            <LogoIcon />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p
                                style={{
                                    margin: '0px',
                                    marginBottom: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#23282B'
                                }}
                            >
                                {'Your Profile'}
                            </p>
                            <p
                                style={{
                                    margin: '0px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    color: '#055C7F'
                                }}
                            >
                                {'https://RonaldRichards.info'}
                            </p>
                        </Box>
                    </Box>
                    <Box></Box>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '40px' }}>
                            <Phone />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p
                                style={{
                                    margin: '0px',
                                    marginBottom: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#23282B'
                                }}
                            >
                                {'Phone'}
                            </p>
                            <Typography
                                variant='titleSmallRegular'
                                sx={{
                                    margin: '0px',
                                    color: '#23282B'
                                }}
                            >
                                {'+234704 5550114'}{' '}
                                <span style={{ color: '#808080' }}>
                                    {'(Office)'}
                                </span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '40px' }}>
                            <Location />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p
                                style={{
                                    margin: '0px',
                                    marginBottom: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#23282B'
                                }}
                            >
                                {'Address'}
                            </p>
                            <p
                                style={{
                                    margin: '0px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    color: '#055C7F'
                                }}
                            >
                                {user?.professionalProfile?.address}
                            </p>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '40px' }}>
                            <Mail />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p
                                style={{
                                    margin: '0px',
                                    marginBottom: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#23282B'
                                }}
                            >
                                {'Email'}
                            </p>
                            <p
                                style={{
                                    margin: '0px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    color: '#055C7F'
                                }}
                            >
                                {user?.professionalProfile?.emailAddress}
                            </p>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '40px' }}>
                            <Birthday />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p
                                style={{
                                    margin: '0px',
                                    marginBottom: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#23282B'
                                }}
                            >
                                {'Birthday'}
                            </p>
                            <p
                                style={{
                                    margin: '0px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    color: '#055C7F'
                                }}
                            >
                                {'May 29'}
                            </p>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    };

    const EducationInfo = () => {
        return (
            <>
                <Box sx={{ marginTop: '20px' }}>
                    <p
                        style={{
                            margin: '0px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#23282B'
                        }}
                    >
                        {'Education'}
                    </p>
                </Box>
                {user?.professionalProfile?.qualifications?.map((qualification, i) => (
                    <>
                        <Box
                            sx={{
                                marginTop: '24px',
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Box>
                                <p
                                    style={{
                                        margin: '0px',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: '#494949'
                                    }}
                                >
                                    {i + 1} of {user?.professionalProfile?.qualifications?.length}
                                </p>
                            </Box>
                            <Box sx={{ gap: '10px', display: 'flex' }}>
                                {progress < 100 ? (
                                    <Button
                                        sx={{
                                            fontSize: '14px',
                                            color: '#05668D',
                                            fontWeight: '700',
                                            backgroundColor: '#F2F2F2',
                                            width: 'auto',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            textDecoration: 'none'
                                        }}
                                        endIcon={<Delete />}
                                    >
                                        Remove
                                    </Button>
                                ) : null}

                                <Button
                                    sx={{
                                        fontSize: '14px',
                                        color: '#05668D',
                                        fontWeight: '700',
                                        backgroundColor: '#F2F2F2',
                                        width: 'auto',
                                        borderRadius: '8px',
                                        padding: '12px',
                                        textDecoration: 'none'
                                    }}
                                    endIcon={<Edit />}
                                >
                                    Edit
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                marginTop: '15px',
                                padding: '15px',
                                backgroundColor: '#FFFAF1',
                                borderRadius: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Degree:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {qualification.degree}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    School:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {qualification.school}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Major / Field of study :
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {qualification.fieldOfStudy}
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex' }}>
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Dates of employment:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {qualification.startYear} - {qualification.endYear}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                ))}
                {progress < 100 ? (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    >
                        <Button
                            sx={{
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#F2F2F2',
                                width: 'auto',
                                borderRadius: '8px',
                                padding: '12px',
                                mt: '16px',
                                textDecoration: 'none'
                            }}
                            startIcon={<AddIcon style={{ color: '#05668D' }} />}
                        >
                            Add more
                        </Button>
                    </Box>
                ) : null}
            </>
        );
    };

    const WorkExperience = () => {
        return (
            <>
                <Box sx={{ marginTop: '20px' }}>
                    <p
                        style={{
                            margin: '0px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#23282B'
                        }}
                    >
                        {'Work Experience'}
                    </p>
                </Box>
                {user?.professionalProfile?.employemnts?.map((employment, i) => (
                    <>
                        <Box
                            sx={{
                                marginTop: '24px',
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Box>
                                <p
                                    style={{
                                        margin: '0px',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: '#494949'
                                    }}
                                >
                                    {i + 1} of {user?.professionalProfile?.employemnts?.length}
                                </p>
                            </Box>
                            <Box sx={{ gap: '10px', display: 'flex' }}>
                                {progress < 100 ? (
                                    <Button
                                        sx={{
                                            fontSize: '14px',
                                            color: '#05668D',
                                            fontWeight: '700',
                                            backgroundColor: '#F2F2F2',
                                            width: 'auto',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            textDecoration: 'none'
                                        }}
                                        endIcon={<Delete />}
                                    >
                                        Remove
                                    </Button>
                                ) : null}
                                <Button
                                    sx={{
                                        fontSize: '14px',
                                        color: '#05668D',
                                        fontWeight: '700',
                                        backgroundColor: '#F2F2F2',
                                        width: 'auto',
                                        borderRadius: '8px',
                                        padding: '12px',
                                        textDecoration: 'none'
                                    }}
                                    endIcon={<Edit />}
                                >
                                    Edit
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                marginTop: '15px',
                                padding: '15px',
                                backgroundColor: '#FFFAF1',
                                borderRadius: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Your title:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {employment.jobTitle}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Company:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {employment.companyName}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Dates of employment:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {employment.startYear} - {employment.isCurrentPosition ? 'Present' : employment.endYear}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Industry:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    Fintech
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex' }}>
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        paddingRight: '15px'
                                    }}
                                >
                                    Description:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#23282B',
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}
                                >
                                    {employment.jobDescription}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                ))}
                {progress < 100 ? (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    >
                        <Button
                            sx={{
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#F2F2F2',
                                width: 'auto',
                                borderRadius: '8px',
                                padding: '12px',
                                mt: '16px',
                                textDecoration: 'none'
                            }}
                            startIcon={<AddIcon style={{ color: '#05668D' }} />}
                        >
                            Add more
                        </Button>
                    </Box>
                ) : null}
            </>
        );
    };

    // const CoverLetter = () => {
    //     return (
    //         <>
    //             <Box sx={{ marginTop: '20px' }}>
    //                 <p
    //                     style={{
    //                         margin: '0px',
    //                         fontSize: '16px',
    //                         fontWeight: '600',
    //                         color: '#23282B'
    //                     }}
    //                 >
    //                     {'Cover Letter'}
    //                 </p>
    //             </Box>
    //             <Box
    //                 sx={{
    //                     marginTop: '15px',
    //                     padding: '15px',
    //                     backgroundColor: '#FFFAF1',
    //                     borderRadius: '5px'
    //                 }}
    //             >
    //                 <Box
    //                     sx={{
    //                         width: '100%',
    //                         display: 'flex',
    //                         marginBottom: '10px',
    //                         alignItems: 'center'
    //                     }}
    //                 >
    //                     <Box>
    //                         <MailOutlineIcon
    //                             style={{
    //                                 fontSize: '18px',
    //                                 color: '#808080',
    //                                 fontWeight: '400'
    //                             }}
    //                         />
    //                     </Box>
    //                     <Typography
    //                         sx={{
    //                             marginBottom: '5px',
    //                             padding: '0px 12px',
    //                             color: '#808080'
    //                         }}
    //                     >
    //                         |
    //                     </Typography>
    //                     <Typography
    //                         sx={{
    //                             fontSize: '14px',
    //                             fontWeight: '400',
    //                             color: '#808080'
    //                         }}
    //                     >
    //                         Cover letter
    //                     </Typography>
    //                 </Box>
    //                 <Box sx={{ width: '100%' }}>
    //                     <InputBase
    //                         rows={!showall ? 10 : 0}
    //                         placeholder="Write something"
    //                         defaultValue={
    //                             'Lorem ipsum dolor sit amet consectetur. Nec natoque ornare eleifend nascetur. Cras a lectus pretium gravida porttitor amet nisl volutpat turpis. Semper auctor quam scelerisque eget nulla rhoncus lorem purus eu. Vel sit cursus vehicula accumsan commodo odio urna.'
    //                         }
    //                         sx={{
    //                             backgroundColor: '#FCFBF8',
    //                             width: '100%',
    //                             overflowY: 'auto',
    //                             padding: 0,
    //                             paddingTop: '10px',
    //                             fontFamily: 'open sans',
    //                             color: '#23282B'
    //                         }}
    //                         multiline
    //                     />
    //                 </Box>
    //             </Box>
    //             {!showall ? (
    //                 <Box
    //                     sx={{
    //                         display: 'flex',
    //                         justifyContent: 'space-between',
    //                         marginTop: '30px'
    //                     }}
    //                 >
    //                     <Box sx={{ width: '35%' }}>
    //                         <Button
    //                             style={{
    //                                 backgroundColor: '#fff',
    //                                 color: '#05668D',
    //                                 borderWidth: 1,
    //                                 borderColor: '#05668D',
    //                                 borderStyle: 'solid'
    //                             }}
    //                             variant="contained"
    //                             sx={{ py: 1 }}
    //                             onClick={() => {
    //                                 setProgress(progress - 25);
    //                             }}
    //                         >
    //                             Back
    //                         </Button>
    //                     </Box>
    //                     <Box sx={{ width: '64%' }}>
    //                         <Button
    //                             variant="contained"
    //                             sx={{ py: 1, display: 'flex', gap: '10px' }}
    //                             onClick={() => {
    //                                 setShowAll(true);
    //                             }}
    //                         >
    //                             Next <EastIcon />
    //                         </Button>
    //                     </Box>
    //                 </Box>
    //             ) : (
    //                 <Box
    //                     sx={{
    //                         display: 'flex',
    //                         justifyContent: 'space-between',
    //                         width: '100%',
    //                         marginTop: '40px'
    //                     }}
    //                 >
    //                     <Box sx={{ width: '35%' }}>
    //                         <Button
    //                             style={{
    //                                 backgroundColor: '#fff',
    //                                 color: '#05668D',
    //                                 borderWidth: 1,
    //                                 borderColor: '#05668D',
    //                                 borderStyle: 'solid'
    //                             }}
    //                             variant="contained"
    //                             sx={{ py: 1 }}
    //                             onClick={() => {
    //                                 setShowAll(false);
    //                             }}
    //                         >
    //                             Back
    //                         </Button>
    //                     </Box>
    //                     <Box sx={{ width: '64%', textAlign: 'center' }}>
    //                         {loading ? (
    //                             <CircularProgress sx={{ color: '#05668D' }} />
    //                         ) : (
    //                             <Button
    //                                 variant="contained"
    //                                 sx={{ py: 1, display: 'flex', gap: '10px' }}
    //                                 onClick={handleApplyNow}
    //                             >
    //                                 Submit
    //                             </Button>
    //                         )}
    //                     </Box>
    //                 </Box>
    //             )}
    //         </>
    //     );
    // };

    return (
        <>
            <Modal
                open={showModal}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalstyle}>
                    <Box sx={{ p: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#CCC',
                                borderStyle: 'solid',
                                marginBottom: '15px',
                                paddingBottom: 1
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px'
                                }}
                            >
                                {progress > 25 && (
                                    <Box
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => setProgress((prev) => prev - 25)}
                                    >
                                        <KeyboardBackspaceIcon
                                            style={{
                                                color: '#808080',
                                                fontWeight: '400'
                                            }}
                                        />
                                    </Box>
                                )}
                                <Box>
                                    <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                                        Apply to {companyName}
                                    </h4>
                                </Box>
                            </Box>
                            <Box>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        hideModal();
                                    }}
                                >
                                    <Cancel />
                                </div>
                            </Box>
                        </Box>
                        <ProgressBar />
                        {(progress === 25 || progress === 100) ? <ContactInfo /> : null}
                        {(progress === 50 || progress === 100) ? <EducationInfo /> : null}
                        {(progress === 75 || progress === 100) ? <WorkExperience /> : null}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: '#FFFAF1',
                            p: '20px 32px'
                        }}
                    >
                        {progress > 25 ?
                            <Box sx={{ width: '35%' }}>
                                <Button
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#05668D',
                                        borderWidth: 1,
                                        borderColor: '#05668D',
                                        borderStyle: 'solid'
                                    }}
                                    variant="contained"
                                    sx={{ py: 1 }}
                                    onClick={() => setProgress((prev) => prev - 25)}
                                >
                                    Back
                                </Button>
                            </Box>
                            : null
                        }
                        <Box sx={{ width: progress > 25 ? '64%' : '100%', textAlign: 'center' }}>
                            {loading ? (
                                <CircularProgress sx={{ color: '#05668D' }} />
                            ) : (
                                <Button
                                    variant="contained"
                                    sx={{ py: 1, display: 'flex', gap: '10px' }}
                                    onClick={() => progress === 100 ? handleApplyNow() : setProgress((prev) => prev + 25)}
                                >
                                    {progress === 100 ? 'Submit' : 'Next'} {progress < 100 ? <EastIcon /> : null}
                                </Button>
                            )}
                        </Box>
                    </Box>

                </Box>
            </Modal >
            <SnackAlert
                open={show}
                type={type}
                message={message}
                handleClose={() => setShow(false)}
            />
        </>
    );
};

export default ApplyJob;
