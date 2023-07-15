import { useMutation, UseMutationResult } from "react-query";
import axiosInstance from "../axiosConfig";
import { IConnectionResponse, IRespondConnection } from "./types";



async function createRespondRequest(
    postRequest: IRespondConnection
) {
    const response = await axiosInstance.post(
        `/api/connection-requests/respond-connection-request`,
        postRequest
    );
    const data = await response.data;
    return data;
}

export function useRespondConnectionRequest(): UseMutationResult<
    IConnectionResponse,
    unknown,
    IRespondConnection
> {
    return useMutation(createRespondRequest);
}
