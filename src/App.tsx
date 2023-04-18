import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './routing/AppRouter';
import { AuthProvider } from './utils/context/AuthContext';
import { JobFactorTheme } from './theme/JobFactorTheme';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={JobFactorTheme}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <AppRouter />
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
