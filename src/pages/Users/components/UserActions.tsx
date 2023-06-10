import { Box, Button } from '@mui/material';

const UserActions = (props: PropTypes) => {
    const { title = '', disabled = false } = props;

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
            <Button
                disabled={disabled}
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
                    textDecoration: 'none',
                    ':hover': {
                        background: '#05668D',
                        color: '#FFFF'
                    }
                }}
            >
                {title}
            </Button>
        </Box>
    );
};
interface PropTypes {
    title: string;
    disabled?: boolean;
}

export default UserActions;
