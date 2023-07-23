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
    const { data, rowsPerPage, handleChangePage, activeTab, tab, children } = props;
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
                    {data?.length > rowsPerPage ?
                        <TableRow>
                            <TableCell>
                                <Pagination
                                    count={Math.ceil(data?.length / rowsPerPage)}
                                    handleChangePage={handleChangePage}
                                />
                            </TableCell>
                        </TableRow>
                        : null
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
interface PropTypes {
    data: Array<Object>;
    rowsPerPage: number;
    activeTab?: string;
    tab?: string;
    children: React.ReactNode;
    handleChangePage: (page: number) => void;
}
export default TableWrapper;
