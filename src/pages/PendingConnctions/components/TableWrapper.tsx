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
    const { data, rowsPerPage, handleChangePage, activeTab, tab, children } =
        props;
    return (
        <TableContainer
            component={Paper}
            sx={{
                display: activeTab === tab ? '' : 'none',
                width: '100%',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            }}
        >
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
    );
};
interface PropTypes {
    data: Array<Object>;
    rowsPerPage: number;
    activeTab: string;
    tab: string;
    children: React.ReactNode;
    handleChangePage: (page: number) => void;
}
export default TableWrapper;
