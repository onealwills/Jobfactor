import { Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        soft: true;
    }
}

export default function Button(theme: Theme) {
    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: false,
                disableRipple: false,
            },

            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        fontWeight: 600,
                        backgroundColor: '#FCFBF8',
                        border: '1px solid #05668D',
                        borderRadius: '8px',
                        paddingY: '8px',
                        width: '100%',
                        textTransform: 'none',
                        color: '#05668D',
                        fontFamily: 'open sans',
                        '&:hover': {
                            border: '1px solid #05668D',
                        },
                    },
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        backgroundColor: '#05668D',
                        color: 'white',
                        textTransform: 'none',
                        paddingY: '8px',
                        fontWeight: 700,
                        fontSize: 16,
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#05668D',
                            color: 'white',
                        },
                    },
                },
            ],
        },
    };
}