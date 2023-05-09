import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import EmailFormIcon from '../../../assets/icons/EmailFormIcon';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CustomDialog from './CustomDialog';

import List from '@mui/material/List';

import ProfileInfoListItem from './ProfileInfoListItem';
import PhoneFormIcon from '../../../assets/icons/PhoneFormIcon';
import LocationFormIcon from '../../../assets/icons/LocationFormIcon';
import BirthdayFormIcon from '../../../assets/icons/BirthdayFormIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

interface IEditProfileInfoDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileInfoDialog = (props: IEditProfileInfoDialogProps) => {
    const { open, setOpen } = props;
    const {
        control,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm();

    const handleOnClose = () => {
        console.log('set the state to close');
        setOpen(false);
    };

    return (
        <CustomDialog
            open={open}
            onClose={handleOnClose}
            title="Ronald Richard"
            actions={
                <Grid container justifyContent="space-between">
                    <Button
                        variant="contained"
                        sx={{ color: '#FFFFFF', mr: 1.25, width: 'auto' }}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ color: '#FFFFFF', mr: 1.2, width: 'auto' }}
                    >
                        Save
                    </Button>
                </Grid>
            }
        >
            <List
                sx={{
                    width: '100%'
                }}
                component="nav"
            >
                <ProfileInfoListItem
                    title="Your Profile"
                    subtitle="https://Ronaldrichald.info"
                />
                <ProfileInfoListItem
                    title="Email"
                    subtitle="Ronaldrichie@outlook.com"
                />
            </List>
            <Grid container gap={1} wrap="nowrap">
                <Grid item xs={7}>
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
                            htmlFor="phone"
                        >
                            Phone
                        </InputLabel>
                        {/* Email Address Input */}
                        <Controller
                            name="emailAddress"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    required
                                    onChange={onChange}
                                    error={!!errors?.emailAddress}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off'
                                        },
                                        inputMode: 'email'
                                    }}
                                    id="email"
                                    startAdornment={<PhoneFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
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
                                            top: '8px'
                                        }
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={5}>
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
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                                formState
                            }) => (
                                <InputBase
                                    required
                                    onChange={onChange}
                                    error={!!errors?.emailAddress}
                                    inputProps={{
                                        autoComplete: '',
                                        form: {
                                            autoComplete: 'off'
                                        },
                                        inputMode: 'email'
                                    }}
                                    id="email"
                                    startAdornment={<EmailFormIcon />}
                                    rows={1}
                                    sx={{
                                        backgroundColor: '#FCFBF8',
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
                                            top: '8px'
                                        }
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Grid>
            </Grid>
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
                    Street address
                </InputLabel>
                {/* Email Address Input */}
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState
                    }) => (
                        <InputBase
                            required
                            onChange={onChange}
                            error={!!errors?.emailAddress}
                            inputProps={{
                                autoComplete: '',
                                form: {
                                    autoComplete: 'off'
                                },
                                inputMode: 'email'
                            }}
                            id="email"
                            startAdornment={<LocationFormIcon />}
                            rows={1}
                            sx={{
                                backgroundColor: '#FCFBF8',
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
                                    top: '8px'
                                }
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
                        fontFamily: 'Open Sans'
                    }}
                    htmlFor="email"
                >
                    Birthday
                </InputLabel>
                {/* Email Address Input */}
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState
                    }) => (
                        <InputBase
                            required
                            onChange={onChange}
                            error={!!errors?.emailAddress}
                            inputProps={{
                                autoComplete: '',
                                form: {
                                    autoComplete: 'off'
                                },
                                inputMode: 'email'
                            }}
                            id="email"
                            startAdornment={<BirthdayFormIcon />}
                            rows={1}
                            sx={{
                                backgroundColor: '#FCFBF8',
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
                                    top: '8px'
                                }
                            }}
                        />
                    )}
                />
            </Box>
            <ProfileInfoListItem title="Website">
                <Button
                    disableRipple
                    variant="contained"
                    sx={{
                        backgroundColor: '#FCFBF8',
                        width: 'auto'
                    }}
                    startIcon={<AddIcon htmlColor="#05668D" />}
                >
                    <Typography
                        color={'#05668D'}
                        fontFamily="open sans"
                        fontWeight={600}
                        fontSize={14}
                        sx={{ textTransform: 'none' }}
                    >
                        Add Website
                    </Typography>
                </Button>
            </ProfileInfoListItem>
        </CustomDialog>
    );
};

export default EditProfileInfoDialog;
