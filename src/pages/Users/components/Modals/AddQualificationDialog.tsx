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
import CommonRadioList from '../../../common/CommonRadioList';
import BriefcaseFormIcon from '../../../../assets/icons/BriefcaseFormIcon';

interface IAddQualificationDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddQualificationDialog = (props: IAddQualificationDialogProps) => {

    const [ editing, setEditing ] = useState<boolean>(false);

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
            title="Add a qualification"
            actions={
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
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
            }
        >
           <CommonRadioList
            label="Qualifications"
            description="Please select"
            startAdornment={<BriefcaseFormIcon />}
            options={[
                {label: 'Education', value: 'education'},
                {label: 'Work experience', value: 'work-experience'},
                {label: 'Volunteer service', value: 'volunteer-service'},
                {label: 'License and certifications', value: 'license-and-certifications'},
                {label: 'Tests', value: 'tests'},
                {label: 'Awards', value: 'awards'},
            ]}
           />
        </CommonDialog>
    );
};

export default AddQualificationDialog;