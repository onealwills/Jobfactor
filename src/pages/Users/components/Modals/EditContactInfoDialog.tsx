import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import EmailFormIcon from '../../../../assets/icons/EmailFormIcon';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CommonDialog from '../../../common/CommonDialog';

import List from '@mui/material/List';

import ProfileInfoListItem from '../ProfileInfoListItem';
import PhoneFormIcon from '../../../../assets/icons/PhoneFormIcon';
import LocationFormIcon from '../../../../assets/icons/LocationFormIcon';
import BirthdayFormIcon from '../../../../assets/icons/BirthdayFormIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';

import JobFactorIcon from '../../../../assets/icons/JobfactorIconMui';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';

interface IEditContactInfoDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditContactInfoDialog = (props: IEditContactInfoDialogProps) => {
    const [editing, setEditing] = useState<boolean>(false);

    const { open, setOpen } = props;
    const {
        control,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm();

    const handleOnClose = () => {
        setOpen(false);
    };

    return (
        <CommonDialog
            open={open}
            onClose={handleOnClose}
            title="Ronald Richard"
            actions={
                editing && (
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: 'transparent',
                                width: 'auto',
                                height: '36px',
                                borderRadius: '20px',
                                lineHeight: 1
                            }}
                            startIcon={<PeopleAltIcon htmlColor="#49B6FF" />}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            <Typography
                                fontWeight={400}
                                fontSize={14}
                                sx={{
                                    textTransform: 'none'
                                }}
                                lineHeight={1}
                            >
                                Connections
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ color: '#FFFFFF', width: 'auto' }}
                        >
                            <Typography
                                fontWeight={600}
                                fontSize={14}
                                sx={{
                                    textTransform: 'none',
                                    py: 0.75
                                }}
                            >
                                Save
                            </Typography>
                        </Button>
                    </Grid>
                )
            }
        >
            {editing ? (
                <>
                    <List
                        sx={{
                            width: '100%'
                        }}
                        component="nav"
                    >
                        <ProfileInfoListItem
                            title="Your Profile"
                            subtitle="https://Ronaldrichald.info"
                            onClick={() => {
                                /* handle navigate profile link */
                            }}
                        />
                        <ProfileInfoListItem
                            title="Email"
                            subtitle="Ronaldrichie@outlook.com"
                            onClick={() => {
                                /* handle navigate email link */
                            }}
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
                                                borderBottom:
                                                    '1px solid #D9D9D9',
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
                                                borderBottom:
                                                    '1px solid #D9D9D9',
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
                </>
            ) : (
                <>
                    <Grid pt={1} container alignItems="center">
                        <Grid item flexGrow={1}>
                            <Typography
                                component="h6"
                                fontSize={20}
                                fontWeight="600"
                                fontFamily="open sans"
                            >
                                Contact Info
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                disableRipple
                                sx={{
                                    backgroundColor: '#FCFBF8',
                                    borderRadius: '8px',
                                    padding: '0 16px'
                                }}
                                startIcon={<EditIcon />}
                                onClick={() => setEditing(true)}
                            >
                                <Typography
                                    fontWeight={600}
                                    fontSize={14}
                                    sx={{
                                        textTransform: 'none',
                                        py: 1
                                    }}
                                >
                                    Edit
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <List
                        sx={{
                            width: '100%'
                        }}
                        component="nav"
                    >
                        <ProfileInfoListItem
                            icon={<JobFactorIcon />}
                            title="Your Profile"
                            subtitle="https://Ronaldrichald.info"
                        />
                        <ProfileInfoListItem
                            icon={<PhoneIcon />}
                            title="Phone"
                            subtitle="+234 704 555 0114  (Office)"
                        />
                        <ProfileInfoListItem
                            icon={<PlaceIcon />}
                            title="Address"
                            subtitle="3891 Ranchview Dr. Richardson, California 62639"
                        />
                        <ProfileInfoListItem
                            icon={<EmailIcon />}
                            title="Email"
                            subtitle="Ronaldrichie@outlook.com"
                        />
                        <ProfileInfoListItem
                            icon={<CakeIcon />}
                            title="Birthday"
                            subtitle="May 29"
                        />
                    </List>
                </>
            )}
        </CommonDialog>);
};

export default EditContactInfoDialog;
