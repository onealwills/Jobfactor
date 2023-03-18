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
import { Typography } from '@mui/material';

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
        route: '/',
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        route: '/',
    },
    {
        icon: BookIcon,
        label: 'Courses',
        route: '/',
    },
    {
        icon: NotificationsIcon,
        label: 'Notifications',
        route: '/',
    },
    {
        icon: Settings,
        label: 'Settings',
        route: '/',
    },
    {
        icon: SupportIcon,
        label: 'Help & Support',
        route: '/',
    },
    {
        icon: LogoutIcon,
        label: 'Log out',
        route: '/',
    },
];

function SideNav() {
    return (
        <>
            <Box
                sx={{
                    mt: 12,
                    fontFamily: 'open sans',
                    width: '224px',
                    backgroundColor: 'white',
                    height: 'full',
                    p: 2,
                    ml: 2,
                    position: 'fixed',
                    top: '12px',
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
