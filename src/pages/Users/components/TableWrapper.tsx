import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import Pagination from '../../../components/Pagination';

const TableWrapper = (props: PropTypes) => {
    const { data, rowsPerPage, handleChangePage, children } = props;
    return (
        <TableContainer
            component={Paper}
            sx={{
                boxShadow:
                    '-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)'
            }}
        >
            <Table>
                <TableBody>
                    {children}
                    {data.length > 10 ? (
                        <TableRow>
                            <TableCell>
                                <Pagination
                                    count={Math.ceil(data.length / rowsPerPage)}
                                    handleChangePage={handleChangePage}
                                />
                            </TableCell>
                        </TableRow>
                    ) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
interface PropTypes {
    data: Array<Object>;
    rowsPerPage: number;
    children: React.ReactNode;
    handleChangePage: (page: number) => void;
}
export default TableWrapper;
