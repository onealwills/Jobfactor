import { Box, Chip } from '@mui/material';
import React from 'react';

const chipColorsMapping: Record<string, string> = {
    A: '#49B6FF',
    B: '#808080',
    E: '#F6C70E',
    L: '#07AF22'
};

const chipInfoColorsMapping: Record<string, string> = {
    A: '#2E6F9B',
    B: '#4F4F4F',
    E: '#967A0C',
    L: '#076B17'
};

const ChipInfo = (props: { type: string }) => {
    const { type } = props;
    return (
        <Box
            sx={{
                backgroundColor: chipInfoColorsMapping[type],
                height: 18,
                width: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px'
            }}
        >
            {type}
        </Box>
    );
};
const ChipItem = (props: { label: string; type: string }) => {
    const { label, type } = props;
    return (
        <Chip
            onDelete={() => {}}
            deleteIcon={<ChipInfo type={type} />}
            sx={{
                backgroundColor: chipColorsMapping[type],
                m: 1,
                color: 'white',
                fontWeight: 600,
                fontFamily: 'Open Sans',
                borderRadius: '8px',
                minHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: 0.75
            }}
            label={label}
        ></Chip>
    );
};
const ChipList = (props: IChipProps) => {
    const { chipsData } = props;
    return (
        <Box
            sx={{
                mx: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {chipsData.slice(0, 3).map((item) => (
                <ChipItem label={item.name} type={item.type} />
            ))}
            {chipsData.length > 3 ? (
                <Box sx={{ pr: 0.5 }}> {`+${chipsData.length - 3}`} </Box>
            ) : null}
        </Box>
    );
};

interface IChipProps {
    chipsData: { name: string; type: string }[];
}

export default ChipList;
