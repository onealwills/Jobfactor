import Box from '@mui/material/Box';
import HomeIcon from '../../assets/icons/HomeIcon';
import UserIcon from '../../assets/icons/UserIcon';
import UserIcon2 from '../../assets/icons/UserIcon2';
import BriefCaseIcon from '../../assets/icons/BriefCaseIcon';
import MessagesIcon from '../../assets/icons/MessagesIcon';
import BookIcon from '../../assets/icons/BookIcon';
import NotificationsIcon from '../../assets/icons/NotificationsIcon';
import Settings from '../../assets/icons/Settings';
import SupportIcon from '../../assets/icons/SupportIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import SideNavItem from './SideNavItem';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { useEffect, useState } from 'react';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${300}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
const sideNavOptions = [
    {
        icon: HomeIcon,
        label: 'Home',
        route: '/',
    },
    {
        icon: UserIcon,
        label: 'Profile',
        route: '/users',
    },
    {
        icon: UserIcon2,
        label: 'Connections',
        route: '/connections',
    },
    {
        icon: BriefCaseIcon,
        label: 'My Jobs',
        route: '/my-jobs',
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        route: '/messages',
    },
    {
        icon: BookIcon,
        label: 'Courses',
        route: '/courses',
    },
    {
        icon: NotificationsIcon,
        label: 'Notifications',
        route: '/notifications',
    },
    {
        icon: Settings,
        label: 'Settings',
        route: '/settings',
    },
    {
        icon: SupportIcon,
        label: 'Help & Support',
        route: '/help-support',
    },
    {
        icon: LogoutIcon,
        label: 'Log out',
        route: '/logout',
    },
];

function SideNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [hideMenu, setHideMenu] = useState(false);

    useEffect(() => {
        if (location.pathname === '/connections' || location.pathname === '/pending-connections') {
            setHideMenu(true);
        } else {
            setHideMenu(false);
        }
    }, [location.pathname]);
    return (
        <>
            <Box
                sx={{
                    mt: '12px',
                    backgroundColor: 'white',
                    overflowY: 'auto', // add scroll on y-axis                    
                    display: 'flex'
                }}
            >
                <Box
                    sx={{
                        width: hideMenu ? '63px' : '100%',
                        overflow: hideMenu ? 'hidden' : 'unset',
                    }}
                >
                    {sideNavOptions.map((nav, index) => (
                        <SideNavItem nav={nav} index={index} key={index} />
                    ))}
                </Box>
                <Box sx={{ background: '#FCFBF8', width: '100%', borderRadius: '4px',display: hideMenu ? 'block' : 'none' }}>
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            color: '#494949',
                            fontFamily: 'Open Sans',
                            fontWeight: '700',
                            fontSize: '14px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px',
                            '&:hover': {
                                backgroundColor: '#FFFAF1',
                                boxShadow: 'none',
                            }
                        }}
                        onClick={() => setHideMenu(false)}
                    >
                        COMMUNITY
                        <ArrowLeftRoundedIcon sx={{ color: '#808080', fontSize: '20px' }} />
                    </Button>
                    <Box
                        sx={{
                            p: '10px 16px',
                            fontFamily: 'Open Sans',
                            '&:hover, &:focus': {
                                backgroundColor: location.pathname === '/connections' ? '#05668D' : '#FFFAF1',
                                cursor: 'pointer',
                                fontWeight: 700,
                                color: location.pathname === '/connections' ? '#FFFFFF' : '#05668D',
                            },
                            backgroundColor: location.pathname === '/connections' ? '#05668D' : 'transparent',
                            fontWeight: location.pathname === '/connections' ? '700' : '400',
                            fontSize: '14px',
                            color: location.pathname === '/connections' ? '#FFFFFF' : '#808080',
                        }}
                        onClick={() => navigate('/connections')}
                    >
                        My followers
                    </Box>
                    <Box
                        onClick={() => navigate('/pending-connections')}
                        sx={{
                            p: '10px 16px',
                            fontFamily: 'Open Sans',
                            fontSize: '14px',
                            '&:hover, &:focus': {
                                backgroundColor: location.pathname === '/pending-connections' ? '#05668D' : '#FFFAF1',
                                cursor: 'pointer',
                                fontWeight: 700,
                                color: location.pathname === '/pending-connections' ? '#FFFFFF' : '#05668D',
                            },
                            backgroundColor: location.pathname === '/pending-connections' ? '#05668D' : 'transparent',
                            color: location.pathname === '/pending-connections' ? '#FFFFFF' : '#808080',
                            fontWeight: location.pathname === '/pending-connections' ? '700' : '400',
                        }}
                    >
                        Pending followers
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default SideNav;
