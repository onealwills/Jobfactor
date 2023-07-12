import React, { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SteppedProgress from '../components/SteppedProgress';
import SteppedSectionHeader from '../components/SteppedSectionHeader';
import DocumentUploadIcon from '../../../assets/icons/DocumentUploadMui';
import Button from '@mui/material/Button';
import {
    Avatar,
    InputBase,
    InputLabel,
    MenuItem,
    Radio,
    Select,
    TableCell,
    TableRow,
    TextField
} from '@mui/material';
import UserFormIcon from '../../../assets/icons/UserFormIcon';
import Building from '../../../assets/icons/Building';
import Calendar from '../components/Calendar';
import SummaryForm from '../../../assets/icons/SummaryForm';
import Dropdown from '../../../assets/icons/Dropdown';
import Flag from '../../../assets/icons/Flag';
import UserFormGroup from '../../../assets/icons/UserFormGroup';
import UserDetails from '../components/UserDetails';
import { useNavigate } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import SearchIcon from '../../../assets/icons/SearchIcon';
import TableWrapper from '../components/TableWrapper';
import Delete from '../../../assets/icons/Delete';
import { data } from './constants/profile-wizard.constants';
import { useDropzone } from 'react-dropzone';
import { User } from './types/IUser';
import { useAuth } from '../../../utils/context/AuthContext';
import { useUploadCompanyProfilePhoto } from '../../../utils/hooks/api/users/useUploadCompanyProfilePhoto';
import SnackAlert from '../../../components/Snackbar';

function ProfileWizard() {
    const videoRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [showAlert, setShowAlert] = useState(false);
    const [step, setStep] = useState(1);
    const [companyName, setCompanyName] = useState('');
    const [yearFounded, setYearFounded] = useState<Dayjs | null>(null);
    const [zipCode, setZipCode] = useState('');
    const [summary, setSummary] = useState('');
    const [country, setCountry] = useState('U.S');
    const [state, setState] = useState('Texas');
    const [city, setCity] = useState('Miami');
    const [streetAddress, setStreetAddress] = useState('');
    const [streetAddress2, setStreetAddress2] = useState('');
    const [bio, setBio] = useState('');
    const [companySize, setCompanySize] = useState(
        'Fortune 500, Ivy league companies'
    );
    const [industry, setIndustry] = useState('Please Select');
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [addedusers, setAddedUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    const [videoSrc, setVideoSrc] = useState('');
    const [image, setImage] = useState('');
    const [page, setPage] = useState(0);
    const [addedUsersTablePage, setAddedUsersTablePage] = useState(0);
    const rowsPerPage = 10;
    const { user, setUser } = useAuth();
    const uploadImage = useUploadCompanyProfilePhoto();
    const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
        let data = {
            profileId: user?.primaryCompanyProfile?.id ?? '',
            file: acceptedFiles[0]
        }
        uploadImage.mutate(data, {
            onSuccess: (res) => {
                setImage(String(res));
                let tempData = {
                    ...user,
                    primaryCompanyProfile: {
                        ...user?.primaryCompanyProfile,
                        photoUrl: res
                    }
                }
                setUser(tempData);
                setMessage("Profile Image Updated Successfully.");
                setType('success');
                setShowAlert(true);
            },
            onError: (res) => {
                setMessage("Error occured please try again!");
                setType('error');
                setShowAlert(true);
            }
        })
    }, [])
    const { getRootProps, getInputProps, open } = useDropzone({ onDrop, noClick: true, accept: { 'image/*': ['.jpg', '.png', '.svg'] } })

    const handleChange = (value: string) => {
        let temp = JSON.parse(JSON.stringify(data));
        if (value) {
            temp = temp.filter(
                (x: any) =>
                    x.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
            );
            setUsers(temp);
        } else {
            setUsers([]);
        }
    };

    const handleChangeFile = (
        e: any,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setState(url);
    };

    const handleChangePage = (
        page: number,
        setState: React.Dispatch<React.SetStateAction<number>>
    ) => {
        setState(page - 1);
    };

    useEffect(() => {
        if (user?.primaryCompanyProfile?.photoUrl) {
            setImage(user?.primaryCompanyProfile?.photoUrl);
        }
    }, [user?.primaryCompanyProfile?.photoUrl])

    return (
        <Container
            style={{
                paddingLeft: '35px',
                paddingRight: '0px',
                marginTop: '-48px',
                maxWidth: '100%'
            }}
        >
            <Box px={5} mb={3.5}>
                <SteppedProgress
                    mb={2.5}
                    completedSteps={3}
                    steps={[
                        'Account type',
                        'Create account',
                        'Verify email',
                        'Set-up profile'
                    ]}
                />

                <SteppedSectionHeader
                    mb={3.5}
                    activeStep={1}
                    steps={[
                        { title: 'Profile Wizard', completed: true },
                        {
                            title: 'Connections',
                            completed: addedusers.length > 0
                        }
                    ]}
                />

                <Grid container alignItems={'center'}>
                    <Grid item flexGrow={1}>
                        <Typography
                            component="h1"
                            variant="headlineMediumSemiBold"
                        >
                            Set up profile
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            gap: '16px'
                        }}
                    >
                        <Button
                            sx={{
                                background: '#F2F2F2',
                                borderRadius: '8px',
                                padding: '10px 8px',
                                maxWidth: '61px',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '20px',
                                letterSpacing: '0.0035em',
                                color: '#05668D'
                            }}
                            variant="contained"
                            onClick={() => {
                                if (
                                    step === 3 ||
                                    (step === 2 && users.length === 0)
                                ) {
                                    navigate('/');
                                } else {
                                    setStep((prev) => prev + 1);
                                }
                            }}
                        >
                            Skip
                        </Button>
                        <Button
                            sx={{
                                borderRadius: '8px',
                                padding: '16px 20px',
                                fontWeight: 600,
                                fontSize: '16px',
                                letterSpacing: '0.0015em',
                                maxWidth: '200px'
                            }}
                            onClick={() => {
                                if (
                                    step === 3 ||
                                    (step === 2 && users.length === 0)
                                ) {
                                    navigate('/');
                                } else {
                                    setStep((prev) => prev + 1);
                                }
                            }}
                            variant="contained"
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {step === 1 ? (
                <>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 0,
                            mb: 3.5
                        }}
                    >
                        <Box px={5} py={1.5}>
                            <Typography
                                component="h2"
                                variant="titleLargeSemiBold"
                                mb={1}
                            >
                                Add a profile picture and video intro.
                            </Typography>
                            <Typography
                                component="p"
                                fontWeight={400}
                                fontSize={16}
                                color="#808080"
                            >
                                This will be displayed on your profile.
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#EDEDED' }} />
                        <Box px={5} py={2.5}>
                            <Grid container gap={'57px'}>
                                <Grid item xs={2} {...getRootProps()}>
                                    <Avatar
                                        src={image}
                                        sx={{
                                            margin: 'auto',
                                            width: 100,
                                            height: 100,
                                            borderRadius: '50%',
                                            bgcolor: '#FCFBF8',
                                            cursor: 'pointer',
                                            mb: 2.5
                                        }}
                                        onClick={open}
                                    />
                                    <Typography component="p">
                                        <Typography
                                            component="span"
                                            variant="titleMediumSemiBold"
                                            sx={{ cursor: 'pointer' }}
                                            onClick={open}
                                        >
                                            Click to upload
                                        </Typography>
                                        <input
                                            type="file"
                                            ref={imageRef}
                                            accept="image/png, image/gif, image/jpeg"
                                            name="image"
                                            style={{ display: 'none' }}
                                            {...getInputProps()}
                                        />
                                        &nbsp;
                                        <Typography
                                            component="span"
                                            variant="titleSmallSemiBold"
                                            color="#808080"
                                        >
                                            or drag and drop
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="titleSmallSemiBold"
                                        color="#808080"
                                    >
                                        SVG, PNG, or JPG ( max 800 &times; 400 )
                                    </Typography>
                                </Grid>
                                <Grid item xs={9.5}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: '#FCFBF8',
                                            borderBottom: '1px solid #D9D9D9',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {videoSrc ? (
                                            <video
                                                controls
                                                src={videoSrc}
                                                width="100%"
                                                style={{ aspectRatio: '16/9' }}
                                            ></video>
                                        ) : (
                                            <>
                                                <IconButton
                                                    sx={{
                                                        height: 48,
                                                        width: 48,
                                                        backgroundColor:
                                                            '#EDEDED'
                                                    }}
                                                    onClick={() =>
                                                        videoRef.current?.click()
                                                    }
                                                >
                                                    <DocumentUploadIcon htmlColor="#05668D" />
                                                    <input
                                                        type="file"
                                                        ref={videoRef}
                                                        accept="video/mp4,video/x-m4v,video/*"
                                                        name="video"
                                                        onChange={(e) =>
                                                            handleChangeFile(
                                                                e,
                                                                setVideoSrc
                                                            )
                                                        }
                                                        style={{
                                                            display: 'none'
                                                        }}
                                                    />
                                                </IconButton>
                                                <Typography
                                                    component="p"
                                                    fontWeight={600}
                                                    fontSize={14}
                                                    color="#808080"
                                                    width="100%"
                                                    textAlign="center"
                                                >
                                                    Upload an intro video
                                                </Typography>
                                            </>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 0,
                            px: 5,
                            py: 1.5,
                            mb: 3.5
                        }}
                    >
                        <Box mb={1.5}>
                            <Typography
                                component="h2"
                                fontWeight={600}
                                fontSize={20}
                                mb={1}
                            >
                                Personal Details
                            </Typography>
                            <Typography
                                component="p"
                                fontWeight={400}
                                fontSize={16}
                                color="#808080"
                            >
                                Fields with * are required fields.
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#EDEDED' }} />
                        <Grid container spacing={'32px'} mt={1.5}>
                            <Grid item xs={6} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '111px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Company name
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                    value={companyName}
                                    placeholder="Please enter your company  name"
                                    startAdornment={<UserFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
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
                            </Grid>
                            <Grid item xs={6} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '108px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Industry
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) =>
                                        setIndustry(e.target.value)
                                    }
                                    value={industry}
                                    placeholder="Please enter your industry"
                                    startAdornment={<Building />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
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
                            </Grid>
                            <Grid item xs={6}>
                                <Calendar
                                    label="Year founded"
                                    handleChange={(date) =>
                                        setYearFounded(date)
                                    }
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    position: 'relative',
                                    '& .MuiInputBase-root::before': {
                                        borderColor: '#D9D9D9'
                                    },
                                    '& .MuiInputBase-root::after': {
                                        borderBottom: '1px solid #D9D9D9'
                                    }
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '108px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Company size
                                </InputLabel>
                                <Select
                                    value={companySize}
                                    onChange={(e) =>
                                        setCompanySize(e.target.value)
                                    }
                                    fullWidth
                                    variant="filled"
                                    IconComponent={() => <Dropdown />}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        color: '#23282B',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative'
                                        },
                                        '& 	.MuiInputBase-input:focus': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    renderValue={(e) => <p>{companySize}</p>}
                                    startAdornment={<UserFormGroup />}
                                >
                                    <MenuItem value="Fortune 500, Ivy league companies">
                                        <Radio
                                            checked={
                                                companySize ===
                                                'Fortune 500, Ivy league companies'
                                            }
                                        />{' '}
                                        Fortune 500, Ivy league companies
                                    </MenuItem>
                                    <MenuItem value="Fortune 300, Ivy league companies">
                                        <Radio
                                            checked={
                                                companySize ===
                                                'Fortune 300, Ivy league companies'
                                            }
                                        />{' '}
                                        Fortune 300, Ivy league companies
                                    </MenuItem>
                                    <MenuItem value="Fortune 400, Ivy league companies">
                                        <Radio
                                            checked={
                                                companySize ===
                                                'Fortune 400, Ivy league companies'
                                            }
                                        />{' '}
                                        Fortune 400, Ivy league companies
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '108px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Company tagline or summary
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) => setSummary(e.target.value)}
                                    value={summary}
                                    placeholder="Please enter your company tagline or summary "
                                    startAdornment={<SummaryForm />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
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
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    position: 'relative',
                                    '& .MuiInputBase-root::before': {
                                        borderColor: '#D9D9D9'
                                    },
                                    '& .MuiInputBase-root::after': {
                                        borderBottom: '1px solid #D9D9D9'
                                    }
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '108px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Country
                                </InputLabel>
                                <Select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    fullWidth
                                    variant="filled"
                                    IconComponent={() => <Dropdown />}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        color: '#23282B',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative'
                                        },
                                        '& 	.MuiInputBase-input:focus': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    renderValue={(e) => <p>{country}</p>}
                                    startAdornment={<Flag />}
                                >
                                    <MenuItem value="U.S">
                                        <Radio checked={country === 'U.S'} />{' '}
                                        U.S
                                    </MenuItem>
                                    <MenuItem value="Canada">
                                        <Radio checked={country === 'Canada'} />{' '}
                                        Canada
                                    </MenuItem>
                                    <MenuItem value="Pakistan">
                                        <Radio
                                            checked={country === 'Pakistan'}
                                        />{' '}
                                        Pakistan
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    position: 'relative',
                                    '& .MuiInputBase-root::before': {
                                        borderColor: '#D9D9D9'
                                    },
                                    '& .MuiInputBase-root::after': {
                                        borderBottom: '1px solid #D9D9D9'
                                    }
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '58px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    State
                                </InputLabel>
                                <Select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    fullWidth
                                    variant="filled"
                                    IconComponent={() => <Dropdown />}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        color: '#23282B',
                                        '& 	.MuiInputBase-input:focus': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    renderValue={(e) => <p>{state}</p>}
                                >
                                    <MenuItem value="Texas">
                                        <Radio checked={state === 'Texas'} />{' '}
                                        Texas
                                    </MenuItem>
                                    <MenuItem value="California">
                                        <Radio
                                            checked={state === 'California'}
                                        />{' '}
                                        California
                                    </MenuItem>
                                    <MenuItem value="Vyoming">
                                        <Radio checked={state === 'Vyoming'} />{' '}
                                        Vyoming
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    position: 'relative',
                                    '& .MuiInputBase-root::before': {
                                        borderColor: '#D9D9D9'
                                    },
                                    '& .MuiInputBase-root::after': {
                                        borderBottom: '1px solid #D9D9D9'
                                    }
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '59px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    City
                                </InputLabel>
                                <Select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    fullWidth
                                    variant="filled"
                                    IconComponent={() => <Dropdown />}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '70px',
                                        padding: '0px 16px',
                                        color: '#23282B',
                                        '& 	.MuiInputBase-input:focus': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    renderValue={(e) => <p>{city}</p>}
                                >
                                    <MenuItem value="Miami">
                                        <Radio checked={city === 'Miami'} />{' '}
                                        Miami
                                    </MenuItem>
                                    <MenuItem value="New York">
                                        <Radio checked={city === 'New York'} />{' '}
                                        New York
                                    </MenuItem>
                                    <MenuItem value="Chicago">
                                        <Radio checked={city === 'Chicago'} />{' '}
                                        Chicago
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={9} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '48px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Street address 1
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) =>
                                        setStreetAddress(e.target.value)
                                    }
                                    value={streetAddress}
                                    placeholder="Please enter your street address"
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '60px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            position: 'relative',
                                            top: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '48px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Zipcode
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) => setZipCode(e.target.value)}
                                    value={zipCode}
                                    placeholder="Please enter your zipcode"
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '60px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            position: 'relative',
                                            top: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '48px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans'
                                    }}
                                    required
                                >
                                    Street address 2
                                </InputLabel>
                                <InputBase
                                    required
                                    onChange={(e) =>
                                        setStreetAddress2(e.target.value)
                                    }
                                    value={streetAddress2}
                                    placeholder="Please enter your street address 2"
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        height: '60px',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            position: 'relative',
                                            top: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ position: 'relative' }}>
                                <InputLabel
                                    sx={{
                                        color: '#747474',
                                        fontSize: '14px',
                                        position: 'absolute',
                                        top: '38px',
                                        left: '48px',
                                        zIndex: 1,
                                        fontFamily: 'Open Sans',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}
                                >
                                    <SummaryForm /> Short Bio: tell us a little
                                    about your company
                                </InputLabel>
                                <InputBase
                                    onChange={(e) => setBio(e.target.value)}
                                    multiline
                                    minRows={10}
                                    value={bio}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
                                        width: '100%',
                                        padding: '0px 16px',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: '1px solid #D9D9D9',
                                        '& 	.MuiInputBase-input': {
                                            ml: '20px',
                                            position: 'relative',
                                            top: '28px',
                                            left: '39px',
                                            pb: '30px'
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </>
            ) : step === 2 ? (
                <>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 0,
                            mb: 3.5
                        }}
                    >
                        <Box px={5} py={1.5}>
                            <Typography
                                component="h2"
                                variant="headlineSmallSemiBold"
                                mb={1}
                            >
                                Add employees in your company
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#EDEDED' }} />
                        <Box
                            sx={{
                                m: '28px 40px'
                            }}
                        >
                            <TextField
                                variant="filled"
                                onChange={(e) => {
                                    handleChange(e.target.value);
                                    setSearch(e.target.value);
                                }}
                                value={search}
                                fullWidth
                                placeholder="Search by title, skill or company"
                                InputProps={{
                                    startAdornment: <SearchIcon />
                                }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: '#FFFAF1',
                                        fontFamily: 'open sans',
                                        color: '#23282B',
                                        borderBottom: 0,
                                        pb: 2
                                    },
                                    '& .MuiInputBase-root::before': {
                                        borderBottom: 0
                                    },
                                    '& .MuiInputBase-root::after': {
                                        borderBottom: 0
                                    },
                                    '& .MuiInputBase-root svg': {
                                        minWidth: '20px',
                                        minHeight: '20px',
                                        ml: '10px',
                                        mr: '10px',
                                        mt: '17px'
                                    }
                                }}
                            />
                        </Box>
                        <TableWrapper
                            handleChangePage={(page) =>
                                handleChangePage(page, setPage)
                            }
                            rowsPerPage={rowsPerPage}
                            data={users}
                            hideHeaders={true}
                        >
                            {users
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((user: any, index: number) => (
                                    <TableRow key={`user_${index}`}>
                                        <TableCell
                                            sx={{
                                                padding: '40px 32px',
                                                paddingBottom: '25px'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'inset',
                                                    gap: '20px'
                                                }}
                                            >
                                                <UserDetails user={user} />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'flex-end',
                                                        gap: '20px',
                                                        width: '100%',
                                                        justifyContent:
                                                            'flex-end',
                                                        '& .Mui-disabled': {
                                                            background:
                                                                '#EDEDED',
                                                            color: '#808080',
                                                            borderColor:
                                                                '#EDEDED'
                                                        }
                                                    }}
                                                >
                                                    <Button
                                                        sx={{
                                                            borderRadius: '8px',
                                                            background:
                                                                '#05668D',
                                                            padding:
                                                                '10px 36px',
                                                            border: '1px solid #05668D',
                                                            color: '#FFFFFF',
                                                            fontSize: '14px',
                                                            fontWeight: '700',
                                                            textTransform:
                                                                'capitalize',
                                                            width: '120px',
                                                            minWidth: '120px',
                                                            boxShadow: 'none',
                                                            textDecoration:
                                                                'none',
                                                            ':hover': {
                                                                background:
                                                                    '#05668D',
                                                                color: '#FFFF'
                                                            }
                                                        }}
                                                        onClick={() => {
                                                            setAddedUsers([
                                                                ...addedusers,
                                                                user
                                                            ]);
                                                        }}
                                                        disabled={
                                                            addedusers.filter(
                                                                (x: User) =>
                                                                    x.id ===
                                                                    user.id
                                                            ).length > 0
                                                        }
                                                    >
                                                        {addedusers.filter(
                                                            (x: User) =>
                                                                x.id === user.id
                                                        ).length > 0
                                                            ? 'Added'
                                                            : 'Add'}
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableWrapper>
                    </Paper>
                </>
            ) : step === 3 ? (
                <>
                    <TableWrapper
                        handleChangePage={(page) =>
                            handleChangePage(page, setAddedUsersTablePage)
                        }
                        rowsPerPage={rowsPerPage}
                        data={addedusers}
                    >
                        {addedusers
                            .slice(
                                addedUsersTablePage * rowsPerPage,
                                addedUsersTablePage * rowsPerPage + rowsPerPage
                            )
                            .map((user: any, index: number) => (
                                <TableRow key={`user_${index}`}>
                                    <TableCell
                                        sx={{
                                            padding: '40px 32px',
                                            paddingBottom: '25px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'inset',
                                                gap: '20px'
                                            }}
                                        >
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={user?.image}
                                                sx={{ width: 64, height: 64 }}
                                            />
                                            <Box sx={{ width: '100%' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '12px'
                                                    }}
                                                >
                                                    <Typography
                                                        component={'h1'}
                                                        sx={{
                                                            fontSize: '20px',
                                                            fontWeight: '600',
                                                            fontFamily:
                                                                'Open Sans',
                                                            color: '#494949'
                                                        }}
                                                    >
                                                        {user.name}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '20px',
                                                            fontWeight: '600',
                                                            fontFamily:
                                                                'Open Sans',
                                                            color: '#FFFFFF',
                                                            background:
                                                                '#49B6FF',
                                                            borderRadius: '6px',
                                                            padding: '0px 12px'
                                                        }}
                                                    >
                                                        {user.points}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '20px'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontFamily:
                                                                'Open Sans',
                                                            color: '#808080',
                                                            letterSpacing:
                                                                '0.0015em'
                                                        }}
                                                    >
                                                        {user.designation}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                p: '6px 16px',
                                                border: '1px solid #D9D9D9',
                                                borderRadius: '4px',
                                                width: 'fit-content'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '16px',
                                                    color: '#808080'
                                                }}
                                            >
                                                {user.email}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="titleMediumRegular">
                                            Aug 07, 2021
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            '& .MuiInputBase-root::before': {
                                                borderBottom: 0
                                            }
                                        }}
                                    >
                                        <Select
                                            variant="filled"
                                            sx={{
                                                '& .MuiSelect-select': {
                                                    background: '#F2F2F2',
                                                    borderRadius: '4px',
                                                    minWidth: '157px',
                                                    p: '6px 16px'
                                                }
                                            }}
                                            value="Administrator"
                                        >
                                            <MenuItem value={'Administrator'}>
                                                Administrator
                                            </MenuItem>
                                            <MenuItem value={'Test 1'}>
                                                Test 1
                                            </MenuItem>
                                            <MenuItem value={'Test 2'}>
                                                Test 2
                                            </MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={() =>
                                                setAddedUsers(
                                                    addedusers.filter(
                                                        (x) => x.id !== user.id
                                                    )
                                                )
                                            }
                                        >
                                            <Delete color="#747474" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableWrapper>
                </>
            ) : null}
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </Container>
    );
}

export default ProfileWizard;
