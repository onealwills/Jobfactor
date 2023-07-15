import React from 'react';
import Tabs from './components/Tabs';
import Header from '../Connections/components/Header';
import { Box, Grid } from '@mui/material';
import TabPanel from './components/TabPanel';
import { useGetConnectionRequestSent } from '../../utils/hooks/api/connections/useGetConnectionRequestSent';
import { useGetConnectionRequestReceived } from '../../utils/hooks/api/connections/useGetConnectionRequestReceived';
import { useAuth } from '../../utils/context/AuthContext';

function PendingConnection() {
    const { user } = useAuth();
    const [tab, setTab] = React.useState<string>('sent');
    const { data: sentRequests, isFetching } = useGetConnectionRequestSent(user?.id ?? '');
    const { data: receivedRequests } = useGetConnectionRequestReceived(user?.id ?? '');

    const changeTab = (type: string) => {
        setTab(type);
    };

    return (
        <>
            <Box sx={{ ml: '35px' }}>
                <Header
                    title={'PendingConnections'}
                />
                <Grid container mt={'20px'}>
                    {isFetching ?
                        null
                        :
                        <>
                            <Tabs changeTab={changeTab} tab={tab} />
                            <TabPanel activeTab={tab} tab={'sent'} data={sentRequests} />
                            <TabPanel activeTab={tab} tab={'received'} data={receivedRequests} />
                        </>
                    }
                </Grid>
            </Box>
        </>
    );
}

export default PendingConnection;
