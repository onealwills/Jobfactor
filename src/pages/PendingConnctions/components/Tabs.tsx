import {
    Button,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableRow
} from '@mui/material';
import { Box } from '@mui/system';

const tabStyles = {
    fontWeight: '700',
    borderRadius: 0,
    padding: '12px 8px',
    width: '50%',
    boxShadow: 'none',
    ':hover': {
        boxShadow: 'none',
        color: 'white',
        background: '#05668D'
    }
};

const Tabs = (props: PropTypes) => {
    const { tab, changeTab } = props;
    return (
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
                            <Button
                                sx={{
                                    background:
                                        tab === 'sent' ? '#055C7F' : '#EDEDED',
                                    color:
                                        tab === 'sent' ? '#FFFFFF' : '#23282B',
                                    fontSize: '14px',
                                    textTransform: 'capitalize',
                                    ...tabStyles
                                }}
                                onClick={() => changeTab('sent')}
                            >
                                Sent
                            </Button>
                            <Button
                                sx={{
                                    background:
                                        tab === 'received'
                                            ? '#055C7F'
                                            : '#EDEDED',
                                    color:
                                        tab === 'received'
                                            ? '#FFFFFF'
                                            : '#23282B',
                                    fontSize: '14px',
                                    textTransform: 'capitalize',
                                    ...tabStyles
                                }}
                                onClick={() => changeTab('received')}
                            >
                                Received
                            </Button>
                        </Box>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
interface PropTypes {
    tab: string;
    changeTab: (type: string) => void;
}
export default Tabs;
