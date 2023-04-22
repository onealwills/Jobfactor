import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHover } from 'usehooks-ts';
import { useAuth } from '../../utils/context/AuthContext';
import { Menu } from './SideNav';

export default function SideNavItem(props: {
    nav: Menu,
    hideMenu: boolean;
    index: number;
    currentItem: Menu;
    subMenuIndex: number;
    handleActiveMenu: () => void
}): JSX.Element {
    const hoverRef = useRef(null);
    const [isSelected, setIsSelected] = useState(false);
    const isHover = useHover(hoverRef);
    const { nav, index, handleActiveMenu, currentItem, hideMenu, subMenuIndex } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { signOut } = useAuth();

    useEffect(() => {
        if (nav.route === location.pathname) {
            setIsSelected(true);
        } else if (currentItem.submenu) {
            if (location.pathname === currentItem.submenu[subMenuIndex].route && currentItem.route === nav.route) {
                setIsSelected(true);
            } else {
                setIsSelected(false);
            }
        } else {
            setIsSelected(false);
        }

    }, [currentItem, location.pathname, nav.route, nav.submenu]);

    const handleClick = () => {
        handleActiveMenu();
        if (nav.route === '/logout') {
            signOut();
            navigate('/login');
        } else {
            navigate(nav.route);
            setIsSelected(true);
        }
    };

    return (
        <Box
            ref={hoverRef}
            onClick={handleClick}
            key={index}
            sx={{
                overflowY: 'auto', // add scroll on y-axis
                overflow: hideMenu ? 'hidden' : 'unset',
                height: 60,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                p: 1,
                paddingLeft: '12px',
                position: 'relative',
                '&:hover, &:focus': {
                    backgroundColor: '#FFFAF1',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: '#05668D',
                    textTransform: 'uppercase',
                    '& .bar': {
                        opacity: 1,
                    },
                },
                backgroundColor: isSelected ? '#FFFAF1' : 'transparent',
                fontWeight: isSelected ? 700 : 'normal',
                color: isSelected ? '#05668D' : '#808080',
                textTransform: 'uppercase',
                '& svg': {
                    minWidth: '32px'
                }
            }}
        >
            <Box
                sx={{
                    height: 60,
                    width: 5,
                    backgroundColor: isSelected ? '#05668D' : 'transparent',
                    opacity: isSelected || isHover ? 1 : 0,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    transition: 'background-color 0.3s ease-in-out',
                }}
                className="bar"
            ></Box>
            {<nav.icon isHover={isHover} isSelected={isSelected} />}
            {nav.label}
        </Box>
    );
}
