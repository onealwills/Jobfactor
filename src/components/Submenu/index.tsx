import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { item } from '../Navigation/SideNav';

interface PropTypes {
    setHideMenu: (value: boolean) => void;
    hideMenu: boolean;
    options: item[];
}

const Submenu = (props: PropTypes) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            sx={{
                background: '#FCFBF8',
                width: '100%',
                borderRadius: '4px',
                display: props.hideMenu ? 'block' : 'none'
            }}
        >
            {props.options?.map((item: item) => (
                <>
                    {item.label && item.route === '' ? (
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                color: '#494949',
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                fontSize: '14px',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '12px',
                                textTransform: 'uppercase',
                                '&:hover': {
                                    backgroundColor: '#FFFAF1',
                                    boxShadow: 'none',
                                    color: '#494949',
                                }
                            }}
                            onClick={() => props.setHideMenu(false)}
                        >
                            {item.label}
                            <ArrowLeftRoundedIcon
                                sx={{ color: '#808080', fontSize: '20px' }}
                            />
                        </Button>
                    ) : (
                        <Box
                            sx={{
                                p: '10px 16px',
                                fontFamily: 'Open Sans',
                                '&:hover, &:focus': {
                                    backgroundColor:
                                        location.pathname === item.route
                                            ? '#05668D'
                                            : '#FFFAF1',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    color:
                                        location.pathname === item.route
                                            ? '#FFFFFF'
                                            : '#05668D'
                                },
                                backgroundColor:
                                    location.pathname === item.route
                                        ? '#05668D'
                                        : 'transparent',
                                fontWeight:
                                    location.pathname === item.route
                                        ? '700'
                                        : '400',
                                fontSize: '14px',
                                color:
                                    location.pathname === item.route
                                        ? '#FFFFFF'
                                        : '#808080'
                            }}
                            onClick={() => navigate(item.route)}
                        >
                            {item.label}
                        </Box>
                    )}
                </>
            ))}
        </Box>
    );
};

export default Submenu;
