import {CssBaseline, ThemeProvider} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {jobFactorTheme} from '../src/theme/JobFactorTheme';
import type {Preview} from '@storybook/react';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: jobFactorTheme
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        })

    ],
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            expanded: true, // Adds the description and default columns
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
