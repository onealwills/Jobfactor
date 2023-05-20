import CommonDialog from '../../../../common/CommonDialog';

import { useState } from 'react';

import { Qualification } from '../../../types/Qualification';
import SelectQualificationType from './SelectQualificationType';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm';
import VolunteerServiceForm from './VolunteerServiceForm';
import LicenseAndCertificationsForm from './LicenseAndCertificationsForm';
import TestsForm from './TestsForm';
import AwardsForm from './AwardsForm';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IAddQualificationDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddQualificationDialog = (props: IAddQualificationDialogProps) => {

    const [ type, setType ] = useState<Qualification | null>(null);

    const { open, setOpen } = props;

    const handleOnClose = () => {
        setType(null);
        setOpen(false);
    };

    const getCurrentView = () => {
        if (!type) {
            return (<SelectQualificationType 
                handleContinue={(type) => setType(type)}
            />)
        }

        const scrollingView = () => {
            switch (type) {
                case Qualification.Education:
                    return (<EducationForm />);
                case Qualification.WorkExperience:
                    return (<WorkExperienceForm />);
                case Qualification.VolunteerService:
                    return (<VolunteerServiceForm />);
                case Qualification.LicenseAndCertifications:
                    return (<LicenseAndCertificationsForm />);
                case Qualification.Tests:
                    return (<TestsForm />);
                case Qualification.Awards:
                    return (<AwardsForm />);
                default:
                    return null;
            }
        }

        return (
            <Box maxHeight="356px" style={{
                overflowY: 'scroll',
            }}>
                <Typography
                    mt={2}
                    mb={2}
                    component="p"
                    fontSize={14}
                    fontWeight={600}
                    color="#494949"
                >
                    * Indicates required
                </Typography>
                { scrollingView() }
            </Box>
        )
    }

    return (
        <CommonDialog
            open={open}
            onClose={handleOnClose}
            title="Add a qualification"
            actions={
                type && (
                    <Button variant="contained" style={{ height: '48px' }}>
                        <Typography
                            fontWeight={500}
                        >
                            Save
                        </Typography>
                    </Button>
                )
            }
        > 
            { getCurrentView() }
        </CommonDialog>
    );
};

export default AddQualificationDialog;