import {
    Box,
    Button,
    InputAdornment,
    InputBase,
    InputLabel,
    Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import OnBoardingSidePanel from '../OnBoarding/OnBoardingSidePanel';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PasswordFormIcon from '../../assets/icons/PasswordFormIcon';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/context/AuthContext';
import { useStateMachine } from 'little-state-machine';
import {
    clearAction,
    updateAction,
    updateStep
} from '../Accounts/Professional/CreationSteps/updateAction';
import ErrorFormIcon from '../../assets/icons/ErrorFormIcon';

interface INewPasswordForm {
    password: string;
    confirmPassword: string;
}

function NewPassword() {
    let navigate = useNavigate();
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
        clearErrors,
        getValues
    } = useForm<INewPasswordForm>();
    const { isDirty, isValid, errors } = formState;

    const onSubmit: SubmitHandler<INewPasswordForm> = async (data) => {
        actions.updateAction(data);
        navigate('/login');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: 'flex',
                        minHeight: '100vh',
                        flexDirection: { md: 'row', xs: 'column' },
                        // alignItems: 'center',
                        backgroundColor: '#FCFBF8',
                        width: '100%'
                    }}
                >
                    {/* left column */}
                    <OnBoardingSidePanel />

                    <Box
                        sx={{
                            flexBasis: '66.66%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: '40px',
                            mb: '40px',
                            mt: '112px'
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '519px',
                                width: '100%',
                                margin: '0 auto'
                            }}
                        >
                            <Box>
                                <Typography
                                    color="#494949"
                                    variant="headlineLargeSemiBold"
                                    sx={{ display: 'block' }}
                                >
                                    Enter new password
                                </Typography>
                                <Typography
                                    color="#808080"
                                    variant="titleMediumRegular"
                                    sx={{
                                        mt: '12px',
                                        mb: '32px',
                                        display: 'block'
                                    }}
                                >
                                    Kindly enter a new password as the previous
                                    one has been reset
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            position: 'relative',
                                            mt: '18px'
                                        }}
                                    >
                                        <InputLabel
                                            sx={{
                                                color: '#23282B',
                                                fontSize: '14px',
                                                position: 'absolute',
                                                top: '8px',
                                                left: '72px',
                                                zIndex: 1,
                                                fontFamily: 'Open Sans'
                                            }}
                                            htmlFor="password"
                                        >
                                            Password
                                        </InputLabel>
                                        {/* password */}

                                        <Controller
                                            name="password"
                                            control={control}
                                            rules={{
                                                required: 'Required field',
                                                minLength: {
                                                    value: 4,
                                                    message:
                                                        'Passwords must be a minimum of 4 characters'
                                                },
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,32}$/,
                                                    message:
                                                        'Passwords should contain at least one uppercase letter, one number, and one special character'
                                                }
                                            }}
                                            render={({ field }) => (
                                                <InputBase
                                                    {...field}
                                                    required
                                                    error={!!errors.password}
                                                    inputProps={{
                                                        autoComplete:
                                                            'new-password',
                                                        form: {
                                                            autoComplete: 'off'
                                                        }
                                                    }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PasswordFormIcon />
                                                        </InputAdornment>
                                                    }
                                                    placeholder="********"
                                                    type="password"
                                                    sx={{
                                                        backgroundColor:
                                                            '#FFFFFF',
                                                        width: '100%',
                                                        height: '70px',
                                                        padding: '0px 16px',
                                                        mb: '2px',
                                                        fontFamily: 'open sans',
                                                        color: '#23282B',
                                                        borderBottom:
                                                            '1px solid',
                                                        borderColor:
                                                            errors.password
                                                                ? 'red'
                                                                : '#D9D9D9',
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
                                        {errors.password?.message ? (
                                            <div>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        gap: '5px',
                                                        mt: '10px',
                                                        alignContent: 'start'
                                                    }}
                                                >
                                                    <ErrorFormIcon />
                                                    <Typography
                                                        sx={{
                                                            color: '#808080',
                                                            fontSize: '12px',
                                                            fontFamily:
                                                                'Open Sans'
                                                        }}
                                                    >
                                                        Password should contain
                                                        uppercase letter(s),
                                                        numbers(s) and special
                                                        character(s)
                                                    </Typography>
                                                </Box>
                                            </div>
                                        ) : null}
                                    </Box>

                                    {/* repeat password */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            position: 'relative',
                                            mt: '18px'
                                        }}
                                    >
                                        <InputLabel
                                            sx={{
                                                color: '#23282B',
                                                fontSize: '14px',
                                                position: 'absolute',
                                                top: '8px',
                                                left: '72px',
                                                zIndex: 1,
                                                fontFamily: 'Open Sans'
                                            }}
                                            htmlFor="confirmPassword"
                                        >
                                            Confirm Password
                                        </InputLabel>
                                        {/* repeatPassword */}
                                        <Controller
                                            name="confirmPassword"
                                            control={control}
                                            rules={{
                                                required: 'Required field',
                                                validate: (value) =>
                                                    value ===
                                                        getValues('password') ||
                                                    'Passwords do not match'
                                            }}
                                            render={({ field }) => (
                                                <InputBase
                                                    {...field}
                                                    required
                                                    error={
                                                        !!errors.confirmPassword
                                                    }
                                                    inputProps={{
                                                        autoComplete:
                                                            'new-password',
                                                        form: {
                                                            autoComplete: 'off'
                                                        }
                                                    }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PasswordFormIcon />
                                                        </InputAdornment>
                                                    }
                                                    placeholder="********"
                                                    type="password"
                                                    sx={{
                                                        backgroundColor:
                                                            '#FFFFFF',
                                                        width: '100%',
                                                        height: '70px',
                                                        padding: '0px 16px',
                                                        mb: '2px',
                                                        fontFamily: 'open sans',
                                                        color: '#23282B',
                                                        borderBottom:
                                                            '1px solid',
                                                        borderColor:
                                                            errors.confirmPassword
                                                                ? 'red'
                                                                : '#D9D9D9',
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
                                            {errors.confirmPassword?.message}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

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
                                        mt: '48px'
                                    }}
                                    variant="contained"
                                    disabled={
                                        Object.keys(errors).length > 0 ||
                                        Object.keys(getValues()).length === 0
                                    }
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    <Typography
                                        fontSize={'16px'}
                                        fontWeight={700}
                                        fontStyle={'bold'}
                                        textTransform="capitalize"
                                    >
                                        Continue to Login
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

export default NewPassword;
