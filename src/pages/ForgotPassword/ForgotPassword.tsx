import {
    Typography,
    Button,
    InputBase,
    InputLabel,
    InputAdornment,
    CircularProgress
} from '@mui/material';
import Box from '@mui/material/Box';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmailFormIcon from '../../assets/icons/EmailFormIcon';
import OnBoardingSidePanel from '../OnBoarding/OnBoardingSidePanel';
import ForgotPasswordSteps from './ForgotPasswordSteps/ForgotPasswordSteps';
import React, { useState } from 'react';
import {
    updateAction,
    updateStep,
    clearAction
} from '../Accounts/Professional/CreationSteps/updateAction';
import { useStateMachine } from 'little-state-machine';
import useGetVerificationCode from '../../utils/hooks/api/authentication/useGetVerificationCode';
import SnackAlert from '../../components/Snackbar';
import axios, { AxiosError } from 'axios';

interface IResetPasswordForm {
    emailAddress: string;
}

function ForgotPassword() {
    let navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>(
        'info'
    );
    const { actions } = useStateMachine({
        updateAction,
        updateStep,
        clearAction
    });

    const {
        control,
        handleSubmit,
        formState,
        register,
        setError,
        clearErrors
    } = useForm<IResetPasswordForm>();
    const { isDirty, isValid, errors } = formState;
    const getCode = useGetVerificationCode();
    const onSubmit: SubmitHandler<IResetPasswordForm> = async (data) => {
        setLoading(true);
        actions.updateAction(data);
        if (data.emailAddress !== undefined) {
            getCode.mutate(
                { emailAddress: data.emailAddress, verificationType: 'CODE' },
                {
                    onSuccess: (res) => {
                        if (res.accountId) {
                            navigate(
                                `/forgot-password/reset/${data.emailAddress}`
                            );
                            return;
                        }
                        setType('error');
                        setMessage('Error occured please try again!');
                        setShowAlert(true);
                        setLoading(false);
                    },
                    onError: (error: AxiosError) => {
                        setLoading(false);
                        if (axios.isAxiosError(error)) {
                            setType('error');
                            setMessage('Incorrect credentials');
                            setShowAlert(true);
                            return;
                        }
                        setType('error');
                        setMessage('Error occured please try again!');
                        setShowAlert(true);
                        return;
                    }
                }
            );
        }
    };

    const navigateBack: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate(-1);
    };

    React.useEffect(() => {
        actions.clearAction();
        actions.updateStep(1);
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: 'flex',
                        minHeight: '100vh',
                        flexDirection: { md: 'row', xs: 'column' },
                        alignItems: 'center',
                        backgroundColor: '#FCFBF8',
                        width: '100%'
                    }}
                >
                    {/* left column */}
                    <OnBoardingSidePanel />
                    {/* right column */}
                    <Box
                        sx={{
                            flexBasis: '66.66%',
                            alignItems: 'center',
                            mx: '40px',
                            my: { md: '0', sx: '40px' },
                            mt: { md: '-100px', sx: 0 }
                        }}
                    >
                        {/* forgot password form */}
                        <Box
                            sx={{
                                maxWidth: '518px',
                                width: '100%',
                                margin: '0 auto'
                            }}
                        >
                            {/* ellipsis steps */}
                            <ForgotPasswordSteps />

                            <Box
                                sx={{
                                    width: '518px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <Typography
                                        variant="headlineLargeSemiBold"
                                        color="#23282B"
                                        sx={{ mb: '12px', display: 'block' }}
                                    >
                                        Forgot Password?
                                    </Typography>
                                    <Typography
                                        variant="titleMediumRegular"
                                        color="#808080"
                                        sx={{ display: 'block' }}
                                    >
                                        Reset password in two quick steps
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: '48px', width: '100%' }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <InputLabel
                                            sx={{
                                                color: '#808080',
                                                fontSize: '14px',
                                                position: 'absolute',
                                                top: '8px',
                                                left: '72px',
                                                zIndex: 1,
                                                fontFamily: 'Open Sans'
                                            }}
                                            htmlFor="email"
                                        >
                                            Email
                                        </InputLabel>
                                        {/* Email Address Input */}
                                        <Controller
                                            name="emailAddress"
                                            control={control}
                                            rules={{
                                                required: 'Required field',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        'Invalid email address'
                                                }
                                            }}
                                            render={({ field }) => (
                                                <InputBase
                                                    {...field}
                                                    required
                                                    error={
                                                        !!errors.emailAddress
                                                    }
                                                    inputProps={{
                                                        autoComplete: 'off',
                                                        form: {
                                                            autoComplete: 'off'
                                                        },
                                                        inputMode: 'email'
                                                    }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <EmailFormIcon />
                                                        </InputAdornment>
                                                    }
                                                    placeholder="Enter email address"
                                                    type="email"
                                                    sx={{
                                                        backgroundColor:
                                                            '#FFFFFF',
                                                        width: '100%',
                                                        height: '70px',
                                                        padding: '0px 16px',
                                                        fontFamily: 'open sans',
                                                        color: '#23282B',
                                                        borderBottom:
                                                            '1px solid',
                                                        borderColor:
                                                            errors.emailAddress
                                                                ? 'red'
                                                                : '#D9D9D9',
                                                        mb: '2px',
                                                        '& .MuiInputBase-input':
                                                            {
                                                                ml: '7.5px',
                                                                position:
                                                                    'relative',
                                                                top: '8px'
                                                            }
                                                    }}
                                                />
                                            )}
                                        />

                                        <Typography
                                            sx={{
                                                color: 'red',
                                                fontSize: '12px',
                                                fontFamily: 'Open Sans'
                                            }}
                                        >
                                            {errors.emailAddress?.message}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* buttons */}
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: '18px'
                                }}
                            >
                                {loading ? (
                                    <CircularProgress
                                        sx={{ color: '#05668D' }}
                                    />
                                ) : (
                                    <Button
                                        sx={{
                                            height: '52px'
                                        }}
                                        variant="contained"
                                        disabled={!isDirty || !isValid}
                                        type="submit"
                                    >
                                        <Typography
                                            fontSize={'16px'}
                                            fontWeight={700}
                                            fontStyle={'bold'}
                                            textTransform="capitalize"
                                        >
                                            Send OTP
                                        </Typography>
                                    </Button>
                                )}
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: '#05668D',
                                        borderRadius: '8px',
                                        width: '100%',
                                        padding: '16px, 36px, 16px, 36px',
                                        height: '52px',
                                        mt: '16px',
                                        textTransform: 'capitalize'
                                    }}
                                    onClick={navigateBack}
                                >
                                    <Typography fontWeight={'600'}>
                                        Back
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </form>
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </>
    );
}

export default ForgotPassword;
