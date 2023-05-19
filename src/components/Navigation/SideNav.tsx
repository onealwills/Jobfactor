import Box from '@mui/material/Box';
import HomeIcon from '../../assets/icons/HomeIcon';
import UserIcon from '../../assets/icons/UserIcon';
import UserIcon2 from '../../assets/icons/UserIcon2';
import BriefCaseIcon from '../../assets/icons/BriefCaseIcon';
import MessagesIcon from '../../assets/icons/MessagesIcon';
import BookIcon from '../../assets/icons/BookIcon';
import Settings from '../../assets/icons/Settings';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import SideNavItem from './SideNavItem';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Submenu from '../Submenu';
import { useAuth } from '../../utils/context/AuthContext';
import EyeIcon from '../../assets/icons/EyeIcon';

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//     open?: boolean;
// }>(({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//     }),
//     marginLeft: `-${300}px`,
//     ...(open && {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen
//         }),
//         marginLeft: 0
//     })
// }));

const sideNavOptions: Menu[] = [
    {
        icon: HomeIcon,
        label: 'Home',
        route: '/'
    },
    {
        icon: UserIcon,
        label: 'Profile',
        route: '/users',
        submenu: [
            {
                label: 'Profile',
                route: ''
            },
            {
                label: 'About me',
                route: '/users'
            },
            {
                label: 'Activities',
                route: '/users/activities'
            },
            {
                label: 'Jobfactor Score',
                route: '/users/score',
                menuProfile: 'professional'
            }
        ]
    },
    {
        icon: UserIcon2,
        label: 'Community',
        route: '/connections',
        submenu: [
            {
                label: 'Community',
                route: ''
            },
            {
                label: 'My community',
                route: '/connections'
            },
            {
                label: 'Pending',
                route: '/pending-connections'
            },
            {
                label: 'Suggestions',
                route: '/pending-connections',
                enable: false
            }
        ]
    },
    {
        icon: BriefCaseIcon,
        label: 'Jobs',
        route: '/my-jobs',
        submenu: [
            {
                label: 'Jobs',
                enable: true,
                route: ''
            },
            {
                label: 'All jobs',
                menuProfile: 'professional',
                enable: true,
                route: '/my-jobs'
            },
            {
                label: 'Saved jobs',
                menuProfile: 'professional',
                enable: true,
                route: '/save-job'
            },
            {
                label: 'Job preference',
                menuProfile: 'professional',
                enable: true,
                route: '/job-preference'
            },
            {
                label: 'Applied jobs',
                menuProfile: 'professional',
                visible: true,
                route: '/job-applied'
            },
            {
                label: 'Career Planning',
                menuProfile: 'professional',
                visible: true,
                enable: false,
                route: '#'
            },
            {
                label: 'Job Posting',
                menuProfile: 'company',
                enable: true,
                route: '/job-postins'
            },
            {
                label: 'Applications',
                menuProfile: 'company',
                enable: true,
                route: '/job-application'
            },
            {
                label: 'Saved Application',
                visible: true,
                enable: true,
                menuProfile: 'company',
                route: '/job-saveapplication'
            }
        ]
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        route: '/messages'
    },
    {
        icon: EyeIcon,
        label: 'Reviews',
        route: '/reviews',
        submenu: [
            {
                label: 'Reviews',
                route: ''
            },
            {
                label: 'Suggested Reviews',
                menuProfile: 'professional',
                enable: true,
                route: '#'
            },
            {
                label: 'Company Ratings',
                menuProfile: 'professional',
                enable: false,
                route: '#'
            },
            {
                label: 'Sent Reviews',
                menuProfile: 'professional',
                enable: true,
                route: '#'
            },
            {
                label: 'Received Reviews',
                menuProfile: 'professional',
                enable: true,
                route: '#'
            }
        ]
    },
    {
        icon: BookIcon,
        label: 'Courses',
        route: '/courses',
        disable: true
    },
    {
        icon: Settings,
        label: 'Settings',
        route: '/settings',
        submenu: [
            {
                label: 'Settings',
                route: ''
            },
            {
                label: 'General preferences',
                menuProfile: 'both',
                enable: true,
                route: '#'
            },
            {
                label: 'Communications',
                enable: false,
                route: '#'
            },
            {
                label: 'Privacy and visibility',
                enable: true,
                route: '#'
            },
            {
                label: 'Subscriptions',
                enable: true,
                route: '#'
            },
            {
                label: 'Security',
                enable: true,
                route: '#'
            }
        ]
    }
];

function SideNav() {
    const location = useLocation();
    const [hideMenu, setHideMenu] = useState(false);
    const [menuIndex, setMenuIndex] = useState(0);
    const [subMenuIndex, setSubMenuIndex] = useState(0);

    const { account } = useAuth();

    const handleActiveMenu = () => {
        let subMenuActive = false;
        sideNavOptions.forEach((x: Menu, i: number) => {
            if (location.pathname === x.route) {
                setMenuIndex(i);
                if (x.submenu) {
                    subMenuActive = true;
                }
            } else if (x.submenu) {
                x.submenu.forEach((y, j: number) => {
                    if (location.pathname === y.route) {
                        setMenuIndex(i);
                        setSubMenuIndex(j);
                        subMenuActive = true;
                    }
                });
            }
        });

        setHideMenu(subMenuActive);
    };
    useEffect(() => {
        handleActiveMenu();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        overflow: hideMenu ? 'hidden' : 'unset'
                    }}
                >
                    {sideNavOptions.map((nav: Menu, index: number) => (
                        <SideNavItem
                            hideMenu={hideMenu}
                            currentItem={sideNavOptions[menuIndex]}
                            subMenuIndex={subMenuIndex}
                            handleActiveMenu={handleActiveMenu}
                            nav={nav}
                            index={index}
                            key={index}
                        />
                    ))}
                </Box>
                {account != null && account !== undefined && (
                    <Submenu
                        setHideMenu={setHideMenu}
                        hideMenu={hideMenu}
                        menuProfile={account?.primaryProfile}
                        options={sideNavOptions[menuIndex].submenu ?? []}
                    />
                )}
            </Box>
        </>
    );
}
export interface Menu {
    label: string;
    route: string;
    hidden?: boolean;
    disable?: boolean;
    icon: (props: { isHover: boolean; isSelected: boolean }) => JSX.Element;
    submenu?: item[];
}
export type item = {
    route: string;
    label: string;
    menuProfile?: 'professional' | 'company' | 'both';
    enable?: boolean;
    visible?: boolean;
};
export default SideNav;
