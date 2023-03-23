import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useHover from '../../utils/hooks/useHover';

export default function SideNavItem(props: {
    nav: {
        icon: (props: { isHover: boolean; isSelected: boolean }) => JSX.Element;
        label: string;
        route: string;
    };
    index: number;
}): JSX.Element {
    const hoverRef = useRef(null);
    const [isSelected, setIsSelected] = useState(false);
    const isHover = useHover(hoverRef);
    const { nav, index } = props;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (nav.route === location.pathname) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [location.pathname, nav.route]);

    const handleClick = () => {
        navigate(nav.route);
        setIsSelected(true);
    };

    return (
        <Box
            ref={hoverRef}
            onClick={handleClick}
            key={index}
            sx={{
                overflowY: 'auto', // add scroll on y-axis
                height: 40,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                p: 1,
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
            }}
        >
            <Box
                sx={{
                    height: 55,
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
