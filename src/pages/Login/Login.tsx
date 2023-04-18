import {
    Typography,
    Checkbox,
    Button,
    InputBase,
    InputLabel,
} from '@mui/material';
import Box from '@mui/material/Box';
import EllipsisIcon from '../../assets/icons/EllipsisIcon';
import EmailFormIcon from '../../assets/icons/EmailFormIcon';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import JobFactorIcon from '../../assets/icons/JobFactorIcon';
import PasswordFormIcon from '../../assets/icons/PasswordFormIcon';
import profileReview from './../../assets/images/profileReview.png';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/context/AuthContext';
import { useEffect } from 'react';

interface ILoginForm {
    emailAddress: string;
    password: string;
    rememberMe?: boolean;
}

const loginTitle = 'Professionals meet companies';
const loginSubHeading =
    'Start your journey with us, discover the world’s best platform that connects professionals and companies';
const cardReiew =
    'Absolutely amazing, the vetting algorithym is the best at proving ones level of experience';

function Login() {
    let navigate = useNavigate();
    const { signIn, isAuthenticated, accessToken } = useAuth();
    const {
        control,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm<ILoginForm>();

    useEffect(() => {
        if (isAuthenticated && !!accessToken) {
            navigate('/');
        }
    }, [isAuthenticated, accessToken]);

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        await signIn(data.emailAddress, data.password);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: { md: 'row', xs: 'column' },
                    alignItems: 'center',
                    backgroundColor: '#FCFBF8',
                    width: '100%',
                }}
            >
                {/* left column */}
                <Box
                    sx={{
                        backgroundColor: '#F1F1F1',
                        flexBasis: '33.33%',
                        m: { md: '40px', xs: '0px' },
                        minHeight: { md: 'calc(100vh - 80px)', xs: '100%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: { lg: '553px', xs: '50%' },
                        gap: '40px',
                    }}
                >
                    {/* Column1 */}
                    {/* Logo */}
                    <Box sx={{ mt: '51px', width: '80%', alignSelf: 'center' }}>
                        <JobFactorIcon />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '45px',
                                fontFamily: 'open sans',
                                fontStyle: 'semibold',
                                fontWeight: '600',
                                textAlign: 'left',
                                mb: '28px',
                                mt: '10px',
                                px: '53px',
                                color: '#23282B',
                                lineHeight: '52px',
                                opacity: '0.85',
                            }}
                        >
                            {loginTitle}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontFamily: 'open sans',
                                lineHeight: '28px',
                                color: '#23282B',
                                textAlign: 'left',
                                px: '53px',
                                opacity: '0.65',
                            }}
                        >
                            {loginSubHeading}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '80%', alignSelf: 'center' }}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: '24px 20px',
                                backgroundColor: '#FFFFFF',
                                mb: '24px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'open sans',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    lineHeight: '28px',
                                    mb: '28px',
                                    color: '#23282B',
                                    opacity: '0.75',
                                }}
                            >
                                {cardReiew}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={profileReview}
                                    alt='Reviewer Avatar'
                                    height='64'
                                    width='64'
                                ></img>
                                <Box sx={{ ml: '16px' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontFamily: 'open sans',
                                            fontWeight: '700',
                                            opacity: ' 0.9',
                                            color: '#23282B',
                                        }}
                                    >
                                        Mark Fisher
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontFamily: 'open sans',
                                            opacity: ' 0.75',
                                            color: '#23282B',
                                        }}
                                    >
                                        Professional
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: '24px',
                                mb: '80px',
                            }}
                        >
                            <EllipsisIcon />
                        </Box>
                    </Box>
                </Box>

                {/* right column */}
                <Box
                    sx={{
                        flexBasis: '66.66%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: '40px',
                        my: '40px',
                    }}
                >
                    {/* login form */}
                    <Box
                        sx={{
                            maxWidth: '519px',
                            width: '100%',
                            margin: '0 auto',
                        }}
                    >
                        <Box>
                            <Typography
                                fontFamily={'open sans'}
                                fontWeight={'600'}
                                fontSize={'32px'}
                                color='#23282B'
                            >
                                Welcome back,
                            </Typography>

                            <Box sx={{ mt: '32px' }}>
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
                                        htmlFor='email'
                                    >
                                        Email
                                    </InputLabel>
                                    {/* Email Address Input */}
                                    <Controller
                                        name='emailAddress'
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
                                                id='email'
                                                startAdornment={
                                                    <EmailFormIcon />
                                                }
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
                                        htmlFor='password'
                                    >
                                        Password
                                    </InputLabel>
                                    {/* Password Input */}
                                    <Controller
                                        name='password'
                                        control={control}
                                        render={({
                                                     field: { onChange, value },
                                                     fieldState: { error },
                                                     formState,
                                                 }) => (
                                            <InputBase
                                                required
                                                onChange={onChange}
                                                error={!!error}
                                                inputProps={{
                                                    autoComplete:
                                                        'new-password',
                                                    form: {
                                                        autoComplete: 'off',
                                                    },
                                                }}
                                                name='password'
                                                id='password'
                                                startAdornment={
                                                    <PasswordFormIcon />
                                                }
                                                rows={1}
                                                placeholder={'*********'}
                                                type='password'
                                                sx={{
                                                    backgroundColor: '#FFFFFF',
                                                    width: '100%',
                                                    height: '70px',
                                                    padding: '0px 16px',
                                                    fontFamily: 'open sans',
                                                    color: '#23282B',
                                                    borderBottom:
                                                        '1px solid #D9D9D9',
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
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '5px',
                                    alignContent: 'center',
                                    mb: '28px',
                                    mt: '12px',
                                }}
                            >
                                <InfoIcon />
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        fontSize: '12px',
                                        fontFamily: 'Open Sans',
                                    }}
                                >
                                    Password should contain uppercase letter(s),
                                    numbers(s) and special character(s)
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: '56px',
                                    mr: '16px',
                                }}
                            >
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
                                        name='Remember me?'
                                        inputProps={{
                                            'aria-label': 'Remember Me?',
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
                                        Remember me?
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        color: '#05668D',
                                    }}
                                >
                                    Forgot Password?
                                </Typography>
                            </Box>
                        </Box>

                        {/*  */}
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
                                sx={{ py: 1.5, width: '90%' }}
                                variant='contained'
                                disabled={!isValid}
                                onClick={handleSubmit(onSubmit)}
                            >
                                Login
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
                                sx={{ py: 1.5, width: '90%', mt: 1 }}
                                variant='outlined'
                                startIcon={<GoogleIcon />}

                            >
                                Sign in with google
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
                                    Don’t have an account?
                                </Typography>
                                {/* Text link */}
                                <Typography
                                    fontWeight={600}
                                    fontSize={'16px'}
                                    fontStyle={'semibold'}
                                    sx={{ color: '#05668D' }}
                                >
                                    Create account
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;
