import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { useForm, Controller } from 'react-hook-form';
import cover from '../../../assets/images/companyCover.png';
import profile from '../../../assets/images/companyProfile.png';
import CommonDialog from '../../common/CommonDialog';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from '../../../components/Image';
import BriefcaseFormIcon from '../../../assets/icons/BriefcaseFormIcon';
import ProfileFormIcon from '../../../assets/icons/ProfileFormIcon';
import CameraIcon from '../../../assets/icons/CameraIconMui';
import TrashIcon from '../../../assets/icons/TrashIconMui';
import Building from '../../../assets/icons/Building';

interface EditProfileModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileModal = (props: EditProfileModalProps) => {
    const { open, setOpen } = props;
    const {
        control
        // handleSubmit,
        // formState: { isValid, errors }
    } = useForm();

    const handleOnClose = () => {
        setOpen(false);
    };

    return (
        <CommonDialog
            open={open}
            onClose={handleOnClose}
            title="Edit profile info"
            contentPaddingX={false}
            actions={
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={2.5}>
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: 'transparent',
                                borderRadius: '20px',
                                borderColor: '#808080',
                                p: '10px 12px',
                                fontWeight: '400',
                                color: '#808080',
                                fontSize: '14px',
                                textTransform: 'capitalize',
                                lineHeight: '20px'
                            }}
                            startIcon={<PeopleAltIcon htmlColor="#49B6FF" />}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Connections
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            sx={{
                                color: '#FFFFFF',
                                fontWeight: '600',
                                fontSize: '14px',
                                textTransform: 'capitalize',
                                p: '14px 16px'
                            }}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            }
        >
            <Box bgcolor="#fff" overflow="hidden">
                <Box position="relative" pb={6} mt={2}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-around"
                        position="relative"
                        height="200px"
                    >
                        <img
                            style={{
                                height: '200px',
                                width: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                position: 'absolute'
                            }}
                            alt="Cover"
                            src={cover}
                        />

                        <Grid container gap={2.5} width="auto">
                            <IconButton
                                style={{
                                    backgroundColor: '#0000003F',
                                    color: '#FFFFFF',
                                    width: '44px',
                                    height: '44px'
                                }}
                            >
                                <CameraIcon />
                            </IconButton>
                            <IconButton
                                style={{
                                    backgroundColor: '#0000003F',
                                    color: '#FFFFFF',
                                    width: '44px',
                                    height: '44px'
                                }}
                            >
                                <TrashIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        position={'absolute'}
                        bottom={0}
                        justifyContent="center"
                        alignItems="center"
                        width="150px"
                        height="150px"
                        ml={4}
                    >
                        <Box
                            borderRadius="50%"
                            overflow="hidden"
                            width="fit-content"
                            position="absolute"
                            bottom={0}
                        >
                            <Image
                                src={profile}
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover'
                                }}
                                alt="Ronald Richard"
                                border="3px #fff solid"
                                borderRadius="50%"
                                display="block"
                            />
                        </Box>
                        <Box mt={9}>
                            <IconButton
                                style={{
                                    backgroundColor: '#0000003F',
                                    color: '#FFFFFF',
                                    width: '44px',
                                    height: '44px'
                                }}
                            >
                                <CameraIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box px={4} mt={2}>
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
                        htmlFor="companyName"
                        required
                    >
                        Company name
                    </InputLabel>
                    <Controller
                        name="companyName"
                        control={control}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                            formState
                        }) => (
                            <InputBase
                                required
                                onChange={onChange}
                                inputProps={{
                                    autoComplete: '',
                                    form: {
                                        autoComplete: 'off'
                                    },
                                    inputMode: 'text'
                                }}
                                id="companyName"
                                startAdornment={<ProfileFormIcon />}
                                rows={1}
                                sx={{
                                    backgroundColor: '#FFFAF1',
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
                        htmlFor="yearFounded"
                        required
                    >
                        Year founded
                    </InputLabel>
                    {/* Email Address Input */}
                    <Controller
                        name="yearFounded"
                        control={control}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                            formState
                        }) => (
                            <InputBase
                                required
                                onChange={onChange}
                                inputProps={{
                                    autoComplete: '',
                                    form: {
                                        autoComplete: 'off'
                                    },
                                    inputMode: 'text'
                                }}
                                id="yearFounded"
                                startAdornment={<BriefcaseFormIcon />}
                                rows={1}
                                sx={{
                                    backgroundColor: '#FFFAF1',
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
                        htmlFor="tagline"
                        required
                    >
                        Company tagline
                    </InputLabel>
                    {/* Email Address Input */}
                    <Controller
                        name="tagline"
                        control={control}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                            formState
                        }) => (
                            <InputBase
                                required
                                onChange={onChange}
                                inputProps={{
                                    autoComplete: '',
                                    form: {
                                        autoComplete: 'off'
                                    },
                                    inputMode: 'text'
                                }}
                                id="tagline"
                                startAdornment={<Building />}
                                rows={1}
                                sx={{
                                    backgroundColor: '#FFFAF1',
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
            </Box>
        </CommonDialog>
    );
};

export default EditProfileModal;
