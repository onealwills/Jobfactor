import React from 'react';
import Header from './components/Header';
import image from '../../assets/images/feed2.png'
import UserDetails from './components/UserDetails';
import Pagination from '../../components/Pagination';
import company from '../../assets/images/company.png';
import ExperienceLevel from './components/ExperienceLevel';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

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
const experienceLevels = [{ background: "#E75541", title: "Begineer", shortForm: "B" }, { background: "#F6C70E", title: "Mobile Int", shortForm: "E" }, { background: "#49B6FF", title: "Customer Experience Design", shortForm: "A" }, { background: "#95C97A", title: "Expert", shortForm: "X" }]

function ConnectionsPage() {
    const [users, setUsers]: any[] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    React.useEffect(() => {
        setUsers(data);
    }, [])

    return (
            <Box sx={{ ml: '35px' }}>
                <Header
                    setUsers={setUsers}
                    data={data}
                />
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
                                            <UserDetails user={user} />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    ml: '77px',
                                                    mt: '12px'
                                                }}
                                            >
                                                {experienceLevels.map(item => <ExperienceLevel background={item.background} shortForm={item.shortForm} title={item.title} />)}
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
    );
}

export default ConnectionsPage;
