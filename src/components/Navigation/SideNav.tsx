import Box from '@mui/material/Box';
import HomeIcon from '../../assets/icons/HomeIcon';
import UserIcon from '../../assets/icons/UserIcon';
import UserIcon2 from '../../assets/icons/UserIcon2';
import BriefCaseIcon from '../../assets/icons/BriefCaseIcon';
import MessagesIcon from '../../assets/icons/MessagesIcon';
import BookIcon from '../../assets/icons/BookIcon';
import Settings from '../../assets/icons/Settings';
import SideNavItem from './SideNavItem';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Submenu from '../Submenu';
import { useAuth } from '../../utils/context/AuthContext';
import EyeIcon from '../../assets/icons/EyeIcon';
import DashboardIcon from '../../assets/icons/DashboardIcon';

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
const companyRoutes: Menu[] = [
    {
        icon: HomeIcon,
        label: 'Home',
        route: '/'
    },
    {
        icon: UserIcon,
        label: 'Profile',
        route: '/about-company',
        submenu: [
            {
                label: 'Profile',
                route: ''
            },
            {
                label: 'About us',
                route: '/about-company'
            },
            {
                label: 'Activities',
                route: '/company-activities'
            },
            {
                label: 'Jobfactor Score',
                route: '/jobfactor-score',
                disable: true
            },
            {
                label: 'Employees',
                route: '/employees',
                disable: true
            },
            {
                label: 'Company ratings',
                route: '/company-ratings',
                disable: true
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
                route: '/suggestions',
                disable: true
            }
        ]
    },
    {
        icon: BriefCaseIcon,
        label: 'Jobs',
        route: '/job-posting',
        submenu: [
            {
                label: 'Jobs',
                route: ''
            },
            {
                label: 'job postings',
                route: '/job-posting'
            },
            {
                label: 'Applications',
                route: '/job-applications'
            },
            {
                label: 'Saved applications',
                route: '/save-applications'
            }
        ]
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        route: '/messages',
        disable: true
    },
    {
        icon: DashboardIcon,
        label: 'DASHBOARD',
        route: '/dashboard',
        disable: true,
        submenu: [
            {
                label: 'DASHBOARD',
                route: ''
            },
            {
                label: 'Analytics',
                route: '#'
            },
            {
                label: 'Employees',
                route: '#'
            },
            {
                label: 'Applicant tracking',
                route: '#'
            }
        ]
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
                route: '/settings'
            },
            {
                label: 'Communications',
                route: '#'
            },
            {
                label: 'Privacy and visibility',
                route: '#'
            },
            {
                label: 'Subscriptions',
                route: '#'
            },
            {
                label: 'Security',
                route: '#'
            }
        ]
    }
];
const professionalRoutes: Menu[] = [
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
                route: '/users/score'
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
                route: '#',
                disable: true
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
                route: ''
            },
            {
                label: 'All jobs',
                route: '/my-jobs'
            },
            {
                label: 'Saved jobs',
                route: '/save-job'
            },
            {
                label: 'Job preference',
                route: '/job-preference'
            },
            {
                label: 'Applied jobs',
                route: '/job-applied'
            },
            {
                label: 'Career Planning',
                route: '#',
                disable: true
            }
        ]
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        route: '/messages',
        disable: true
    },
    {
        icon: EyeIcon,
        label: 'Reviews',
        route: '/reviews',
        disable: true,
        submenu: [
            {
                label: 'Reviews',
                route: ''
            },
            {
                label: 'Suggested Reviews',
                route: '/reviews'
            },
            {
                label: 'Sent request',
                route: '/reviews/sent-requests'
            },
            {
                label: 'Received request',
                route: '/reviews/received-requests'
            }
        ]
    },
    {
        icon: BookIcon,
        label: 'Courses',
        route: '/courses',
        submenu: [
            {
                label: 'Courses',
                route: ''
            },
            {
                label: 'All courses',
                route: '/#',
                disable: true
            },
            {
                label: 'My learning',
                route: '#',
                disable: true
            },
            {
                label: 'Career planning',
                route: '#',
                disable: true
            }
        ]
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
                route: '/settings',
                disable: true
            },
            {
                label: 'Communications',
                route: '#',
                disable: true
            },
            {
                label: 'Privacy and visibility',
                route: '#',
                disable: true
            },
            {
                label: 'Subscriptions',
                route: '#',
                disable: true
            },
            {
                label: 'Security',
                route: '#',
                disable: true
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
        (account?.companyProfile.companyName
            ? companyRoutes
            : professionalRoutes
        ).forEach((x: Menu, i: number) => {
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
                    {(account?.companyProfile.companyName
                        ? companyRoutes
                        : professionalRoutes
                    ).map((nav: Menu, index: number) => (
                        <SideNavItem
                            hideMenu={hideMenu}
                            currentItem={
                                (account?.companyProfile.companyName
                                    ? companyRoutes
                                    : professionalRoutes)[menuIndex]
                            }
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
                        options={
                            (account?.companyProfile.companyName
                                ? companyRoutes
                                : professionalRoutes)[menuIndex].submenu ?? []
                        }
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
    disable?: boolean;
    hidden?: boolean;
};
export default SideNav;
