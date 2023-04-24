import { Box, Card, Typography } from '@mui/material';
import { useQueryClient } from 'react-query';
import { useGetAccounts } from '../../utils/hooks/api/account/useGetAccounts';
import { AccountResponse } from '../../utils/hooks/api/account/types';

function CoursesPage() {
    const { isLoading, isError, data, error, isFetching } = useGetAccounts();

    const queryClient = useQueryClient();

    return (
        <div>
            <h1>Posts</h1>

            <Box sx={{ maxWidth: '600px' }}>
                {!!data?.length ? (
                    <>
                        <Box
                            sx={{
                                maxWidth: '600px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto'
                            }}
                        >
                            {data.map((account: AccountResponse) => (
                                <Card
                                    sx={{
                                        mt: 2,
                                        p: 4,
                                        maxWidth: '600px',
                                        overflow: 'auto'
                                    }}
                                    key={account.id}
                                >
                                    <Typography
                                        sx={{ mt: '6px' }}
                                        color={'#23282B'}
                                        fontSize={16}
                                        fontFamily={'open sans'}
                                        fontWeight={700}
                                    >
                                        {account.emailAddress}
                                    </Typography>
                                    <Typography
                                        sx={{ mt: '6px' }}
                                        color={'#23282B'}
                                        fontSize={14}
                                        fontFamily={'open sans'}
                                    >
                                        <pre>
                                            {JSON.stringify(
                                                account.user,
                                                undefined,
                                                2
                                            )}
                                        </pre>
                                    </Typography>
                                </Card>
                            ))}
                        </Box>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
                ) : (
                    <>Accounts are unavailable</>
                )}
            </Box>
        </div>
    );
}

export default CoursesPage;
