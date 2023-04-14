import { Box, Typography } from '@mui/material';
import CustomButton from '../../../components/Button';

const UserActions = (props: any) => {
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
            >{user.days} days</Typography>
            <CustomButton
                title={tab === 'sent' ? "Withdraw" : 'Ignore'}
                variant='outlined'
                style={{ color: "#05668D" }}
            />
            {tab === 'received' &&
                <CustomButton
                    title="Add"
                    style={{ background: '#05668D', border: '1px solid #05668D', color: "#FFFFFF" }}
                />
            }
        </Box>
    )
}

export default UserActions