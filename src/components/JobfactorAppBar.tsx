import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import JobFactorIcon from '../assets/icons/JobFactorIcon';
import ArrowDown from '../assets/icons/ArrowDown';
import BellIcon from '../assets/icons/BellIcon';
import profile from '../assets/images/profile.png';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '../assets/icons/SearchIcon';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useAuth } from '../utils/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const data = [
    { title: "Subscription plans", disable: true, visible: true, separatorBottom: false },
    { title: "Language", disable: false, visible: false, separatorBottom: false, submenu: [] },
    { title: "Theme", disable: false, visible: false, separatorBottom: false },
    { title: "Help and support", disable: false, visible: true, separatorBottom: true, submenu: [] },
    { title: "Switch account", disable: true, visible: true, separatorBottom: false },
    { title: "Create company account", disable: true, visible: true, separatorBottom: true, submenu: [] },
]

function JobfactorAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'white',
                    pb: 1.5,
                    pt: 0.5
                }}
                elevation={0}
            >
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <JobFactorIcon />
                    </IconButton>
                    <Box sx={{ flex: 1, marginLeft: 2, marginRight: 2 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                '&:hover': { bgcolor: 'background.paper' }
                            }}
                        >
                            <Box
                                sx={{
                                    padding: 1,
                                    height: '100%',
                                    position: 'absolute',
                                    pointerEvents: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <SearchIcon />
                            </Box>
                            <InputBase
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        sx={{ ml: '20px' }}
                                    >
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                placeholder="Search by title, skill or company"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{
                                    fontFamily: 'open sans',
                                    color: '#808080',
                                    px: 1,
                                    py: 1,
                                    width: '90%',
                                    backgroundColor: '#FFFAF1',
                                    borderRadius: '8px',
                                    '& .MuiInputBase-input': {
                                        pl: '5px',
                                        '&::placeholder': {
                                            color: 'text.secondary',
                                            opacity: 1
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton color="inherit" aria-label="bell">
                            <BellIcon />
                        </IconButton>

                        <IconButton color="inherit" aria-label="profile">
                            <img
                                height={48}
                                src={profile}
                                alt={'profile'}
                                loading="lazy"
                            />
                        </IconButton>

                        <IconButton onClick={({ currentTarget }) => setAnchorEl(currentTarget)} color="inherit" aria-label="arrow down">
                            <ArrowDown />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ '& .MuiMenu-paper': { p: 0, width: '300px', top: '64px !important' } }}
            >
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    <MenuItem
                        sx={{
                            display: 'flex',
                            gap: '16px'
                        }}
                    >
                        <Avatar sx={{ width: '24px', height: '24px' }} alt="Remy Sharp" src={profile} />
                        <Box
                            sx={{
                                width: '100%'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.001em',
                                    color: '#23282B'

                                }}
                            >
                                Ronald Richie
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Open Sans',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.001em',
                                    color: '#808080'

                                }}
                            >
                                ronaldrichie@otlook.com
                            </Typography>
                        </Box>
                    </MenuItem>
                    {data.map(item => 
                        item.visible ? <>
                            
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.001em',
                                        color: '#23282B',
                                        pb: '12px',
                                        pt: '12px',
                                        pl: '57px',
                                        borderBottom: item.separatorBottom ? '1px solid #EDEDED' : 0
                                    }}
                                    disabled={item.disable}
                                >
                                    {item.title}
                                </MenuItem>
                             </>
                      : null
                    )}
                </Box>
                <MenuItem
                    sx={{
                        fontFamily: 'Open Sans',
                        letterSpacing: '0.0015em',
                        color: '#E75541',
                        m: 0,
                        mt: '4px'
                    }}
                    onClick={() => { signOut(); navigate('/login'); }}
                >
                    Sign out
                </MenuItem>
            </Menu>
        </>
    );
}

export default JobfactorAppBar;
