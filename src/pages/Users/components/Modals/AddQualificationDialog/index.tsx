import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import EmailFormIcon from '../../../../../assets/icons/EmailFormIcon';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CommonDialog from '../../../../common/CommonDialog';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useState } from 'react';

import { Qualification } from '../../../types/Qualification';
import SelectQualificationType from './SelectQualificationType';

interface IAddQualificationDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IQualificationFormValues {
    type?: Qualification;
}

const AddQualificationDialog = (props: IAddQualificationDialogProps) => {

    const [ formValues, setFormValues ] = useState<IQualificationFormValues>({});

    const { open, setOpen } = props;

    const handleOnClose = () => {
        setOpen(false);
    };

    const getCurrentView = () => {
        if (!formValues.type) {
            return (<SelectQualificationType handleContinue={(type) => setFormValues((prev) => ({
                ...prev,
                type
            }))}/>)
        }
        return null;
    }

    return (
        <CommonDialog
            open={open}
            onClose={handleOnClose}
            title="Add a qualification"
        >
            { getCurrentView() }
        </CommonDialog>
    );
};

export default AddQualificationDialog;