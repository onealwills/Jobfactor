import React, { useState } from 'react';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { JobApplicationItem } from '../../types/JobApplicationItem';
import ChipList from '../Chips/ChipList';
import JobBookmarkIcon from '../../../../assets/icons/JobBookmarkIcon';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useSaveApplicant } from '../../../../utils/hooks/api/saved-applicants/useSaveApplicant';
import { useAuth } from '../../../../utils/context/AuthContext';
import SnackAlert from '../../../../components/Snackbar';
import { useDeleteSavedApplicant } from '../../../../utils/hooks/api/saved-applicants/useDeleteSavedApplicant';

const keywords = [
    { name: 'Beginner', type: 'B', showbackground: false },
    { name: 'Mobile Int', type: 'E', showbackground: false },
    { name: 'Customer Experience Design', type: 'A', showbackground: false }
];
const ApplicationItem = (props: { ApplicantInfo: JobApplicationItem, updateData?: (applicantId: string) => void }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { ApplicantInfo, updateData = () => { } } = props;
    const saveApplicant = useSaveApplicant();
    const removeApplicant = useDeleteSavedApplicant();
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const toggleSaveApplicant = () => {
        if (ApplicantInfo?.isSaved) {
            removeApplicant.mutate(ApplicantInfo?.savedApplicantId, {
                onSuccess: (res) => {
                    if (res) {
                        console.log('saveApplicant', res)
                        updateData(ApplicantInfo?.id);
                        ApplicantInfo.isSaved = false;
                        ApplicantInfo.savedApplicantId = '';
                        setType('success');
                        setMessage("Applicant removed successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log("Err", err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        } else {
            let data = {
                companyProfileId: user?.primaryCompanyProfile?.id ?? '',
                applicantId: ApplicantInfo?.id ?? ''
            }
            saveApplicant.mutate(data, {
                onSuccess: (res) => {
                    if (res?.id) {
                        console.log('saveApplicant', res)
                        ApplicantInfo.isSaved = true;
                        ApplicantInfo.savedApplicantId = res?.id;
                        setType('success');
                        setMessage("Applicant saved successfully.");
                        setShowAlert(true);
                    } else {
                        setType('error');
                        setMessage("Error occured please try again!");
                        setShowAlert(true);
                    }
                },
                onError: (err) => {
                    console.log("Err", err)
                    setType('error');
                    setMessage("Error occured please try again!");
                    setShowAlert(true);
                }
            })
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #CCC',
                    paddingBottom: '20px'
                }}
            >
                <Box
                    onClick={() => navigate(`/applicant-details/${ApplicantInfo?.id}`)}
                    sx={{
                        width: 70,
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <Avatar sx={{ width: 70, height: 70 }} src={ApplicantInfo?.professionalProfile?.photoUrl} />
                </Box>
                <Box sx={{ width: '66%' }}>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: '#494949',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate(`/applicant-details/${ApplicantInfo?.id}`)}
                    >
                        {ApplicantInfo?.professionalProfile?.firstName
                            ? `${ApplicantInfo?.professionalProfile?.firstName}  ${ApplicantInfo?.professionalProfile?.lastName}`
                            : ApplicantInfo?.Applicantname}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '15px',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#808080',
                                fontWeight: '400',
                                marginTop: '4px'
                            }}
                        >
                            {ApplicantInfo?.professionalProfile?.employment?.jobTitle ?? 'None'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '20px',
                                marginTop: '-10px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#808080',
                                fontWeight: '400',
                                marginTop: '4px'
                            }}
                        >
                            {ApplicantInfo?.professionalProfile?.employment?.companyName ?? 'None'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '20px',
                                marginTop: '-10px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#fff',
                                fontWeight: '400',
                                marginTop: '4px',
                                backgroundColor: '#49B6FF',
                                padding: '5px 10px',
                                borderRadius: '5px'
                            }}
                        >
                            {ApplicantInfo?.score}
                        </Typography>
                    </Box>
                    <Box
                        sx={{ marginTop: '5px', display: 'flex', gap: '15px' }}
                    >
                        <ChipList chipsData={keywords} displayAll={true} />
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '30px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '30px'
                            }}
                        >
                            {'.'}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 400,
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        marginTop: '20px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: '#808080',
                            fontWeight: '600'
                        }}
                    >
                        {moment(ApplicantInfo?.appliedAt).format('MM/DD/YYYY')}
                    </Typography>
                    <Typography
                        sx={{
                            width: '30px',
                            height: '30px',
                            borderRadius: 100,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '15px',
                            color: '#fff',
                            fontWeight: '400',
                            backgroundColor: '#E75541'
                        }}
                    >
                        3
                    </Typography>
                    <Button
                        variant="outlined"
                        onClick={() => navigate(`/applicant-details/${ApplicantInfo?.id}`)}
                        sx={{
                            padding: '15px 20px',
                            width: 'fit-content',
                            minWidth: '200px'
                        }}
                    >
                        View application
                    </Button>
                    {ApplicantInfo?.isSaved ? (
                        <IconButton
                            sx={{
                                backgroundColor: '#FCFBF8',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                            onClick={toggleSaveApplicant}
                        >
                            <TurnedInIcon style={{ color: '#F6C70E' }} />
                        </IconButton>
                    ) : (
                        <IconButton
                            sx={{
                                borderRadius: '8px',
                                p: 0
                            }}
                            onClick={toggleSaveApplicant}
                        >
                            <JobBookmarkIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </Box>
    );
};

export default ApplicationItem;
