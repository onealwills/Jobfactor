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
    A: '#49B6FF',
    B: '#E75541',
    E: '#967A0C',
    L: '#076B17',
    T: '#076B17',
    X: '#F6C70E'
};

const ChipInfo = (props: { type: string, showbackgrond?: boolean }) => {
    const { type, showbackgrond } = props;
    return (
        <Box
            sx={{
                backgroundColor: showbackgrond ? 'rgba(5, 5, 5, 0.4)' : chipInfoColorsMapping[type],
                height: 18,
                width: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
            }}
        >
            {type}
        </Box>
    );
};
const ChipItem = (props: { label: string; type: string, showbackgrond?: boolean }) => {
    const { label, type, showbackgrond } = props;
    return (
        <Chip
            onDelete={() => { }}
            deleteIcon={<ChipInfo type={type} showbackgrond={showbackgrond} />}
            sx={{
                backgroundColor: showbackgrond ? chipColorsMapping[type] : '#808080',
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
                        <ChipItem label={item.name} type={item.type} showbackgrond={item?.showbackground} />
                    ))}

            {displayAll &&
                chipsData.map((item) => (
                    <ChipItem label={item.name} type={item.type} showbackgrond={item?.showbackground} />
                ))}

            {!displayAll && chipsData.length > 3 ? (
                <Box sx={{ pr: 0.5 }}> {`+${chipsData.length - 3}`} </Box>
            ) : null}
        </Box>
    );
};

interface IChipProps {
    chipsData: { name: string; type: string, showbackground?: boolean }[];
    displayAll?: boolean;
}

export default ChipList;
