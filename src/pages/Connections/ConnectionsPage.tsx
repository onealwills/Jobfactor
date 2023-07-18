import React from 'react';
import Header from './components/Header';
import UserActions from './components/UserActions';
import UserDetails from './components/UserDetails';
import TableWrapper from './components/TableWrapper';
import ExperienceLevel from './components/ExperienceLevel';
import { Box, Grid, TableCell, TableRow, Typography } from '@mui/material';
import { useGetConnections } from '../../utils/hooks/api/connections/useGetConnections';
import { useAuth } from '../../utils/context/AuthContext';

interface IConnectionRequestType {
    name: string
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


function ConnectionsPage() {
    const [users, setUsers] = React.useState<Array<IConnectionRequestType>>([]);
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;
    const { user } = useAuth();

    const { data: connections, isFetching } = useGetConnections(user?.id ?? '');

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    React.useEffect(() => {
        setUsers(connections);
    }, [connections]);
    
    return (
        <Box sx={{ ml: '35px' }}>
            <Header setUsers={setUsers} data={connections} title={'ConnectionPage'} />
            <Grid container mt={'20px'}>
                {isFetching ?
                    null
                    :
                    <TableWrapper
                        handleChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        data={users}
                    >
                        {users
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            ?.map((user: any, index: number) => (
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
                                            <UserDetails user={user?.destinationUser} />
                                            <UserActions
                                                user={user}
                                                title={'ConnectionPage'}
                                            />
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
                                            {experienceLevels.map((item) => (
                                                <ExperienceLevel
                                                    background={item.background}
                                                    shortForm={item.shortForm}
                                                    title={item.title}
                                                />
                                            ))}
                                            <Typography
                                                component={'div'}
                                                sx={{
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
                                                    ml: '8px',
                                                    width: '7px',
                                                    height: '7px',
                                                    borderRadius: '100px',
                                                    background: '#494949',
                                                    border: '2px solid #494949'
                                                }}
                                            />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableWrapper>
                }
            </Grid>
        </Box>
    );
}

export default ConnectionsPage;
