import { Paper, Table, TableBody, TableContainer, TableRow } from '@mui/material';
import CustomButton from '../../../components/Button';
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
    }
}

const Tabs = (props: any) => {
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
    )
}

export default Tabs