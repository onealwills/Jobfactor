import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModalCheckmark from '../../../assets/icons/ModalCheckmark';

interface IPropTypes {
    handleClose: () => void;
    handleContinue?: () => void;
    open: boolean;
}
const DialogBox = ({ handleClose, open, handleContinue }: IPropTypes) => {
    return (
        <Dialog
            onClose={handleClose}
            open={open}
            sx={{
                '& .MuiPaper-root': {
                    minWidth: '750px',
                    background: '#FCFBF8',
                    pt: '24px',
                    pb: '40px'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <ModalCheckmark />
                <Typography
                    variant="titleLargeBold"
                    sx={{
                        mt: '16px'
                    }}
                >
                    Request sent
                </Typography>
                <Typography
                    sx={{
                        color: '#808080',
                        mt: '32px',
                        textAlign: 'center',
                        maxWidth: '328px'
                    }}
                >
                    Request has been sent to your connection for review.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        padding: '14px 36px',
                        background: '#FCFBF8',
                        border: '1px solid #05668D',
                        borderRadius: '8px',
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 600,
                        color: '#05668D',
                        mt: '28px',
                        width: 'auto',
                        minWidth: '224px'
                    }}
                    onClick={handleContinue ?? handleClose}
                >
                    Continue
                </Button>
            </Box>
        </Dialog>
    );
};

export default DialogBox;
