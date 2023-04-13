import { Box, Button, FormControl, FormLabel, InputBase, InputLabel, Typography } from '@mui/material';
import React from 'react';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps1';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate  } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from "./updateAction";

interface IUserInfo {
    
    emailAddress: string;
    password: string;
    rememberMe?: boolean;
}

function UserData() {
    let navigate = useNavigate();
    const { control, handleSubmit, formState } = useForm<IUserInfo>();
    const { isDirty, isValid, errors } = formState;
    const { actions } = useStateMachine({ updateAction });

    const onSubmit: SubmitHandler<IUserInfo> = async (data) => {
        console.log(data);
        actions.updateAction(data);
        navigate("./userData")
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
                                        htmlFor="email"
                                    >
                                        Email
                                    </InputLabel>
                                    {/* Email Address Input */}
                                    <Controller
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
                                                id="email"
                                                // startAdornment={
                                                //     <EmailFormIcon />
                                                // }
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
                                disabled={!isValid}
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
                                <Typography
                                    sx={{ color: '#808080', mr: '10px' }}
                                >
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


                        </FormLabel>
                    </FormControl>
                </Box>
            </Box>
        </>
    );
}

export default UserData;
