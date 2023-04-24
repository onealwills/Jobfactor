// ----------------------------------------------------------------------

export function remToPx(value: string) {
    return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
    return `${value / 16}rem`;
}

export function responsiveFontSizes({
    sm,
    md,
    lg
}: {
    sm: number;
    md: number;
    lg: number;
}) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm)
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md)
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg)
        }
    };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Open Sans'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    displayLargeRegular: {
        fontWeight: 400,
        fontSize: '57px',
        lineHeight: '64px'
    },
    displayLargeSemiBold: {
        fontWeight: 600,
        fontSize: '57px',
        lineHeight: '64px'
    },
    displayLargeBold: {
        fontWeight: 700,
        fontSize: '57px',
        lineHeight: '64px'
    },

    displayMediumRegular: {
        fontWeight: 400,
        fontSize: '45px',
        lineHeight: '52px'
    },
    displayMediumSemiBold: {
        fontWeight: 600,
        fontSize: '45px',
        lineHeight: '52px'
    },
    displayMediumBold: {
        fontWeight: 700,
        fontSize: '45px',
        lineHeight: '52px'
    },

    displaySmallRegular: {
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '44px'
    },
    displaySmallSemiBold: {
        fontWeight: 600,
        fontSize: '36px',
        lineHeight: '44px'
    },
    displaySmallBold: {
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '44px'
    },

    headlineLargeRegular: {
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '40px'
    },
    headlineLargeSemiBold: {
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '40px'
    },
    headlineLargeBold: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '40px'
    },

    headlineMediumRegular: {
        fontWeight: 400,
        fontSize: '28px',
        lineHeight: '36px'
    },
    headlineMediumSemiBold: {
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '36px'
    },
    headlineMediumBold: {
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '36px'
    },

    headlineSmallRegular: {
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '32px'
    },
    headlineSmallSemiBold: {
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '32px'
    },
    headlineSmallBold: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '32px'
    },

    titleLargeRegular: {
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '28px'
    },
    titleLargeSemiBold: {
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '28px'
    },
    titleLargeBold: {
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '28px'
    },

    titleMediumRegular: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
    },
    titleMediumSemiBold: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px'
    },
    titleMediumBold: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px'
    },

    titleSmallRegular: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px'
    },
    titleSmallSemiBold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px'
    },
    titleSmallBold: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px'
    },

    labelLargeRegular: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px'
    },
    labelLargeSemiBold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px'
    },
    labelLargeBold: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px'
    },

    labelMediumRegular: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px'
    },
    labelMediumSemiBold: {
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px'
    },
    labelMediumBold: {
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '16px'
    },

    bodyLargeRegular: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
    },
    bodyLargeSemiBold: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px'
    },
    bodyLargeBold: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px'
    },

    bodyMediumRegular: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px'
    },
    bodyMediumSemiBold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px'
    },
    bodyMediumBold: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px'
    }
} as const;

export default typography;
