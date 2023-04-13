import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './routing/AppRouter';
import { AuthProvider } from './utils/context/AuthContext';

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
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <AppRouter />
                </AuthProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
