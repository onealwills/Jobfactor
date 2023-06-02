import { Alert, Snackbar } from '@mui/material';

interface IPropTypes {
    type: 'success' | 'info' | 'warning' | 'error';
    open: boolean;
    message: string;
    handleClose: () => void;
}
const SnackAlert = ({
    open = false,
    handleClose = () => {},
    message = '',
    type = 'info'
}: IPropTypes) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackAlert;
