import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    InputBase,
    InputLabel,
    Typography,
} from '@mui/material';
import React from 'react';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps1';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';
import UserFormIcon from '../../../../assets/icons/UserFormIcon';
import EmailFormIcon from '../../../../assets/icons/EmailFormIcon';
import PasswordFormIcon from '../../../../assets/icons/PasswordFormIcon';
import ErrorFormIcon from '../../../../assets/icons/ErrorFormIcon';

interface IUserInfo {
    fullName: string;
    emailAddress: string;
    password: string;
    termAgreement: boolean;
}

function UserCreate() {
    let navigate = useNavigate();
    const { control, handleSubmit, formState, register } = useForm<IUserInfo>();
    const { isDirty, isValid, errors } = formState;
    const { actions } = useStateMachine({ updateAction });

    const onSubmit: SubmitHandler<IUserInfo> = async (data) => {
        console.log(data);
        actions.updateAction(data);
        // navigate('./userCreate');
    };
    return (
        <>
            <Box
                sx={{
                    height: '495px',
                    width: '599px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <OnboardingSteps />
                <Box
                    sx={{
                        height: '364px',
                        width: '458px',
                        mt: '71px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    
                    <FormControl>
                        <Typography
                            fontSize={'32px'}
                            fontWeight={600}
                            textAlign={'center'}
                            sx={{ color: '#23282B' }}
                        >
                            Create Account
                        </Typography>
                        <FormLabel id="account-type">
                            <Box sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#808080',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '8px',
                                        left: '72px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans',
                                    }}
                                    htmlFor="fullName"
                                >
                                    Full name
                                </InputLabel>

                                {/* full name */}
                                <Controller
                                    {...register('fullName', {
                                        required: 'Required field',
                                    })}
                                    name="fullName"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                        formState,
                                    }) => (
                                        <InputBase
                                            required
                                            onChange={onChange}
                                            error={!!errors?.fullName}
                                            inputProps={{
                                                autoComplete: '',
                                                form: {
                                                    autoComplete: 'off',
                                                },
                                                inputMode: 'text',
                                            }}
                                            id="fullName"
                                            startAdornment={<UserFormIcon />}
                                            rows={1}
                                            sx={{
                                                backgroundColor: '#FFFFFF',
                                                width: '100%',
                                                height: '70px',
                                                padding: '0px 16px',
                                                fontFamily: 'open sans',
                                                color: '#23282B',
                                                borderBottom:
                                                    '1px solid #D9D9D9',
                                                mb: '20px',
                                                '& 	.MuiInputBase-input': {
                                                    ml: '20px',
                                                    position: 'relative',
                                                    top: '8px',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Box>
                        </FormLabel>
                    </FormControl>
                

                    <FormControl>
                        <InputLabel
                            sx={{
                                color: '#808080',
                                fontSize: '14px',
                                position: 'absolute',
                                top: '8px',
                                left: '72px',
                                zIndex: 1,
                                fontFamily: 'Open Sans',
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
                                    message: 'Invalid email address',
                                },
                            })}
                            name="emailAddress"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                                formState,
                            }) => (
                                <InputBase
                                    required
                                    onChange={onChange}
                                    error={!!errors?.emailAddress}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                        inputMode: 'email',
                                    }}
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
                                        borderBottom: '1px solid #D9D9D9',
                                        mb: '20px',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
                                            top: '8px',
                                        },
                                    }}
                                />
                            )}
                        />
                    </FormControl>

                    <FormControl>
                        <InputLabel
                            sx={{
                                color: '#808080',
                                fontSize: '14px',
                                position: 'absolute',
                                top: '8px',
                                left: '72px',
                                zIndex: 1,
                                fontFamily: 'Open Sans',
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
                                field: { onChange, value },
                                fieldState: { error },
                                formState,
                            }) => (
                                <InputBase
                                    {...register('password', {
                                        required: 'Required field',
                                        minLength: {
                                            value: 4,
                                            message:
                                                'Passwords must be a minimum of 4 characters',
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'err',
                                        },
                                        
                                    })}
                                    required
                                    onChange={onChange}
                                    error={!!error}
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                    name="password"
                                    id="password"
                                    startAdornment={<PasswordFormIcon />}
                                    rows={1}
                                    placeholder={'*********'}
                                    type="password"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
                                            top: '8px',
                                        },
                                    }}
                                />
                            )}                            
                        />

                        {errors.password && 'This is required'}
                        {errors.password?.message ? (
                            <div>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '5px',
                                        alignContent: 'center',
                                        mb: '28px',
                                        mt: '12px',
                                    }}
                                >
                                    <ErrorFormIcon />
                                    <Typography
                                        sx={{
                                            color: '#808080',
                                            fontSize: '12px',
                                            fontFamily: 'Open Sans',
                                        }}
                                    >
                                        Password should contain uppercase
                                        letter(s), numbers(s) and special
                                        character(s)
                                    </Typography>
                                </Box>
                            </div>
                        ) : <div>Good</div>}

                    </FormControl>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* <Controller
                                        name="rememberMe"
                                        control={control}
                                        render={({
                                            field: { value },
                                            formState,
                                        }) => {
                                            return ( */}
                        <Checkbox
                            checked
                            name="Remember me?"
                            inputProps={{
                                'aria-label':
                                    'I agree to all the Terms and Privacy policy',
                            }}
                            sx={{
                                color: '#D1D1D1',
                                padding: 0,
                            }}
                        />
                        {/* )
                                        }}
                                    /> */}
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'Open Sans',
                                color: '#23282B',
                                ml: '12px',
                            }}
                        >
                            I agree to all the Terms and Privacy policy
                        </Typography>
                    </Box>

                    {/* Form */}

                    {/* Buttons */}

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#05668D',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                width: '89%',
                                padding: '16px, 36px, 16px, 36px',
                                height: '52px',
                            }}
                            variant="contained"
                            disabled={!isDirty || !isValid}
                            onClick={handleSubmit(onSubmit)}
                        >
                            <Typography
                                fontSize={'16px'}
                                fontWeight={700}
                                fontStyle={'bold'}
                                textTransform="capitalize"
                            >
                                Create Account
                            </Typography>
                        </Button>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '12px',
                                mb: '6px',
                                position: 'relative',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            {/* <LineIcon /> */}
                            <Box
                                sx={{
                                    height: '1px',
                                    width: '90%',
                                    alignSelf: 'center',
                                    backgroundColor: '#D9D9D9',
                                    position: 'absolute',
                                }}
                            />
                            <Typography
                                sx={{
                                    px: '30px',
                                    backgroundColor: '#fcfbf8',
                                    zIndex: 1,
                                }}
                            >
                                OR
                            </Typography>
                            {/* <LineIcon /> */}
                        </Box>

                        <Button
                            variant="outlined"
                            // startIcon={<GoogleIcon />}
                            sx={{
                                color: '#05668D',
                                borderRadius: '8px',
                                width: '89%',
                                padding: '16px, 36px, 16px, 36px',
                                height: '52px',
                                textTransform: 'capitalize',
                            }}
                        >
                            <Typography fontWeight={'600'}>
                                Sign up with Google
                            </Typography>
                        </Button>
                        <Box
                            sx={{
                                display: 'flex',
                                mt: '48px',
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
                                sx={{ color: '#05668D' }}
                            >
                                Sign in
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default UserCreate;
