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
            return (
                <SelectQualificationType 
                    handleContinue={(type) => setType(type)}
                />
            )
        }

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