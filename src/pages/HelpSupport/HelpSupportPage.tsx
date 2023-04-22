import { Typography } from '@mui/material';

function HelpSupportPage() {
    return (
        <>
            <Typography
                sx={{
                    mt: 13.7,
                    ml: 40,
                    backgroundColor: 'white',
                    maxWidth: 800,
                    p: 2,
                    pb: 10,
                    textAlign: 'center',
                    fontFamily: 'open sans'
                }}
                variant="h4"
                component="div"
            >
                Help & Support
            </Typography>
        </>
    );
}

export default HelpSupportPage;
