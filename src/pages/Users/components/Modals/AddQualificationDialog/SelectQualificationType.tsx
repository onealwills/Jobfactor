import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CommonRadioList from '../../../../common/CommonRadioList';
import BriefcaseFormIcon from '../../../../../assets/icons/BriefcaseFormIcon';
import { Qualification } from '../../../types/Qualification';

interface IAddQualificationDialogProps {
    handleContinue: (selectedType: Qualification) => void;
}

const SelectQualificationType = ({
    handleContinue,
}: IAddQualificationDialogProps) => {

    const [type, setType] = useState<Qualification | null>(null);

    return (
        <>
            <Box mt={2}>
                <CommonRadioList
                        label="Qualifications"
                        description="Please select"
                        startAdornment={<BriefcaseFormIcon />}
                        options={[
                            {label: 'Education', value: Qualification.Education},
                            {label: 'Work experience', value: Qualification.WorkExperience},
                            {label: 'Volunteer service', value: Qualification.VolunteerService},
                            {label: 'License and certifications', value: Qualification.LicenseAndCertifications},
                            {label: 'Tests', value: Qualification.Tests},
                            {label: 'Awards', value: Qualification.Awards},
                        ]}
                        onSelect={(selectedType: Qualification) => setType(selectedType)}
                />
                <Button variant="contained" onClick={() => type && handleContinue(type)} disabled={!type}>
                    Continue
                </Button>
            </Box>
        </>
    );
};

export default SelectQualificationType;