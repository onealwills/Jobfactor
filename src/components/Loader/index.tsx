import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const Loader = ({ open = true, handleClose = () => {} }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 9999 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;
