import { Box, Button, Typography } from '@mui/material';
const UserActions = (props: PropTypes) => {
    const { user } = props;
    return (
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
            >
                {user.days} days
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '8px',
                    padding: '10px 36px',
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    width: '120px',
                    minWidth: '120px',
                    color: '#05668D'
                }}
            >
                Withdraw
            </Button>
            <Button
                sx={{
                    borderRadius: '8px',
                    padding: '10px 36px',
                    border: '1px solid #05668D',
                    background: '#05668D',
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    width: '120px',
                    minWidth: '120px',
                    color: '#FFFFFF',
                    ':hover': {
                        background: '#05668D'
                    }
                }}
            >
                Message
            </Button>
        </Box>
    );
};
interface PropTypes {
    user: User;
}
type User = {
    days: number;
};
export default UserActions;
