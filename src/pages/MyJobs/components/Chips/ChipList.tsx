import { Box, SxProps, Theme, Typography } from '@mui/material';

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

const ChipInfo = (props: { type: string; showbackgrond?: boolean }) => {
    const { type, showbackgrond } = props;
    return (
        <Box
            sx={{
                backgroundColor: showbackgrond
                    ? 'rgba(5, 5, 5, 0.4)'
                    : chipInfoColorsMapping[type],
                height: '16px',
                width: '17px',
                p: '0px 2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px'
            }}
        >
            <Typography
                variant='labelLargeBold'
                color={'#FFF'}
            >
                {type}
            </Typography>
        </Box>
    );
};
const ChipItem = (props: {
    label: string;
    type: string;
    showbackgrond?: boolean;
}) => {
    const { label, type, showbackgrond } = props;
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: showbackgrond ? chipColorsMapping[type] : '#808080',
                borderRadius: '4px',
                p: '4px 8px',
            }}
        >
            <Typography
                variant='labelMediumSemiBold'
                color={'#FFF'}
                whiteSpace={'nowrap'}
            >
                {label}
            </Typography>
            <ChipInfo type={type} showbackgrond={showbackgrond} />
        </Box >
    );
};
const ChipList = ({ chipsData, displayAll, containerStyle }: IChipProps) => {
    return (
        <Box
            sx={{
                mt: '12px',
                display: 'flex',
                justifyContent: !displayAll ? 'center' : 'start',
                alignItems: 'center',
                gap: '8px',
                ...containerStyle
            }}
        >
            {!displayAll ?
                chipsData
                    .slice(0, 3)
                    .map((item) => (
                        <ChipItem
                            label={item.name}
                            type={item.type}
                            showbackgrond={item?.showbackground}
                        />
                    ))
                : null
            }

            {displayAll ?
                chipsData.map((item) => (
                    <ChipItem
                        label={item.name}
                        type={item.type}
                        showbackgrond={item?.showbackground}
                    />
                ))
                : null
            }
            {!displayAll && chipsData.length > 3 ? (
                <Typography sx={{ pr: 0.5 }} color={'#23282B'} variant='labelLargeRegular'> {`+${chipsData.length - 3}`} </Typography>
            ) : null}
        </Box>
    );
};

interface IChipProps {
    chipsData: { name: string; type: string; showbackground?: boolean }[];
    displayAll?: boolean;
    containerStyle?: SxProps<Theme>
}

export default ChipList;
