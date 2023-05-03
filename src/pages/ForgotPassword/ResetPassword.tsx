import {
    Typography,
    Button,
    InputBase,
    InputLabel,
    InputAdornment
} from '@mui/material';
import Box from '@mui/material/Box';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmailFormIcon from '../../assets/icons/EmailFormIcon';
import OnBoardingSidePanel from '../OnBoarding/OnBoardingSidePanel';
import ForgotPasswordSteps from './ForgotPasswordSteps/ForgotPasswordSteps';
import React from 'react';
import {
    updateAction,
    updateStep,
    clearAction
} from '../Accounts/Professional/CreationSteps/updateAction';
import { useStateMachine } from 'little-state-machine';
import SecretCodeIcon from '../../assets/icons/SecretCodeIcon';
import { Numbers } from '@mui/icons-material';

interface IResetPasswordForm {
    code: Number;
}

function ResetPassword() {
    let navigate = useNavigate();
    const { actions, state } = useStateMachine({
        updateAction,
        updateStep,
        clearAction
    });

    const {
        control,
        handleSubmit,
        formState,
        register,
        clearErrors,
        setError
    } = useForm<IResetPasswordForm>();
    const { isDirty, isValid, errors } = formState;

    const onSubmit: SubmitHandler<IResetPasswordForm> = async (data) => {
        actions.updateAction(data);
        if (data.code !== undefined) {
            navigate('/forgot-password/new');
        }
    };

    const navigateBack: React.MouseEventHandler<HTMLButtonElement> = () => {
        // navigate('/');
    };

    React.useEffect(() => {
        actions.updateStep(2);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            justifyContent: 'center',
                            mx: '40px',
                            my: { md: '0', sx: '40px' },
                            mt: { md: '-80px', sx: 0 }
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '519px',
                                width: '100%',
                                margin: '0 auto'
                            }}
                        >
                            <ForgotPasswordSteps />

                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Typography
                                        variant="headlineLargeSemiBold"
                                        color="#23282B"
                                        sx={{ mb: '12px' }}
                                    >
                                        Reset Password
                                    </Typography>
                                    <Typography
                                        variant="titleMediumRegular"
                                        color="#808080"
                                    >
                                        A 6 digit verification number (OTP) has
                                        been sent to your registered email
                                        address. Kindly enter the OTP sent to
                                        reset password
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: '48px' }}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            mb: '18px'
                                        }}
                                    >
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
                                            htmlFor="code"
                                        >
                                            Verification code
                                        </InputLabel>

                                        <Controller
                                            name="code"
                                            control={control}
                                            rules={{
                                                required: 'Required field',
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        'Please enter the 6 digit code that was sent to your email'
                                                },
                                                pattern: {
                                                    value: /^[0-9]{6}$/,
                                                    message:
                                                        'Invalid code, please make sure you enter 6 digits'
                                                }
                                            }}
                                            render={({ field }) => (
                                                <InputBase
                                                    {...field}
                                                    required
                                                    error={!!errors.code}
                                                    inputProps={{
                                                        autoComplete: '',
                                                        form: {
                                                            autoComplete: 'off'
                                                        },
                                                        inputMode: 'numeric'
                                                    }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <SecretCodeIcon />
                                                        </InputAdornment>
                                                    }
                                                    placeholder="******"
                                                    type="text"
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
                                                        borderColor: errors.code
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
                                            {errors.code?.message}
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
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: '#05668D',
                                        color: '#FFFFFF',
                                        borderRadius: '8px',
                                        width: '100%',
                                        padding: '16px, 36px, 16px, 36px',
                                        height: '52px',
                                        mb: '16px'
                                    }}
                                    variant="contained"
                                    disabled={!isValid}
                                    type="submit"
                                >
                                    <Typography
                                        fontSize={'16px'}
                                        fontWeight={700}
                                        fontStyle={'bold'}
                                        textTransform="capitalize"
                                    >
                                        Reset Password
                                    </Typography>
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: '#05668D',
                                        borderRadius: '8px',
                                        width: '100%',
                                        padding: '16px, 36px, 16px, 36px',
                                        height: '52px',
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
        </>
    );
}

export default ResetPassword;
