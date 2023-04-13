import { Typography } from '@mui/material';

function SettingsPage() {
    return (
        <Typography
            sx={{
                mt: 11,
                ml: 20,
                backgroundColor: 'green',
                maxWidth: 800,
                p: 2,
                pb: 10,
                textAlign: 'center',
                fontFamily: 'open sans',
            }}
            variant="h4"
            component="div"
        >
            Settings{' '}
        </Typography>
    );
}

export default SettingsPage;
