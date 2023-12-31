import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    InputBase,
    InputLabel,
    Typography
} from '@mui/material';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalState, useStateMachine } from 'little-state-machine';
import { clearAction, updateAction, updateStep } from './updateAction';
import UserFormIcon from '../../../../assets/icons/UserFormIcon';
import EmailFormIcon from '../../../../assets/icons/EmailFormIcon';
import PasswordFormIcon from '../../../../assets/icons/PasswordFormIcon';
import ErrorFormIcon from '../../../../assets/icons/ErrorFormIcon';
import GoogleIcon from '../../../../assets/icons/GoogleIcon';
import OnboardingLineIcon from '../../../../assets/icons/OnboardingLineIcon';
import React, { useState } from 'react';
import {
    CreateAccountType,
    CreateProAccountRequest
} from '../../../../utils/hooks/api/account/types';
import { useCreateProAccount } from '../../../../utils/hooks/api/account/useCreateProAccount';
import axios, { AxiosError } from 'axios';
import SnackAlert from '../../../../components/Snackbar';

interface IUserInfo {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    termAgreement: boolean;
}

function UserCreate() {
    let navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const {
        control,
        handleSubmit,
        setError,
        formState,
        register,
        clearErrors
    } = useForm<IUserInfo>();
    const { isDirty, isValid, errors } = formState;
    const { actions, state, getState } = useStateMachine({
        updateAction,
        updateStep,
        clearAction
    });

    const createAccountMutation = useCreateProAccount();

    const handleCreateAccount = async (data: GlobalState) => {
        if (data.data.accountType === CreateAccountType.Professional) {
            setLoading(true);
            const request: CreateProAccountRequest = {
                emailAddress: data.data.emailAddress,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                password: data.data.password
            };

            if (request !== undefined) {
                createAccountMutation.mutate(request, {
                    onSuccess: async (res) => {
                        actions.clearAction();
                        setLoading(false);
                        navigate(
                            `/create-account/confirmEmail/${data.data.emailAddress}`
                        );
                    },
                    onError: (error: AxiosError) => {
                        setLoading(false);
                        if (axios.isAxiosError(error)) {
                            console.error(error?.response?.status);
                            if (error?.response?.status === 409) {
                                setMessage('Email already exists!');
                            } else {
                                setMessage('Incorrect credentials!');
                            }
                            setShowAlert(true);
                        }
                    }
                });
            }
        }
    };

    const onSubmit: SubmitHandler<IUserInfo> = async (data) => {
        actions.updateAction(data);
        handleCreateAccount(getState());
    };

    React.useEffect(() => {
        actions.updateStep(2);
    }, []);

    return (
        <>
            <Box
                sx={{
                    height: '495px',
                    width: '599px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <OnboardingSteps />
            </Box>
            <Box
                sx={{
                    height: '640px',
                    width: '518px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        mt: '71px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        mb: '26px'
                    }}
                >
                    <Typography
                        fontSize={'32px'}
                        fontWeight={600}
                        lineHeight={'40px'}
                        sx={{
                            color: '#23282B',
                            display: 'flex',
                            alignSelf: 'start',
                            mb: '32px'
                        }}
                    >
                        Create Account
                    </Typography>

                    <Box sx={{ width: '100%', position: 'relative' }}>
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
                            htmlFor="firstName"
                        >
                            First name
                        </InputLabel>

                        {/* first name */}
                        <Controller
                            {...register('firstName', {
                                required: 'Required field'
                            })}
                            name="firstName"
                            control={control}
                            render={({
                                field: { onChange, value, ref, onBlur },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    required
                                    onChange={(e) => {
                                        onChange(e);
                                        if (e.target.value.length > 40) {
                                            setError('firstName', {
                                                type: 'maxLength',
                                                message:
                                                    'Name must not exceed 40 characters'
                                            });
                                        } else {
                                            clearErrors('firstName');
                                        }
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            setError('firstName', {
                                                type: 'required',
                                                message:
                                                    'Please provide your first name'
                                            });
                                        } else {
                                            clearErrors('firstName');
                                        }
                                    }}
                                    error={!!errors?.firstName}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off'
                                        },
                                        inputMode: 'text'
                                    }}
                                    inputRef={ref}
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    startAdornment={<UserFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        mb: '2px',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
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
                            {errors.firstName?.message}
                        </Typography>
                    </Box>

                    <Box
                        sx={{ width: '100%', position: 'relative', mt: '18px' }}
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
                            htmlFor="lastName"
                        >
                            Last name
                        </InputLabel>

                        {/* last name */}
                        <Controller
                            {...register('lastName', {
                                required: 'Required field'
                            })}
                            name="lastName"
                            control={control}
                            render={({
                                field: { onChange, value, ref, onBlur },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    required
                                    onChange={(e) => {
                                        onChange(e);
                                        if (e.target.value.length > 40) {
                                            setError('lastName', {
                                                type: 'maxLength',
                                                message:
                                                    'Name must not exceed 40 characters'
                                            });
                                        } else {
                                            clearErrors('lastName');
                                        }
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            setError('lastName', {
                                                type: 'required',
                                                message:
                                                    'Please provide your last name'
                                            });
                                        } else {
                                            clearErrors('lastName');
                                        }
                                    }}
                                    error={!!errors?.lastName}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off'
                                        },
                                        inputMode: 'text'
                                    }}
                                    inputRef={ref}
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    startAdornment={<UserFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        mb: '2px',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
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
                            {errors.lastName?.message}
                        </Typography>
                    </Box>

                    <Box
                        sx={{ width: '100%', position: 'relative', mt: '18px' }}
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
                            htmlFor="emailAddress"
                        >
                            Email
                        </InputLabel>
                        {/* email */}
                        <Controller
                            {...register('emailAddress', {
                                required: 'Required field',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            name="emailAddress"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, ref },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    required
                                    onChange={(e) => {
                                        onChange(e);
                                        if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                e.target.value
                                            )
                                        ) {
                                            setError('emailAddress', {
                                                type: 'pattern',
                                                message: 'Invalid email address'
                                            });
                                        } else {
                                            clearErrors('emailAddress');
                                        }
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            setError('emailAddress', {
                                                type: 'required',
                                                message:
                                                    'Please provide a valid email address'
                                            });
                                        } else {
                                            clearErrors('emailAddress');
                                        }
                                    }}
                                    placeholder="Enter your email address"
                                    error={!!errors?.emailAddress}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off'
                                        },
                                        inputMode: 'email'
                                    }}
                                    inputRef={ref}
                                    id="emailAddress"
                                    startAdornment={<EmailFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        mb: '2px',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
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

                    <Box
                        sx={{ width: '100%', position: 'relative', mt: '18px' }}
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
                            render={({
                                field: { onChange, onBlur, value, ref },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    {...register('password', {
                                        required: 'Required field',
                                        minLength: {
                                            value: 4,
                                            message:
                                                'Passwords must be a minimum of 4 characters'
                                        },
                                        pattern: {
                                            value: /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/gm,
                                            message: 'err'
                                        }
                                    })}
                                    required
                                    onChange={(e) => {
                                        onChange(e);
                                        if (e.target.value.length < 4) {
                                            setError('password', {
                                                type: 'minLength',
                                                message:
                                                    'Passwords must be a minimum of 4 characters'
                                            });
                                        } else {
                                            clearErrors('password');
                                        }
                                        if (
                                            !/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/gm.test(
                                                e.target.value
                                            )
                                        ) {
                                            setError('password', {
                                                type: 'pattern',
                                                message: 'Invalid password'
                                            });
                                        } else {
                                            clearErrors('password');
                                        }
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            setError('password', {
                                                type: 'required',
                                                message:
                                                    'Please provide a valid password'
                                            });
                                        } else {
                                            clearErrors('password');
                                        }
                                    }}
                                    error={!!error}
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off'
                                        }
                                    }}
                                    inputRef={ref}
                                    name="password"
                                    id="password"
                                    startAdornment={<PasswordFormIcon />}
                                    rows={1}
                                    placeholder={'********'}
                                    type="password"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        mb: '2px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
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
                            {errors.password?.message}
                        </Typography>
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
                                            fontFamily: 'Open Sans'
                                        }}
                                    >
                                        Password should contain uppercase
                                        letter(s), numbers(s) and special
                                        character(s)
                                    </Typography>
                                </Box>
                            </div>
                        ) : null}
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignSelf: 'start',
                        mb: '48px',
                        width: '100%'
                    }}
                >
                    <Controller
                        name="termAgreement"
                        control={control}
                        rules={{ required: true }}
                        render={({
                            field: { onChange, onBlur, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState
                        }) => {
                            return (
                                <Checkbox
                                    required
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    inputRef={ref}
                                    name="termAgreement"
                                    inputProps={{
                                        'aria-label':
                                            'I agree to all the Terms and Privacy policy'
                                    }}
                                    sx={{
                                        color: '#D1D1D1',
                                        padding: 0
                                    }}
                                />
                            );
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontFamily: 'Open Sans',
                            color: '#23282B',
                            ml: '12px'
                        }}
                    >
                        I agree to all the Terms and Privacy policy
                    </Typography>
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
                    {loading ? (
                        <CircularProgress sx={{ color: '#05668D' }} />
                    ) : (
                        <Button
                            sx={{
                                height: '52px'
                            }}
                            variant="contained"
                            disabled={!isDirty || !isValid}
                            onClick={handleSubmit(onSubmit)}
                        >
                            <Typography
                                variant="bodyLargeBold"
                                textTransform="capitalize"
                            >
                                Create Account
                            </Typography>
                        </Button>
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mt: '12px',
                            mb: '6px',
                            position: 'relative',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        <OnboardingLineIcon />
                        <Box
                            sx={{
                                height: '1px',
                                width: '90%',
                                alignSelf: 'center',
                                backgroundColor: '#D9D9D9',
                                position: 'absolute'
                            }}
                        />
                        <Typography
                            sx={{
                                px: '30px',
                                backgroundColor: '#fcfbf8',
                                zIndex: 1
                            }}
                        >
                            OR
                        </Typography>
                        <OnboardingLineIcon />
                    </Box>

                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        sx={{
                            height: '52px',
                            width: '100%'
                        }}
                    >
                        <Typography fontWeight={'600'}>
                            Sign up with Google
                        </Typography>
                    </Button>

                    <Box
                        sx={{
                            display: 'flex',
                            mt: '48px'
                        }}
                    >
                        <Typography sx={{ color: '#808080', mr: '10px' }}>
                            Already a Member?
                        </Typography>
                        {/* Text link */}
                        <Typography
                            fontWeight={600}
                            fontSize={'16px'}
                            fontStyle={'semibold'}
                        >
                            <Link
                                to={'/login'}
                                style={{
                                    color: '#05668D',
                                    textDecoration: 'none'
                                }}
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={'error'}
            />
        </>
    );
}

export default UserCreate;
