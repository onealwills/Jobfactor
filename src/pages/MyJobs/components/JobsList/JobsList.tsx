import React from 'react';
import { Box, Grid } from '@mui/material';
import JobItem from '../JobItem/JobItem';
import JobMetrics from './JobMetrics';
import { IJobItem } from '../../types/IJobItem';
import JobListHeader from './JobListHeader';
import Pagination from '../../../../components/Pagination';

const JobsList = (props: {
    data: IJobItem[];
    title: string;
    description: string;
    showMetrics?: boolean;
    showheader?: boolean;
    updateData?: (jobId: string) => void;

}) => {
    const { data, title, description, showMetrics, showheader, updateData = () => { } } = props;
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;
    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };
    return (
        <>
            {showMetrics ?
                <Box sx={{ mt: '20px' }}>
                    <JobMetrics />
                </Box>
                : null
            }
            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    mt: '20px',
                    pb: '20px'
                }}
            >
                <Box>
                    {showheader ? <JobListHeader title={title} description={description} /> : null}
                    <Grid
                        container
                        sx={{
                            gap: '32px',
                            pt: '24px',
                            justifyContent: 'center',
                        }}
                    >
                        {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item) => <JobItem jobInfo={item} updateData={updateData} />)}
                        {(data?.length > rowsPerPage) ?
                            <Pagination
                                count={Math.ceil(data.length / rowsPerPage)}
                                handleChangePage={handleChangePage}
                            />
                            : null
                        }
                    </Grid>
                </Box >
            </Box >
        </>
    );
};

export default JobsList;
