import {
    Button,
    Divider,
    Stack,
    TextareaAutosize,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useState } from 'react';
import CommonDialog from '../../common/CommonDialog';

interface EditAboutModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAboutModal = (props: EditAboutModalProps) => {
    const { open, setOpen } = props;

    const [aboutMe, setAboutMe] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
    );
    const handleOnClose = () => {
        setOpen(false);
    };

    const maxCount = '2,600';

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAboutMe(event.target.value);
    };

    return (
        <CommonDialog
            open={open}
            onClose={handleOnClose}
            actions={
                <Button
                    variant="contained"
                    sx={{
                        minWidth: '150px',
                        width: 'auto',
                        fontFamily: 'Open Sans',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '0.001em',
                        p: '12px 59px',
                        height: '44px'
                    }}
                >
                    Save
                </Button>
            }
            title="About me"
        >
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
                            maxWidth: '800px',
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
        </CommonDialog>
    );
};

export default EditAboutModal;
