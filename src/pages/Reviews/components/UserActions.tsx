import { Box } from '@mui/material';

const UserActions = (props: IPropTypes) => {
    const { children } = props;
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
            {children}
        </Box>
    );
};
interface IPropTypes {
    children: React.ReactNode;
}
export default UserActions;
