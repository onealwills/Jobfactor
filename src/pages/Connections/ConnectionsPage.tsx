import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import image from '../../assets/images/feed2.png'
import CustomButton from '../../components/Button';
import Pagination from '../../components/Pagination';
import company from '../../assets/images/company.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SelectDropdown from '../../components/Selectdropdown';
import { Avatar, Box, Grid, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

const data = [
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: "Exoticca",
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Aevon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Devon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: "Zevon Lane",
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    }
]


function ConnectionsPage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [users, setUsers]: any[] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const rowsPerPage = 8;

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };
    const sortData = (type: string) => {
        let sortedData = null
        if (type === 'A-Z') {
            sortedData = [...data].sort((a, b) =>
                a.name > b.name ? 1 : -1,
            );
        }
        if (type === 'Z-A') {
            sortedData = [...data].sort((a, b) =>
                a.name > b.name ? -1 : 1,
            );
        }
        setUsers(sortedData);
        setAnchorEl(null);
    }
    useEffect(() => {
        setUsers(data);
    }, [])

    return (
        <>
            <Box sx={{ ml: '35px' }}>
                <Grid container
                    sx={{
                        backgroundColor: '#FFFFFF',
                        alignItems: 'center',
                        padding: "32px 40px",
                        borderBottom: "1px solid #D9D9D9",
                    }}
                >
                    <Grid item xs={10}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px'
                        }}
                    >
                        <IconButton
                            onClick={() => navigate('/')}
                        >
                            <WestIcon />
                        </IconButton>
                        <Typography
                            component={'h1'}
                            sx={{
                                fontSize: '28px',
                                fontWeight: '600',
                                fontFamily: 'Open Sans',
                                color: "#23282B"
                            }}
                        >
                            Followers
                        </Typography>
                    </Grid>
                    <Grid item xs={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                    >
                        <SelectDropdown
                            label="Sort"
                            options={['A-Z', 'Z-A']}
                            style={{ width: '91px', height: '50px' }}
                            handleChange={(e: any) => sortData(e.target.value)}
                        />
                        <IconButton
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>


                    </Grid>
                </Grid>
                <Grid container mt={'20px'}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableBody>
                                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user: any, index: number) => (
                                    <TableRow key={`user_${index}`}>
                                        <TableCell
                                            sx={{
                                                padding: '40px 32px',
                                                paddingBottom: '25px'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'inset',
                                                    gap: '20px'
                                                }}
                                            >
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={user.image}
                                                    sx={{ width: 56, height: 56 }}
                                                />
                                                <Box sx={{ width: '100%' }}>
                                                    <Typography
                                                        component={'h1'}
                                                        sx={{
                                                            fontSize: '20px',
                                                            fontWeight: '600',
                                                            fontFamily: 'Open Sans',
                                                            color: '#494949'
                                                        }}
                                                    >{user.name}</Typography>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '20px'
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: '16px',
                                                                fontFamily: 'Open Sans',
                                                                color: '#808080',
                                                                letterSpacing: '0.0015em'
                                                            }}
                                                        >{user.designation ?? "COMPANY"}</Typography>
                                                        <Typography
                                                            component={'div'}
                                                            sx={{
                                                                width: '7px', height: '7px',
                                                                borderRadius: '100px',
                                                                background: '#494949',
                                                                border: '2px solid #494949',
                                                            }}
                                                        />
                                                        {user.designation &&
                                                            <>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: '16px',
                                                                        fontFamily: 'Open Sans',
                                                                        color: '#808080'
                                                                    }}
                                                                >{user.organization}</Typography>
                                                                <Typography
                                                                    component={'div'}
                                                                    sx={{
                                                                        width: '7px', height: '7px',
                                                                        borderRadius: '100px',
                                                                        background: '#494949',
                                                                        border: '2px solid #494949',
                                                                    }}
                                                                />
                                                            </>
                                                        }
                                                        <Typography
                                                            sx={{
                                                                fontSize: '20px',
                                                                fontWeight: '600',
                                                                fontFamily: 'Open Sans',
                                                                color: '#FFFFFF',
                                                                background: "#49B6FF",
                                                                borderRadius: '6px',
                                                                padding: "0px 12px"
                                                            }}
                                                        >{user.points}</Typography>
                                                    </Box>
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
                                                    <Typography
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontFamily: 'Open Sans',
                                                            fontWeight: '600',
                                                            color: '#808080',
                                                            mb: '10px'
                                                        }}
                                                    >{user.days} days</Typography>
                                                    <CustomButton
                                                        title="Withdraw"
                                                        variant='outlined'
                                                        style={{ color: "#05668D" }}
                                                    />
                                                    <CustomButton
                                                        title="Message"
                                                        style={{ background: '#05668D', border: '1px solid #05668D', color: "#FFFFFF" }}
                                                    />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    ml: '77px',
                                                    mt: '12px'
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        fontFamily: 'Open Sans',
                                                        color: '#FFFFFF',
                                                        background: "#E75541",
                                                        borderRadius: '6px',
                                                        padding: "4px 8px",
                                                        display: 'flex',
                                                        gap: '8px',
                                                        alignItems: 'center',
                                                    }}
                                                >Begineer   <Typography
                                                    sx={{
                                                        fontWeight: '700',
                                                        background: "rgba(5, 5, 5, 0.4)",
                                                        padding: '0px 4px',
                                                        lineHeight: '20px',
                                                        borderRadius: '4px'
                                                    }}
                                                >B</Typography>
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        fontFamily: 'Open Sans',
                                                        color: '#FFFFFF',
                                                        background: "#F6C70E",
                                                        borderRadius: '6px',
                                                        padding: "4px 8px",
                                                        display: 'flex',
                                                        gap: '8px',
                                                        alignItems: 'center',
                                                    }}
                                                >Mobile Int   <Typography
                                                    sx={{
                                                        fontWeight: '700',
                                                        background: "rgba(5, 5, 5, 0.4)",
                                                        padding: '0px 4px',
                                                        lineHeight: '20px',
                                                        borderRadius: '4px'
                                                    }}
                                                >E</Typography>
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        fontFamily: 'Open Sans',
                                                        color: '#FFFFFF',
                                                        background: "#49B6FF",
                                                        borderRadius: '6px',
                                                        padding: "4px 8px",
                                                        display: 'flex',
                                                        gap: '8px',
                                                        alignItems: 'center',
                                                    }}
                                                >Customer Experience Design   <Typography
                                                    sx={{
                                                        fontWeight: '700',
                                                        background: "rgba(5, 5, 5, 0.4)",
                                                        padding: '0px 4px',
                                                        lineHeight: '20px',
                                                        borderRadius: '4px'
                                                    }}
                                                >A</Typography>
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        fontFamily: 'Open Sans',
                                                        color: '#FFFFFF',
                                                        background: "#95C97A",
                                                        borderRadius: '6px',
                                                        padding: "4px 8px",
                                                        display: 'flex',
                                                        gap: '8px',
                                                        alignItems: 'center',
                                                    }}
                                                >Expert   <Typography
                                                    sx={{
                                                        fontWeight: '700',
                                                        background: "rgba(5, 5, 5, 0.4)",
                                                        padding: '0px 4px',
                                                        lineHeight: '20px',
                                                        borderRadius: '4px'
                                                    }}
                                                >X</Typography>
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell>
                                        <Pagination
                                            count={Math.ceil(data.length / rowsPerPage)}
                                            handleChangePage={handleChangePage}
                                        />
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 100,
                        width: '20ch',
                    },
                }}
            >
                {['A-Z', 'Z-A'].map((option: any) => (
                    <MenuItem key={option} onClick={() => sortData(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default ConnectionsPage;
