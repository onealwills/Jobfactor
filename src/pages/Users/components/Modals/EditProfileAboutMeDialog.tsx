import {
    Button,
    Divider,
    Stack,
    TextareaAutosize,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useState } from 'react';
import CommonDialog from '../../../common/CommonDialog';

interface IEditProfileAboutMeDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileAboutMeDialog = (props: IEditProfileAboutMeDialogProps) => {
    const { open, setOpen } = props;

    const [aboutMe, setAboutMe] = useState(
        "Hello! I'm Solomon,  \n \nA web3 Product Designer with a dream of building a multimillion dollars design agency. \nWith over 6 years of experience in experiential marketing, brand strategy, and design, I have worked across multiple verticals of businesses ranging from FMCG’s, E-commerce, Fin-tech, Ed-tech, and Prop-tech. ... "
    );
    const handleOnClose = () => {
        setOpen(false);
    };

    const maxCount = '2,600';

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAboutMe(event.target.value);
    };

    return (
        <CommonDialog open={open} onClose={handleOnClose} title="About me">
            <Stack>
                <Typography
                    variant="bodyLargeRegular"
                    color="#494949"
                    sx={{ mt: 1 }}
                >
                    You can write about your years of experience, industry, or
                    skills. People also talk about their achievements or
                    previous job experiences.
                </Typography>

                <Box
                    sx={{
                        backgroundColor: '#FFFAF1',
                        color: '#808080',
                        mt: 4,
                        p: 2
                    }}
                >
                    <TextareaAutosize
                        style={{
                            width: '100%',
                            backgroundColor: '#FFFAF1',
                            color: '#808080',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            border: 'none',
                            outline: 'none',
                            textAlign: 'justify'
                        }}
                        placeholder="Enter your about me"
                        value={aboutMe}
                        onChange={handleTextareaChange}
                    />
                </Box>
            </Stack>
            <Divider />
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {aboutMe?.length}/{maxCount}
            </Box>
            <Button variant="contained" sx={{ width: 76 }}>
                Save
            </Button>
        </CommonDialog>
    );
};

export default EditProfileAboutMeDialog;
