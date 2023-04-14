import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Pagination from '../../../components/Pagination';

const TableWrapper = (props: any) => {
    const { children, data, rowsPerPage, handleChangePage } = props;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableBody>
                    {children}
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
    )
}

export default TableWrapper