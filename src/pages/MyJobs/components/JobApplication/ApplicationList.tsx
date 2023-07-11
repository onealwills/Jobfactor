import React from 'react';
import { Box, Grid } from '@mui/material';
import JobMetrics from '../JobsList/JobMetrics';
import { JobApplicationItem } from '../../types/JobApplicationItem';
import ApplicationItem from './ApplicationItem';
import Pagination from '../../../../components/Pagination';

const ApplicationList = (props: {
    data: JobApplicationItem[];
    showMetrics?: boolean;
    updateData?: (applicantId: string) => void;
}) => {
    const { data, showMetrics, updateData = () => { } } = props;
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: '28px' }}>
            <Box>
                <Box sx={{ mx: '40px' }}>
                    {showMetrics ? <JobMetrics /> : null}
                </Box>
                <Grid
                    container
                    sx={{
                        flexGrow: 1,
                        marginTop: '20px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {data?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                    )?.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            xl={12}
                            sx={{
                                width: 'full',
                                margin: '10px 0'
                            }}
                        >
                            <ApplicationItem ApplicantInfo={item} updateData={updateData} />
                        </Grid>
                    ))}
                    {data?.length > rowsPerPage ?
                        <Pagination
                            count={Math.ceil(data.length / rowsPerPage)}
                            handleChangePage={handleChangePage}
                        />
                        :
                        null
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default ApplicationList;
