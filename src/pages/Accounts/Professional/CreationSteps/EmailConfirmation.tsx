import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmailConfirmationIcon from '../../../../assets/icons/EmailConfirmationIcon';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps';
import { updateStep } from './updateAction';
import { useStateMachine } from 'little-state-machine';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useGetVerificationCode from '../../../../utils/hooks/api/authentication/useGetVerificationCode';
import useVerifyAccount from '../../../../utils/hooks/api/authentication/userVerifyAccount';

function EmailConfirmation() {
    const { actions } = useStateMachine({ updateStep });
    const { email } = useParams();
    const getCode = useGetVerificationCode();
    const verifyAccount = useVerifyAccount();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('Verify email');
    const [message, setMessage] = useState(
        'An verification email has been sent to your email address, Please proceed to verify your email address, to continue your signup process'
    );

    const verifyCode = () => {
        verifyAccount.mutate(
            {
                verificationCode: queryParams.get('hash') ?? '',
                emailAddress: 'string',
                verificationType: 'HASH'
            },
            {
                onSuccess: (res: any) => {
                    if (res.isSuccess) {
                        setTitle('Account Verified');
                        setType('success');
                        setMessage(
                            'Your account has been verified successfully.'
                        );
                        return;
                    }
                    setTitle('Account Verification Failed');
                    setType('error');
                    setMessage('Your account verification was unsuccessfully.');
                },
                onError: () => {
                    setTitle('Account Verification Failed');
                    setType('error');
                    setMessage('Your account verification was unsuccessfully.');
                    return;
                }
            }
        );
    };
    const createVerification = () => {
        if (email) {
            setLoading(true);
            getCode.mutate(
                { emailAddress: email, verificationType: 'HASH' },
                {
                    onSuccess: (res) => {
                        console.log('object', res);
                        setTitle('Verify email');
                        setType('');
                        setMessage(
                            'An verification email has been sent to your email address, Please proceed to verify your email address, to continue your signup process'
                        );
                        setLoading(false);
                    },
                    onError: () => {
                        setTitle('Account Verification Email Failed');
                        setType('error');
                        setMessage(
                            'There was a problem sending email, please contact support!'
                        );
                        setLoading(false);
                        return;
                    }
                }
            );
        }
    };

    React.useEffect(() => {
        actions.updateStep(3);
        if (
            email?.includes('.com') &&
            email?.includes('@') &&
            !queryParams.get('hash')
        ) {
            createVerification();
        } else {
            verifyCode();
        }
    }, []);

    return (
        <>
            <OnboardingSteps
                isVerified={
                    type === 'success' ? true : type === 'error' ? false : null
                }
            />
            <Box
                sx={{
                    mt: '72px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Box sx={{ width: '518px' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeiht: 600,
                            color: '#23282B',
                            fontSize: '32px'
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            color: '#808080',
                            fontSize: '20px',
                            lineHeight: '28px',
                            mt: '20px',
                            mb: '40px'
                        }}
                    >
                        {message}
                    </Typography>
                    {type === 'success' ? (
                        <Button
                            variant="contained"
                            sx={{
                                width: 'auto'
                            }}
                            onClick={() => navigate('/login?newAccount=true')}
                        >
                            Sign In
                        </Button>
                    ) : null}
                    {type === 'error' ? (
                        loading ? (
                            <CircularProgress sx={{ color: '#05668D' }} />
                        ) : (
                            <Button
                                variant="contained"
                                sx={{
                                    width: 'auto'
                                }}
                                onClick={() => {
                                    createVerification();
                                }}
                            >
                                Resend email
                            </Button>
                        )
                    ) : null}
                    <EmailConfirmationIcon />
                </Box>
            </Box>
        </>
    );
}

export default EmailConfirmation;
