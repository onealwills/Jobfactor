import { Box } from '@mui/system';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import useHover from '../../utils/hooks/useHover';

export default function SideNavItem(props: {
    nav: {
        icon: (props: { isHover: boolean }) => JSX.Element;
        label: string;
        route: string;
    };
    index: number;
}): JSX.Element {
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);
    const { nav, index } = props;
    const navigate = useNavigate();
    return (
        <Box
            ref={hoverRef}
            onClick={() => {
                navigate(nav.route);
            }}
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
            {<nav.icon isHover={isHover} />}
            {nav.label}
        </Box>
    );
}
