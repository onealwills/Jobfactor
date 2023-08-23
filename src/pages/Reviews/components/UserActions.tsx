import { Box } from '@mui/material';

const UserActions = (props: IPropTypes) => {
    const { children } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: '216px',
                justifyContent: 'flex-end',
                // border:"3px solid yellow"
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
