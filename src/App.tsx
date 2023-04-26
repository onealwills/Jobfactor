import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './routing/AppRouter';
import { AuthProvider } from './utils/context/AuthContext';
import ThemeProvider from './theme/JobFactorTheme';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    return (
        <>
            <ThemeProvider>
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
