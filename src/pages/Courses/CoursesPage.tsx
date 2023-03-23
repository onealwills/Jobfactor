import { Typography } from '@mui/material';

function CoursesPage() {
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
                    fontFamily: 'open sans',
                }}
                variant="h4"
                component="div"
            >
                Courses
            </Typography>
        </>
    );
}

export default CoursesPage;
