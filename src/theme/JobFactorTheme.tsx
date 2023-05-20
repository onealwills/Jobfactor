import typography from './typography';
import { CssBaseline } from '@mui/material';
import {
    createTheme,
    ThemeOptions,
    StyledEngineProvider,
    ThemeProvider as MUIThemeProvider
} from '@mui/material/styles';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/material-icons';

// Import ComponentsOverrides correctly
import ComponentsOverrides from './overrides';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        bold: true;
    }
}

type Props = {
    children: React.ReactNode;
};

const themeOptions: ThemeOptions = {
    palette: {
        background: {
            default: '#fcfbf8'
        }
    },
    typography
};

export const jobFactorTheme = createTheme(themeOptions);
jobFactorTheme.components = ComponentsOverrides(jobFactorTheme);

export default function ThemeProvider({ children }: Props) {
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={jobFactorTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
