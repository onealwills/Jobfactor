import { Avatar, Box, Typography } from '@mui/material';
const UserDetails = (props: PropTypes) => {
    const { user } = props;
    return (
        <>
            <Avatar
                alt="Remy Sharp"
                src={user?.image}
                sx={{ width: 56, height: 56 }}
            />
            <Box sx={{ width: '100%' }}>
                <Typography
                    component={'h1'}
                    variant="titleLargeSemiBold"
                    sx={{
                        color: '#494949'
                    }}
                >
                    {user.name}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontFamily: 'Open Sans',
                            color: '#808080',
                            letterSpacing: '0.0015em'
                        }}
                    >
                        {user.designation}
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
                    <Box
                        sx={{
                            p: '6px 16px',
                            border: '1px solid #D9D9D9',
                            borderRadius: '4px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'Open Sans',
                                color: '#808080'
                            }}
                        >
                            {user.email}
                        </Typography>
                    </Box>
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
                        variant="titleLargeSemiBold"
                        sx={{
                            color: '#FFFFFF',
                            background: '#49B6FF',
                            borderRadius: '6px',
                            padding: '0px 12px'
                        }}
                    >
                        {user.points}
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
    points: number;
    name: string;
    email: string;
    designation: string;
    image: string;
};
export default UserDetails;
