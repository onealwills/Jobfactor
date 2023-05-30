import { Avatar, Box, Typography } from '@mui/material';
const UserDetails = (props: IPropTypes) => {
    const { user, showActive = false } = props;
    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <Avatar
                    alt="Remy Sharp"
                    src={user?.image}
                    sx={{ width: 56, height: 56 }}
                />
                {showActive ? (
                    <Box
                        sx={{
                            width: '16px',
                            height: '16px',
                            background: '#08BD04',
                            borderRadius: '100px',
                            position: 'absolute',
                            right: 0,
                            bottom: '10px',
                            border: '3px solid white'
                        }}
                    />
                ) : null}
            </Box>
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
                            color: '#808080',
                            letterSpacing: '0.0015em'
                        }}
                    >
                        {user.designation ?? 'COMPANY'}
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
                    {user.designation ? (
                        <>
                            <Typography
                                sx={{
                                    color: '#808080'
                                }}
                            >
                                {user.organization}
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
                    {user.points ? (
                        <Typography
                            variant="titleLargeSemiBold"
                            sx={{
                                color: '#FFFFFF',
                                background: '#05668D',
                                borderRadius: '12px',
                                padding: '2px 12px'
                            }}
                        >
                            {user.points}
                        </Typography>
                    ) : null}
                </Box>
            </Box>
        </>
    );
};
interface IPropTypes {
    user: User;
    showActive?: boolean;
}
type User = {
    points: number;
    name: string;
    organization: string;
    designation: string;
    image: string;
};
export default UserDetails;
