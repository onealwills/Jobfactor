import Box from '@mui/material/Box';
import HomeIcon from '../assets/icons/HomeIcon';
import UserIcon from '../assets/icons/UserIcon';
import UserIcon2 from '../assets/icons/UserIcon2';
import BriefCaseIcon from '../assets/icons/BriefCaseIcon';
import MessagesIcon from '../assets/icons/MessagesIcon';
import BookIcon from '../assets/icons/BookIcon';
import NotificationsIcon from '../assets/icons/NotificationsIcon';
import Settings from '../assets/icons/Settings';
import SupportIcon from '../assets/icons/SupportIcon';
import LogoutIcon from '../assets/icons/LogoutIcon';

const sideNavItems = [
    {
        icon: <HomeIcon />,
        label: 'Home',
    },
    {
        icon: <UserIcon />,
        label: 'Profile',
    },
    {
        icon: <UserIcon2 />,
        label: 'Connections',
    },
    {
        icon: <BriefCaseIcon />,
        label: 'My Jobs',
    },
    {
        icon: <MessagesIcon />,
        label: 'Messages',
    },
    {
        icon: <BookIcon />,
        label: 'Courses',
    },
    {
        icon: <NotificationsIcon />,
        label: 'Notifications',
    },
    {
        icon: <Settings />,
        label: 'Settings',
    },
    {
        icon: <SupportIcon />,
        label: 'Help & Support',
    },
    {
        icon: <LogoutIcon />,
        label: 'Log out',
    },
];

function SideNav(props: {
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { setSelectedOption } = props;
    return (
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
            <>
                {sideNavItems.map((nav, index) => (
                    <Box
                        onClick={() => setSelectedOption(nav.label)}
                        key={index}
                        sx={{
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#808080',
                            p: 1,
                            position: 'relative',

                            '&:hover': {
                                backgroundColor: '#FFFAF1',
                                cursor: 'pointer',
                                fontWeight: 700,
                                color: '#05668D',
                                textTransform: 'uppercase',
                                '& > div': {
                                    display: 'block',
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: 55,
                                width: 5,
                                backgroundColor: '#05668D',
                                display: 'none',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                            }}
                        ></Box>
                        {nav.icon}
                        {nav.label}
                    </Box>
                ))}
            </>
        </Box>
    );
}

export default SideNav;
