export interface IRespondConnection {
    sourceUserId: string;
    destinationUserId: string;
    connectionLinkId: string;
    respondStatus: string
}

export interface IConnectionResponse {
    sourceUserId: string;
    destinationUserId: string;
    connectionLinkId: string;
    status: string;
    id: string,
    direction: string,
    createdAt: number,
    updatedAt: number
}

export interface ISendConnectionRequest {
    sourceUserId: string;
    destinationUserId: string;
}