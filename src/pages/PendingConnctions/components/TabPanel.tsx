import { Box, TableCell, TableRow } from "@mui/material";
import ExperienceLevel from "./ExperienceLevel";
import TableWrapper from "./TableWrapper";
import UserActions from "./UserActions";
import UserDetails from "./UserDetails";
import PropTypes from 'prop-types';
import React from "react";

const experienceLevels = [{ background: "#E75541", title: "Begineer", shortForm: "B" }, { background: "#F6C70E", title: "Mobile Int", shortForm: "E" }, { background: "#49B6FF", title: "Customer Experience Design", shortForm: "A" }, { background: "#95C97A", title: "Expert", shortForm: "X" }]

const TabPanel = (props: any) => {
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
            page={page}
        >

            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user: any, index: number) => (
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
                            <UserActions user={user} tab={tab} />
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
                            {experienceLevels.map(item => <ExperienceLevel background={item.background} shortForm={item.shortForm} title={item.title} />)}
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </TableWrapper >
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    tab: PropTypes.string,
    data: PropTypes.array,
    activeTab: PropTypes.string
};

export default TabPanel;