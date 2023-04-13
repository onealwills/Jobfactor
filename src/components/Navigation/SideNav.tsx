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
    return (
        <>
            <Box
                sx={{
                    mt: '12px',
                    backgroundColor: 'white',
                    overflowY: 'auto', // add scroll on y-axis
                }}
            >
                {sideNavOptions.map((nav, index) => (
                    <SideNavItem nav={nav} index={index} key={index} />
                ))}
            </Box>
        </>
    );
}

export default SideNav;
