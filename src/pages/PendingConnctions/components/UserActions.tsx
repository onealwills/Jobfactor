import { Box, Button, Typography } from '@mui/material';

const UserActions = (props: PropTypes) => {
    const { user, tab } = props;
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
                    color: '#05668D',
                    width: '120px',
                    minWidth: '120px',
                }}
            >
                {tab === 'sent' ? 'Withdraw' : 'Ignore'}
            </Button>
            {tab === 'received' && (
                <Button
                    sx={{
                        borderRadius: '8px',
                        background: '#05668D',
                        padding: '10px 36px',
                        border: '1px solid #05668D',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: '700',
                        textTransform: 'capitalize',
                        width: '120px',
                        minWidth: '120px',
                        boxShadow: 'none',
                        ':hover': {
                            background: '#05668D'
                        }
                    }}
                >
                    Add
                </Button>
            )}
        </Box>
    );
};
interface PropTypes {
    user: User;
    tab: string;
}
type User = {
    days: number;
};
export default UserActions;
