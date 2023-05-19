import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PopupCheckmark from '../../../../assets/icons/PopupCheckmark';

interface PropTypes {
    open: boolean,
    handleClose: () => void,
    handleOnPostAnother: () => void
}
const DialogBox = ({ open, handleClose, handleOnPostAnother }: PropTypes) => {
    const navigate = useNavigate();
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogContent
                sx={{
                    padding: "64px 32px",
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '32px',
                    width: '404px'
                }}
            >
                <Box
                    sx={{
                        padding: "0px",
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <PopupCheckmark />
                    <DialogContentText
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeight: '400',
                            fontSize: '28px',
                            lineHeight: '36px',
                            color: '#000000'
                        }}
                    >
                        Job Posting Successful
                    </DialogContentText>
                </Box>
                <Button
                    sx={{
                        background: '#808080',
                        borderRadius: '8px',
                        padding: '16px 24px',
                        fontFamily: 'Open Sans',
                        fontWeight: '600',
                        lineHeight: '19px',
                        color: '#EDEDED',
                        textTransform: 'capitalize',
                        minWidth: '193px',
                        '&:hover': {
                            background: "#ccc"
                        }
                    }}
                    onClick={handleOnPostAnother}
                >
                    Post another opening
                </Button>
                <Button
                    sx={{
                        background: '#FAFAFA',
                        border: '1px solid #808080',
                        borderRadius: '8px',
                        padding: '16px 24px',
                        fontFamily: 'Open Sans',
                        fontWeight: '600',
                        lineHeight: '19px',
                        color: '#494949',
                        textTransform: 'capitalize',
                        minWidth: '193px'
                    }}
                    onClick={() => navigate('/job-posting')}
                >
                    Continue
                </Button>
            </DialogContent>
        </Dialog >
    )
}

export default DialogBox;