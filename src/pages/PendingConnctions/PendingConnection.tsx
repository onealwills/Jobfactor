import React from 'react';
import image from '../../assets/images/feed2.png';
import CustomButton from '../../components/Button';
import UserActions from './components/UserActions';
import Pagination from '../../components/Pagination';
import Header from '../../components/Connection/Header';
import UserDetails from '../../components/Connection/UserDetails';
import ExperienceLevel from '../../components/Connection/ExperienceLevel';
import company from '../../assets/images/company.png'; import PropTypes from 'prop-types';
import {  Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

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
const companies = [
    {
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
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
        image: company,
        name: "Exoticca",
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: "Exoticca",
        points: '550',
        days: '3'
    }
]
const experienceLevels = [{ background: "#E75541", title: "Begineer", shortForm: "B" }, { background: "#F6C70E", title: "Mobile Int", shortForm: "E" }, { background: "#49B6FF", title: "Customer Experience Design", shortForm: "A" }, { background: "#95C97A", title: "Expert", shortForm: "X" }]

function PendingConnection() {
    const [tab, setTab]: any[] = React.useState('sent');

    const tabStyles = {
        fontWeight: '700',
        borderRadius: 0,
        padding: '12px 8px',
        width: '50%',
        boxShadow: 'none',
        ':hover': {
            boxShadow: 'none',
            color: 'white',
        }
    }
    const changeTab = (type: string) => {
        setTab(type);
    }

    return (
        <>
            <Box sx={{ ml: '35px' }}>
                <Header
                    data={data}
                />
                <Grid container mt={'20px'}>
                    <TableContainer
                        component={Paper}
                        sx={{
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                    >
                        <Table sx={{ minWidth: 650 }}>
                            <TableBody>
                                <TableRow>
                                    <Box sx={{ margin: '40px', marginBottom: '10px' }}>
                                        <CustomButton
                                            style={{
                                                background: tab === 'sent' ? '#055C7F' : '#EDEDED',
                                                color: tab === 'sent' ? '#FFFFFF' : '#23282B',
                                                ...tabStyles
                                            }}
                                            onClick={() => changeTab('sent')}
                                            title="Sent"
                                        />
                                        <CustomButton
                                            style={{
                                                background: tab === 'received' ? '#055C7F' : '#EDEDED',
                                                color: tab === 'received' ? '#FFFFFF' : '#23282B',
                                                ...tabStyles
                                            }}
                                            onClick={() => changeTab('received')}
                                            title="Received"
                                        />
                                    </Box>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TabPanel
                        activeTab={tab}
                        tab={'sent'}
                        data={companies}
                    />
                    <TabPanel
                        activeTab={tab}
                        tab={'received'}
                        data={data}
                    />
                </Grid>
            </Box>
        </>
    );
}

export default PendingConnection;


const TabPanel = (props: any) => {
    const { tab, data, activeTab } = props;
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;
    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };
    return (
        <TableContainer
            component={Paper}
            sx={{
                display: activeTab === tab ? "" : "none",
                width: "100%",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            }}
        >
            <Table sx={{ minWidth: 650 }}>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user: any, index: number) => (
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
                                    <UserDetails user={user} />
                                    <UserActions user={user} tab={tab} />
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
                                page={page + 1}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    tab: PropTypes.string,
    data: PropTypes.array,
    activeTab: PropTypes.string
};

