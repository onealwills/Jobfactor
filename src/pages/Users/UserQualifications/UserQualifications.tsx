import React from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BriefcaseIcon from '../../../assets/icons/BriefcaseIconMui';

function UserQualifications() {
    return (
        <>
            <Paper
                sx={{
                    px: 4,
                    py: 2,
                    mb: 1,
                }}
                style={{
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                }}
            >
                <Typography component="p" color="#808080">
                    We use these details to improve your jobfactor score and also show you jobs that match your unique skills and experience
                </Typography>
            </Paper>

            <Button
                sx={{
                    py: 1.5
                }}
                variant="contained"
                endIcon={<BriefcaseIcon />}
            >
                <Typography
                    component="span"
                    fontSize={14}
                    fontWeight={600}
                >
                    Add a Qualification
                </Typography>
            </Button>
        </>
    );
}

export default UserQualifications;
