import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import Pagination from '../../../components/Pagination';

const TableWrapper = (props: IPropTypes) => {
    const {
        data,
        rowsPerPage = 0,
        hidePagination = false,
        handleChangePage,
        activeTab,
        tab,
        children
    } = props;
    return (
        <TableContainer
            component={Paper}
            sx={
                activeTab !== undefined && activeTab !== ''
                    ? {
                          display: activeTab === tab ? '' : 'none',
                          width: '100%',
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0
                      }
                    : {}
            }
        >
            <Table sx={{ minWidth: 650 }}>
                <TableBody>
                    {children}
                    {data.length > 10 && !hidePagination ? (
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
interface IPropTypes {
    data: Array<Object>;
    rowsPerPage?: number;
    activeTab?: string;
    tab?: string;
    children: React.ReactNode;
    hidePagination?: boolean;
    handleChangePage?: (page: number) => void;
}
export default TableWrapper;
