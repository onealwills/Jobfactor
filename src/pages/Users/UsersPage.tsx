import { Typography } from '@mui/material';
import NavBase from '../../components/Navigation/NavBase';

function UsersPage() {
    return (
        <>
            <NavBase />
            <Typography
                sx={{
                    mt: 13.7,
                    ml: 40,
                    backgroundColor: 'white',
                    maxWidth: 800,
                    p: 2,
                    pb: 10,
                    textAlign: 'center',
                    fontFamily: 'open sans',
                }}
                variant="h4"
                component="div"
            >
                Users
            </Typography>
        </>
    );
}

export default UsersPage;
