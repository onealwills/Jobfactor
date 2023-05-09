import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import EmailFormIcon from '../../../../assets/icons/EmailFormIcon';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

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
           
        </CustomDialog>);
};

export default EditProfileInfoDialog;
