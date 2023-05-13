import { Box, TableCell, TableRow, Typography } from '@mui/material';
import ExperienceLevel from '../../Connections/components/ExperienceLevel';
import TableWrapper from '../../Connections/components/TableWrapper';
import UserActions from '../../Connections/components/UserActions';
import UserDetails from '../../Connections/components//UserDetails';
import React from 'react';

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

const TabPanel = (props: TabProps) => {
    const { tab, data, activeTab } = props;
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;
    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };
    return (
        <TableWrapper
            activeTab={activeTab}
            tab={tab}
            data={data}
            handleChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
        >
            {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user: any, index: number) => (
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
                                <UserActions
                                    user={user}
                                    tab={tab}
                                    title={'PendingConnectionPage'}
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
    );
};
interface TabProps {
    data: Array<Object>;
    activeTab: string;
    tab: string;
}

export default TabPanel;
