import { Avatar, Box, Typography } from '@mui/material';
const UserDetails = (props: PropTypes) => {
    const { user } = props;
    return (
        <>
            <Avatar
                alt="Remy Sharp"
                src={user?.photoUrl}
                sx={{ width: 56, height: 56 }}
            />
            <Box sx={{ width: '100%' }}>
                <Typography
                    component={'h1'}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        color: '#494949'
                    }}
                >
                    {user.firstName} {user.lastName}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    {user?.currentEmployment?.employmentLevel ? (
                        <>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Open Sans',
                                    color: '#808080',
                                    letterSpacing: '0.0015em'
                                }}
                            >
                                {user?.currentEmployment?.employmentLevel}
                            </Typography>
                            <Typography
                                component={'div'}
                                sx={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100px',
                                    background: '#494949',
                                    border: '2px solid #494949'
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Open Sans',
                                    color: '#808080'
                                }}
                            >
                                {user?.currentEmployment?.companyName}
                            </Typography>
                            <Typography
                                component={'div'}
                                sx={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100px',
                                    background: '#494949',
                                    border: '2px solid #494949'
                                }}
                            />
                        </>
                    ) : null}
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#FFFFFF',
                            background: '#49B6FF',
                            borderRadius: '6px',
                            padding: '0px 12px'
                        }}
                    >
                        {user.score}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
interface PropTypes {
    user: User;
}
type User = {
    score: number;
    firstName: string;
    lastName?: string;
    currentEmployment: {
        companyName: string;
        employmentLevel: string;
    }
    photoUrl: string;
};
export default UserDetails;
