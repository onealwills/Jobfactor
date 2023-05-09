import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import EmailFormIcon from '../../../../assets/icons/EmailFormIcon';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import cover from '../../../../assets/images/cover.jpg';
import profile from '../../../../assets/images/profile-sq.png';

import CustomDialog from './CustomDialog';

import List from '@mui/material/List';

import ProfileInfoListItem from '../ProfileInfoListItem';
import PhoneFormIcon from '../../../../assets/icons/PhoneFormIcon';
import LocationFormIcon from '../../../../assets/icons/LocationFormIcon';
import BirthdayFormIcon from '../../../../assets/icons/BirthdayFormIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';

import JobFactorIcon from '../../../../assets/icons/JobfactorIconMui';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from '../../../../components/Image';

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
            title="Edit profile info"
            contentPaddingX={false}
            actions={
                <Grid container justifyContent="space-between" alignItems="center">
                    <Button
                        variant="outlined"
                        sx={{
                            backgroundColor: 'transparent',
                            width: 'auto',
                            height: '36px',
                            borderRadius: '20px',
                            lineHeight: 1,
                        }}
                        startIcon={<PeopleAltIcon htmlColor="#49B6FF"/>}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        <Typography
                            fontWeight={400}
                            fontSize={14}
                            sx={{
                                textTransform: 'none',
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
                                py: .75,
                            }}
                        >
                            Save
                        </Typography>
                    </Button>
                </Grid>
            }
        >
            <Box
                bgcolor="#fff"
                overflow="hidden"
            >
                <Box position="relative" pb={6} mt={2}>
                    <img
                        style={{
                            height: '200px',
                            width: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                        alt="Cover"
                        src={cover}
                    />
                    <Grid
                        container
                        gap={3}
                        position={'absolute'}
                        bottom={0}
                    >
                        <Box
                            ml={4}
                            borderRadius="50%"
                            overflow="hidden"
                            width="fit-content"
                            position="relative"
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
                    </Grid>
                </Box>
            </Box>
        </CustomDialog>);
};

export default EditProfileInfoDialog;
