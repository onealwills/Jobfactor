import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { InputBase } from '@mui/material';
import JobFactorIcon from '../assets/icons/JobFactorIcon';
import ArrowDown from '../assets/icons/ArrowDown';
import BellIcon from '../assets/icons/BellIcon';
import profile from '../assets/images/profile.png';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '../assets/icons/SearchIcon';

function JobfactorAppBar() {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: 1, backgroundColor: 'white', pb: 1.5, pt: 0.5 }}
            elevation={0}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            '&:hover': { bgcolor: 'background.paper' },
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
                                justifyContent: 'center',
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
                                        opacity: 1,
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
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

                    <IconButton color="inherit" aria-label="arrow down">
                        <ArrowDown />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default JobfactorAppBar;
