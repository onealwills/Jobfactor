import { Box, Chip } from '@mui/material';
import React from 'react';

const chipColorsMapping: Record<string, string> = {
    A: '#49B6FF',
    B: '#808080',
    E: '#F6C70E',
    L: '#07AF22',
    T: '#07AF22',
    X: '#95C97A'
};

const chipInfoColorsMapping: Record<string, string> = {
    A: '#2E6F9B',
    B: '#4F4F4F',
    E: '#967A0C',
    L: '#076B17',
    T: '#076B17',
    X: '#5C7B4B'
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
    const { chipsData, displayAll } = props;
    return (
        <Box
            sx={{
                mx: !displayAll ? '15px' : '-6px',
                display: 'flex',
                justifyContent: !displayAll ? 'center' : 'start',
                alignItems: 'center'
            }}
        >
            {!displayAll &&
                chipsData
                    .slice(0, 3)
                    .map((item) => (
                        <ChipItem label={item.name} type={item.type} />
                    ))}

            {displayAll &&
                chipsData.map((item) => (
                    <ChipItem label={item.name} type={item.type} />
                ))}

            {!displayAll && chipsData.length > 3 ? (
                <Box sx={{ pr: 0.5 }}> {`+${chipsData.length - 3}`} </Box>
            ) : null}
        </Box>
    );
};

interface IChipProps {
    chipsData: { name: string; type: string }[];
    displayAll?: boolean;
}

export default ChipList;
