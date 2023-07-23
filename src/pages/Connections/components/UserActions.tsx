import { Box, Button, Typography } from '@mui/material';
import moment from 'moment';
import { useQueryClient } from 'react-query';
import { useRespondConnectionRequest } from '../../../utils/hooks/api/connections/useRespondConnectionRequest';
import { QueryKeys } from '../../../utils/hooks/api/QueryKey';
import { useAuth } from '../../../utils/context/AuthContext';
const UserActions = (props: PropTypes) => {
    const { user, tab, title } = props;
    const { user: loggedInUser } = useAuth();
    const queryClient = useQueryClient();
    const respondRequest = useRespondConnectionRequest();

    const handleResponse = (respondStatus: string) => {
        const data = {
            sourceUserId: user?.destinationUser?.userId ? user?.destinationUser?.userId : user?.sourceUser?.userId ? user?.sourceUser?.userId : (loggedInUser?.professionalProfile?.id ?? ''),
            destinationUserId: user?.userId ?? user?.destinationUser?.userId,
            connectionLinkId: user.connectionLinkId,
            connectionRequestId: user.connectionRequestId ?? user?.id,
            respondStatus
        }
        respondRequest.mutate(data, {
            onSuccess: (res) => {
                queryClient.invalidateQueries(QueryKeys.RetrieveConnections);
                queryClient.invalidateQueries(QueryKeys.RetrieveConnectionRequestSent);
                queryClient.invalidateQueries(QueryKeys.RetrieveConnectionRequestReceived);
                console.log('onSuccess', res);
            },
            onError: (err) => {
                console.log('onError', err);
            }
        })
    }
    return (
        <Box
            sx={{
                display: 'flex',
                // alignItems: 'flex-end',
                WebkitJustifyContent: "center",
                alignItems: "center",
                gap: '20px',
                width: '100%',
                justifyContent: 'flex-end'
            }}
        >
            <Typography
                sx={{
                    fontSize: '16px',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    color: '#808080',
                    mb: '10px'
                }}
            >
                {moment(user.createdAt).fromNow()}
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '8px',
                    padding: '10px 36px',
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    color: '#05668D',
                    width: '120px',
                    minWidth: '120px'
                }}
                onClick={() => handleResponse('REJECTED')}
            >
                {title === 'ConnectionPage'
                    ? 'Withdraw'
                    : tab === 'sent'
                        ? 'Withdraw'
                        : 'Ignore'}
            </Button>
            {title === 'PendingConnectionPage' ? (
                <>
                    {tab === 'received' && (
                        <Button
                            sx={{
                                borderRadius: '8px',
                                background: '#05668D',
                                padding: '10px 36px',
                                border: '1px solid #05668D',
                                color: '#FFFFFF',
                                fontSize: '14px',
                                fontWeight: '700',
                                textTransform: 'capitalize',
                                width: '120px',
                                minWidth: '120px',
                                boxShadow: 'none',
                                textDecoration: 'none'
                            }}
                            onClick={() => handleResponse('ACCEPTED')}
                        >
                            Add
                        </Button>
                    )}
                </>
            ) : (
                <Button
                    sx={{
                        borderRadius: '8px',
                        padding: '10px 36px',
                        border: '1px solid #05668D',
                        background: '#05668D',
                        fontSize: '14px',
                        fontWeight: '700',
                        textTransform: 'capitalize',
                        boxShadow: 'none',
                        width: '120px',
                        minWidth: '120px',
                        color: '#FFFFFF'
                    }}
                >
                    Message
                </Button>
            )}
        </Box>
    );
};
interface PropTypes {
    user: User;
    tab?: string;
    title: string;
}
type User = {
    createdAt: number;
    receiver: {
        userId: string
    }
    sender: {
        userId: string
    }
    destinationUser: {
        userId: string
    }
    sourceUser: {
        userId: string
    }
    connectionLinkId: string;
    connectionRequestId: string;
    userId: string;
    id: string;
};
export default UserActions;
