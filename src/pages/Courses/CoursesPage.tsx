import { useQueryClient } from 'react-query';
import { useGetAccounts } from '../../utils/hooks/api/account/useGetAccounts';

function CoursesPage() {
    const { isLoading, isError, data, error, isFetching } = useGetAccounts();

    const queryClient = useQueryClient();

    return (
        <div>
            <h1>Courses</h1>

            <>Page is unavailable</>
        </div>
    );
}

export default CoursesPage;
