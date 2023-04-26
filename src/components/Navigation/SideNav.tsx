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
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Submenu from '../Submenu';

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

const sideNavOptions: Menu[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    route: '/',
  },
  {
    icon: UserIcon,
    label: 'Profile',
    route: '/users',
    submenu: [
      {
        label: 'Profile',
        route: '',
      },
      {
        label: 'About me',
        route: '/about-me',
      },
      {
        label: 'Activities',
        route: '/activities',
      },
      {
        label: 'Jobfactor Score',
        route: '/jobfactor-score',
      },
      {
        label: 'News & products',
        route: '/news-products',
      },
      {
        label: 'Employees',
        route: '/employees',
      },
    ],
  },
  {
    icon: UserIcon2,
    label: 'Connections',
    route: '/connections',
    submenu: [
      {
        label: 'Community',
        route: '',
      },
      {
        label: 'My followers',
        route: '/connections',
      },
      {
        label: 'Pending followers',
        route: '/pending-connections',
      },
    ],
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
    icon: MessagesIcon,
    label: 'Reviews',
    route: '/reviews',
    submenu: [
      {
        label: 'Reviews',
        route: '',
      },
      {
        label: 'Suggested Reviews',
        route: '/reviews',
      },
      {
        label: 'Company Ratings',
        route: '/connections',
      },
      {
        label: 'Sent requests',
        route: '/sent-requests',
      },
      {
        label: 'Recieved requests',
        route: '/pending-connections',
      },
    ],
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
  const [hideMenu, setHideMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [subMenuIndex, setSubMenuIndex] = useState(0);

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
  }, [location.pathname]);

  return (
    <>
      <Box
        sx={{
          mt: '12px',
          backgroundColor: 'white',
          overflowY: 'auto', // add scroll on y-axis
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: hideMenu ? '63px' : '100%',
            overflow: hideMenu ? 'hidden' : 'unset',
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
        <Submenu
          setHideMenu={setHideMenu}
          hideMenu={hideMenu}
          options={sideNavOptions[menuIndex].submenu ?? []}
        />
      </Box>
    </>
  );
}
export interface Menu {
  label: string;
  route: string;
  icon: (props: { isHover: boolean; isSelected: boolean }) => JSX.Element;
  submenu?: item[];
}
export type item = {
  route: string;
  label: string;
};
export default SideNav;
