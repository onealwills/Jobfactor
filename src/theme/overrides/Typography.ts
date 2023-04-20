// {
//     props: { variant: 'poster' },
//     styles: theme.typography.poster,
// },
//
//

import { Theme } from '@mui/material/styles';


declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        displayLargeRegular: true;
        displayLargeSemiBold: true;
        displayLargeBold: true;
        displayMediumRegular: true;
        displayMediumSemiBold: true;
        displayMediumBold: true;
        displaySmallRegular: true;
        displaySmallSemiBold: true;
        displaySmallBold: true;
        headlineLargeRegular: true;
        headlineLargeSemiBold: true;
        headlineLargeBold: true;
        headlineMediumRegular: true;
        headlineMediumSemiBold: true;
        headlineMediumBold: true;
        headlineSmallRegular: true;
        headlineSmallSemiBold: true;
        headlineSmallBold: true;

        titleLargeRegular: true;
        titleLargeSemiBold: true;
        titleLargeBold: true;

        titleMediumRegular: true;
        titleMediumSemiBold: true;
        titleMediumBold: true;

        titleSmallRegular: true;
        titleSmallSemiBold: true;
        titleSmallBold: true;

        labelLargeRegular: true;
        labelLargeSemiBold: true;
        labelLargeBold: true;

        labelMediumRegular: true;
        labelMediumSemiBold: true;
        labelMediumBold: true;

        bodyLargeRegular: true;
        bodyLargeSemiBold: true;
        bodyLargeBold: true;
        
        bodyMediumRegular: true;
        bodyMediumSemiBold: true;
        bodyMediumBold: true;
    }
}

export default function Typography(theme: Theme) {
    return {
        MuiTypography: {
            styleOverrides: {},
        },
    };
}