import ComponentsOverrides from './overrides';
import { useMemo } from 'react';
import typography from './typography';
import { CssBaseline } from '@mui/material';
import {
    createTheme,
    ThemeOptions,
    StyledEngineProvider,
    ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        bold: true;
    }
}


type Props = {
    children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
    const themeOptions: ThemeOptions = useMemo(
        () => ({
            typography,
        }),
        [],
    );


    const jobFactorTheme = createTheme(themeOptions);
    jobFactorTheme.components = ComponentsOverrides(jobFactorTheme);
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={jobFactorTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}




