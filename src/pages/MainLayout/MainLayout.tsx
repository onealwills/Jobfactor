import {
    Toolbar,
    Drawer,
    Box,
    Typography,
    CircularProgress,
    Avatar
} from '@mui/material';
import SideNav from '../../components/Navigation/SideNav';
import JobfactorAppBar from '../../components/JobfactorAppBar';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../utils/context/AuthContext';
import { PrimaryProfileType } from '../../utils/hooks/api/account/types';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));
const drawerWidth = 240;

function MainLayout(props: { children: React.ReactNode }) {
    const { account, user } = useAuth();

    const { children } = props;

    return (
        <Box sx={{ display: 'flex' }}>
            <JobfactorAppBar />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        borderRight: '0px',
                        height: 815,
                        ml: 3,
                        mt: 13,
                        pt: 0,
                        pb: 0,
                        position: 'relative'
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <Box
                    sx={{
                        overflow: 'auto',
                        mt: 1,
                        minHeight: '158px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 'auto',
                        alignItems: 'center'
                    }}
                >
                    {account?.sub ? (
                        <>
                            <Box sx={{ mt: '10px' }}>
                                <Avatar
                                    sx={{
                                        height: 64,
                                        width: 64
                                    }}
                                    src={account?.primaryProfile === PrimaryProfileType.Professional ? user?.professionalProfile?.photoUrl : user?.primaryCompanyProfile?.photoUrl}
                                    alt="profile"
                                />
                            </Box>

                            <Typography
                                sx={{ mt: '6px' }}
                                color={'#23282B'}
                                fontSize={16}
                                fontFamily={'open sans'}
                                fontWeight={700}
                            >
                                {account?.primaryProfile ===
                                    PrimaryProfileType.Professional
                                    ? `${account?.professionalProfile?.fullName}`
                                    : `${account?.companyProfile?.companyName}`}
                            </Typography>
                            <Typography
                                sx={{ mt: '6px' }}
                                color={'#808080'}
                                fontSize={14}
                                fontFamily={'open sans'}
                                fontWeight={400}
                            >
                                {account?.primaryProfile ===
                                    PrimaryProfileType.Company
                                    ? 'Company account'
                                    : 'Personal account'}
                            </Typography>
                        </>
                    ) : (
                        <CircularProgress sx={{ color: '#05668D' }} />
                    )}
                </Box>

                <Box sx={{ height: '20px', backgroundColor: '#FCFBF8' }} />

                <Box
                    sx={{
                        overflow: 'auto',
                        mt: -0.5,
                        padding: '9px',
                        paddingTop: '6px',
                        overflowY: 'hidden'
                    }}
                >
                    <SideNav />
                </Box>
            </Drawer>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar />
                <Main open={true}>
                    <DrawerHeader />
                    {children}
                </Main>
            </Box>
        </Box>
    );
}

export default MainLayout;
