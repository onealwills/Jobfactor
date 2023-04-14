import { Avatar, Box, Typography } from '@mui/material';
const UserDetails = (props: any) => {
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
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        color: '#494949'
                    }}
                >{user.name}</Typography>
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
                    >{user.designation ?? "COMPANY"}</Typography>
                    <Typography
                        component={'div'}
                        sx={{
                            width: '7px', height: '7px',
                            borderRadius: '100px',
                            background: '#494949',
                            border: '2px solid #494949',
                        }}
                    />
                    {user.designation &&
                        <>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Open Sans',
                                    color: '#808080'
                                }}
                            >{user.organization}</Typography>
                            <Typography
                                component={'div'}
                                sx={{
                                    width: '7px', height: '7px',
                                    borderRadius: '100px',
                                    background: '#494949',
                                    border: '2px solid #494949',
                                }}
                            />
                        </>
                    }
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#FFFFFF',
                            background: "#49B6FF",
                            borderRadius: '6px',
                            padding: "0px 12px"
                        }}
                    >{user.points}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default UserDetails;