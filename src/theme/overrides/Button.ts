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
                disableRipple: false
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
                            backgroundColor: '#FFF9ED',
                            border: '1px solid #05668D'
                        }
                    }
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        backgroundColor: '#05668D',
                        color: 'white',
                        textTransform: 'none',
                        borderRadius: '8px',
                        paddingY: '8px',
                        fontWeight: 600,
                        fontSize: 16,
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#055C7F',
                            color: 'white'
                        }
                    }
                },
                {
                    props: {
                        variant: 'text'
                    },
                    style: {
                        color: '#05668D',
                        textTransform: 'none',
                        //borderRadius: '8px',
                        //paddingY: '8px',
                        fontWeight: 600,
                        fontSize: 16,
                        width: '100%',
                        textDecoration: 'underline',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#05668D',
                            textDecoration: 'underline'
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            color: '#05668D'
                        }
                    }
                }
            ]
        }
    };
}
