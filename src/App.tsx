import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './routing/AppRouter';
import { AuthProvider } from './utils/context/AuthContext';
import ThemeProvider from './theme/JobFactorTheme';
import { Backdrop, CircularProgress } from '@mui/material';

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
                        <div className='global_loader'>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: 9999 }}
                                open={true}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
