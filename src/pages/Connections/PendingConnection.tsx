import React from 'react';
import Tabs from './components/Tabs';
import Header from '../Connections/components/Header';
import { Box, Grid } from '@mui/material';
import TabPanel from './components/TabPanel';
import image from '../../assets/images/feed2.png';
import company from '../../assets/images/company.png';

const data = [
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Aevon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    },
    {
        image,
        name: 'Zevon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3'
    }
];
const companies = [
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    },
    {
        image: company,
        name: 'Exoticca',
        points: '550',
        days: '3'
    }
];

function PendingConnection() {
    const [tab, setTab] = React.useState<string>('sent');
    const [users, setUsers] = React.useState<Array<Object>>([]);

    const changeTab = (type: string) => {
        setTab(type);
    };

    React.useEffect(() => {
        setUsers(data);
    }, []);

    return (
        <>
            <Box sx={{ ml: '35px' }}>
                <Header
                    setUsers={setUsers}
                    data={data}
                    tittle={'PendingConnections'}
                />
                <Grid container mt={'20px'}>
                    <Tabs changeTab={changeTab} tab={tab} />
                    <TabPanel activeTab={tab} tab={'sent'} data={companies} />
                    <TabPanel activeTab={tab} tab={'received'} data={data} />
                </Grid>
            </Box>
        </>
    );
}

export default PendingConnection;
