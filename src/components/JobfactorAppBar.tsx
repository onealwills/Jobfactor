import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import JobFactorIcon from '../assets/icons/JobFactorIcon';
import ArrowDown from '../assets/icons/ArrowDown';
import BellIcon from '../assets/icons/BellIcon';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '../assets/icons/SearchIcon';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useAuth } from '../utils/context/AuthContext';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { Autocomplete, Button, TextField } from '@mui/material';
import { useGetSearchTerm } from '../utils/hooks/api/search/useSearchTerm';
import { styled, lighten, darken } from '@mui/system';
import { ISkillsType } from '../pages/Reviews/types';
import ExperienceLevel from '../pages/Connections/components/ExperienceLevel';
import { PrimaryProfileType } from '../utils/hooks/api/account/types';
import { useSendConnectionRequest } from '../utils/hooks/api/connections/useSendConnectionRequest';
import { QueryKeys } from '../utils/hooks/api/QueryKey';
import { useQueryClient } from 'react-query';
import SnackAlert from './Snackbar';
import axios, { AxiosError } from 'axios';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: '#23282B',
    fontSize: 14,
    fontWeight: 700,
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});

const data = [
    {
        title: 'Subscription plans',
        disable: true,
        visible: true,
        separatorBottom: false
    },
    {
        title: 'Language',
        disable: false,
        visible: false,
        separatorBottom: false,
        submenu: []
    },
    { title: 'Theme', disable: false, visible: false, separatorBottom: false },
    {
        title: 'Help and support',
        disable: false,
        visible: true,
        separatorBottom: true,
        submenu: []
    },
    {
        title: 'Switch account',
        disable: true,
        visible: true,
        separatorBottom: false
    },
    {
        title: 'Create company account',
        disable: true,
        visible: true,
        separatorBottom: true,
        submenu: []
    }
];
interface PropTypes {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
interface IOptionType {
    id: string;
    term: string;
    entityType: string;
}
function JobfactorAppBar({ handleChange, value }: PropTypes) {
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [showGrouping, setShowGrouping] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState('');
    const pathname = useLocation()?.pathname;
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { data: searchedData, refetch } = useGetSearchTerm(search);

    const handleData = () => {
        setOptions([]);
        if (search.length > 1 && searchedData) {
            if (pathname.includes('job')) return setOptions(searchedData?.filter((x: IOptionType) => x.entityType === "JOBPOST"));
            if (pathname.includes('connections')) return setOptions(searchedData?.filter((x: IOptionType) => x.entityType === "PROFESSIONAL"));
            return setOptions(JSON.parse(JSON.stringify(searchedData?.sort((a: IOptionType, b: IOptionType) => -b.entityType.localeCompare(a.entityType)))));
        }
    }

    const handleNavigate = (option: IOptionType) => {
        if (option.entityType === 'JOBPOST') return navigate(user?.primaryProfile === PrimaryProfileType.Professional ? `/my-jobs/${option.id}` : `/job-postdetail/${option.id}`);
        if (option.entityType === 'PROFESSIONAL' && !pathname.includes('connections')) return navigate(user?.primaryProfile === PrimaryProfileType.Professional ? `/professional-profile/${option.id}` : `/job-postdetail/${option.id}`);
        if (option.entityType === 'COMPANY') return navigate(`/company-profile/${option.id}`);
    }

    useEffect(() => {
        if (search.length > 1) {
            refetch();
        }
        handleData();
    }, [search])

    useEffect(() => {
        handleData();
        if (pathname.includes('job') || pathname.includes('connections') || pathname.includes('reviews')) {
            setShowGrouping(false);
        } else {
            setShowGrouping(true);
        }
    }, [searchedData, pathname])

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: 1201,
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
                        <Autocomplete
                            freeSolo
                            disableClearable
                            filterSelectedOptions={!pathname.includes('connections')}
                            disableCloseOnSelect={pathname.includes('connections')}
                            options={options ?? []}
                            getOptionLabel={(option: any) => option?.term}
                            groupBy={showGrouping ? (option) => option.entityType : undefined}
                            onChange={(e, val) => handleNavigate(val)}
                            sx={{
                                backgroundColor: "#FCFBF8",
                                maxWidth: { md: '90%', xs: '100%' },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    padding: '16px 40px'
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '0 !important',
                                    color: '#23282B'
                                },
                                '& fieldset,.Mui-focused fieldset': {
                                    border: '0 !important'
                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder='Search by title, skill or company'
                                    onChange={(e) => setSearch(e.target.value)}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                                {params.InputProps.startAdornment}
                                            </>
                                        ),
                                        type: 'search',
                                    }}
                                />
                            )}
                            renderGroup={(params) => (
                                <li key={params.key}>
                                    <GroupHeader>{params.group}</GroupHeader>
                                    <GroupItems>{params.children}</GroupItems>
                                </li>
                            )}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{
                                        borderBottom: "1px solid #D8D8D8",
                                        padding: '12px 48px !important',
                                        color: '#808080'
                                    }}
                                    key={option.id}
                                    {...props}
                                >
                                    {
                                        (pathname.includes('connections') || pathname.includes('reviews')) ?
                                            <ConnectionOptions
                                                setShowAlert={setShowAlert}
                                                setMessage={setMessage}
                                                navigate={navigate}
                                                setType={setType}
                                                option={option}
                                                user={user}
                                            />
                                            :
                                            option.entityType === 'JOBPOST' ?
                                                `${option.term} (${option.companyName})` :
                                                <>
                                                    <Avatar
                                                        src={option.imageUrl}
                                                    />&nbsp;
                                                    {option.term}
                                                </>
                                    }

                                </Box>
                            )}
                        />
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
                            <Avatar
                                sx={{
                                    height: 48,
                                    width: 48
                                }}
                                src={user?.primaryProfile === PrimaryProfileType.Professional ? user?.professionalProfile?.photoUrl : user?.primaryCompanyProfile?.photoUrl}
                                alt="profile"
                            />
                        </IconButton>

                        <IconButton
                            onClick={({ currentTarget }) =>
                                setAnchorEl(currentTarget)
                            }
                            color="inherit"
                            aria-label="arrow down"
                        >
                            <ArrowDown />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    '& .MuiMenu-paper': {
                        p: 0,
                        width: '300px',
                        top: '64px !important'
                    }
                }}
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
                        <Avatar
                            sx={{
                                height: 24,
                                width: 24
                            }}
                            src={user?.primaryProfile === PrimaryProfileType.Professional ? user?.professionalProfile?.photoUrl : user?.primaryCompanyProfile?.photoUrl}
                            alt="profile"
                        />
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
                                {user?.primaryProfile === PrimaryProfileType.Professional ? `${user?.professionalProfile?.firstName} ${user?.professionalProfile?.lastName}` : user?.primaryCompanyProfile?.companyName}
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
                                {user?.primaryProfile === PrimaryProfileType.Professional ? user?.professionalProfile?.emailAddress : user?.primaryCompanyProfile?.emailAddress}
                            </Typography>
                        </Box>
                    </MenuItem>
                    {data.map((item) =>
                        item.visible ? (
                            <>
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
                                        borderBottom: item.separatorBottom
                                            ? '1px solid #EDEDED'
                                            : 0
                                    }}
                                    disabled={item.disable}
                                >
                                    {item.title}
                                </MenuItem>
                            </>
                        ) : null
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
                    onClick={() => {
                        signOut();
                        navigate('/login');
                    }}
                >
                    Sign out
                </MenuItem>
            </Menu>
            <SnackAlert
                open={showAlert}
                handleClose={() => setShowAlert(false)}
                message={message}
                type={type}
            />
        </>
    );
}

export default JobfactorAppBar;
interface IConnectionType {
    navigate: NavigateFunction,
    setType: React.Dispatch<React.SetStateAction<'success' | 'info' | 'warning' | 'error'>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
    user: any,
    option: {
        id: string;
        term: string;
        userId: string;
        isAdded: boolean;
        imageUrl: string;
        currentEmployment: {
            employmentLevel: string;
            companyName: string;
        }
    }
}
const ConnectionOptions = ({ option, user, navigate, setType, setMessage, setShowAlert }: IConnectionType) => {
    const sendConnectRequest = useSendConnectionRequest();
    const [isAdded, setIsAdded] = useState(option.isAdded ?? false);
    const queryClient = useQueryClient();

    const handleClick = () => navigate(user?.primaryProfile === PrimaryProfileType.Professional ? `/professional-profile/${option.id}` : `/job-postdetail/${option.id}`)

    const sendConnectionRequest = () => {
        const data = {
            sourceUserId: user?.professionalProfile?.userId ?? '',
            destinationUserId: option.userId
        }
        sendConnectRequest.mutate(data, {
            onSuccess: (res) => {
                setIsAdded(true);
                queryClient.invalidateQueries(QueryKeys.RetrieveConnections);
                queryClient.invalidateQueries(QueryKeys.RetrieveConnectionRequestSent);
                queryClient.invalidateQueries(QueryKeys.RetrieveConnectionRequestReceived);
                setType('success');
                setMessage('Request sent successfully.');
                setShowAlert(true);
            },
            onError: (err: AxiosError) => {
                if (axios.isAxiosError(err)) {
                    setType('error');
                    setMessage(err.response?.data?.message ?? 'Error occured please try again!');
                    setShowAlert(true);
                }
            }
        })
    }
    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'inset',
                    gap: '20px',
                }}
            >
                <Avatar
                    alt=""
                    src={option?.imageUrl}
                    sx={{ width: 56, height: 56 }}
                    onClick={handleClick}
                />
                <Box sx={{ width: '100%' }}>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#494949',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                        onClick={handleClick}
                    >
                        {option?.term}
                    </Typography>
                    {option?.currentEmployment ?
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                mt: '4px'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Open Sans',
                                    color: '#808080',
                                    letterSpacing: '0.0015em',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {option?.currentEmployment?.employmentLevel}
                            </Typography>
                            <Typography
                                component={'div'}
                                sx={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100px',
                                    background: '#494949',
                                    border: '2px solid #494949'
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Open Sans',
                                    color: '#808080'
                                }}
                            >
                                {option?.currentEmployment?.companyName}
                            </Typography>
                            <Typography
                                component={'div'}
                                sx={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100px',
                                    background: '#494949',
                                    border: '2px solid #494949'
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    fontFamily: 'Open Sans',
                                    color: '#FFFFFF',
                                    background: '#49B6FF',
                                    borderRadius: '6px',
                                    padding: '0px 12px'
                                }}
                            >
                                890
                            </Typography>
                        </Box>
                        : null
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '20px',
                        width: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Button
                        sx={{
                            borderRadius: '8px',
                            padding: '12px 16px',
                            border: '1px solid #05668D',
                            background: '#05668D',
                            fontSize: '14px',
                            fontWeight: '600',
                            textTransform: 'capitalize',
                            boxShadow: 'none',
                            width: 'auto',
                            whiteSpace: 'nowrap',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            ':hover': {
                                color: '#FFFFFF',
                                textDecoration: 'none',
                                background: '#05668D'
                            },
                            ':disabled': {
                                color: 'grey',
                                borderColor: '#ccc',
                                background: '#ccc'
                            }
                        }}
                        onClick={sendConnectionRequest}
                        disabled={isAdded}
                    >
                        {isAdded ? 'Added' : 'Add'}
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    ml: '77px',
                    mt: '5px'
                }}
            >
                {experienceLevels?.map(
                    (
                        item: ISkillsType,
                        index: number
                    ) => (
                        <ExperienceLevel
                            background={
                                item.background
                            }
                            shortForm={
                                item.shortForm
                            }
                            title={item.title}
                            key={`skill_${index}`}
                        />
                    )
                )}
                <Typography
                    component={'div'}
                    sx={{
                        ml: '4px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '100px',
                        background: '#494949',
                        border: '2px solid #494949'
                    }}
                />{' '}
                <Typography
                    component={'div'}
                    sx={{
                        ml: '4px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '100px',
                        background: '#494949',
                        border: '2px solid #494949'
                    }}
                />
            </Box>
        </Box>
    )
}

const experienceLevels = [
    { background: '#E75541', title: 'Begineer', shortForm: 'B' },
    { background: '#F6C70E', title: 'Mobile Int', shortForm: 'E' },
    {
        background: '#49B6FF',
        title: 'Customer Experience Design',
        shortForm: 'A'
    },
    { background: '#95C97A', title: 'Expert', shortForm: 'X' }
];