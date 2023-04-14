import { Avatar, Box, Typography } from '@mui/material';
import CustomButton from '../../../components/Button';
const UserDetails = (props: any) => {
    const { user } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'inset',
                gap: '20px'
            }}
        >
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '20px',
                    width: '100%',
                    justifyContent: 'flex-end'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '16px',
                        fontFamily: 'Open Sans',
                        fontWeight: '600',
                        color: '#808080',
                        mb: '10px'
                    }}
                >{user.days} days</Typography>
                <CustomButton
                    title="Withdraw"
                    variant='outlined'
                    style={{ color: "#05668D" }}
                />
                <CustomButton
                    title="Message"
                    style={{ background: '#05668D', border: '1px solid #05668D', color: "#FFFFFF" }}
                />
            </Box>
        </Box>
    )
}

export default UserDetails