import React from 'react';

const JobItemDetail = (props: { jobId?: string }) => {
    console.log(props.jobId);
    return <div>here is the details page for the jobItem</div>;
};

export default JobItemDetail;
