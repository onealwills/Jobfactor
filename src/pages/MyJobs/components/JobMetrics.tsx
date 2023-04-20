import React from 'react';
import { Box } from '@mui/material';

const LineIcon = () => {
    return (
        <svg
            width='16'
            height='1'
            viewBox='0 0 16 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <line y1='0.5' x2='16' y2='0.5' stroke='#808080' />
        </svg>
    );
};

function JobMetricCircle(props: { label: string; bgColor: string }) {
    const { label, bgColor } = props;
    return (
        <Box
            sx={{
                backgroundColor: bgColor,
                height: 32,
                width: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100px',
                color: 'white',
            }}
        >
            {label}
        </Box>
    );
}

function MetricLabel(props: { label: string }) {
    const { label } = props;
    return (
        <Box
            sx={{
                borderRadius: '0px 100px 100px 0px',
                backgroundColor: '#FFFAF1',
                px: 1.5,
                py: 1,
                color: '#23282B',
            }}
        >
            {label}
        </Box>
    );
}

const NotAFit = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <JobMetricCircle label={'1'} bgColor={'#E75541'} />
            <Box sx={{ ml: 0.5 }} />
            <LineIcon />
            <Box sx={{ ml: 0.5 }} />
            <JobMetricCircle label={'3'} bgColor={'#E75541'} />
            <Box sx={{ ml: 1 }} />
            <MetricLabel label={'Not a fit'} />
        </Box>
    );
};

const LowFit = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <JobMetricCircle label={'4'} bgColor={'#F6C70E'} />
            <Box sx={{ ml: 0.5 }} />
            <LineIcon />
            <Box sx={{ ml: 0.5 }} />
            <JobMetricCircle label={'5'} bgColor={'#F6C70E'} />
            <Box sx={{ ml: 1 }} />
            <MetricLabel label={'Low fit'} />
        </Box>
    );
};

const PossibleMatch = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <JobMetricCircle label={'6'} bgColor={'#49B6FF'} />
            <Box sx={{ ml: 0.5 }} />
            <LineIcon />
            <Box sx={{ ml: 0.5 }} />
            <JobMetricCircle label={'7'} bgColor={'#49B6FF'} />
            <Box sx={{ ml: 1 }} />
            <MetricLabel label={'Possible Match'} />
        </Box>
    );
};

const GoodMatch = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <JobMetricCircle label={'8'} bgColor={'#95C97A'} />
            <Box sx={{ ml: 1 }} />
            <MetricLabel label={'Good Match'} />
        </Box>
    );
};

const BestFit = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <JobMetricCircle label={'9'} bgColor={'#07AF22'} />
            <Box sx={{ ml: 0.5 }} />
            <LineIcon />
            <Box sx={{ ml: 0.5 }} />
            <JobMetricCircle label={'10'} bgColor={'#07AF22'} />
            <Box sx={{ ml: 1 }} />
            <MetricLabel label={'Best fit'} />
        </Box>
    );
};
const JobMetrics = () => {
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', mt: 1, pt: 1 }}>
            <Box sx={{ textTransform: 'uppercase', color: '#23282B' }}>Job Fit Metrics </Box>
            <Box sx={{ display: 'flex', mt: 1.5, gap: 2 }}>
                <NotAFit />
                <LowFit />
                <PossibleMatch />
                <GoodMatch />
                <BestFit />
            </Box>
        </Box>
    );
};

export default JobMetrics;
