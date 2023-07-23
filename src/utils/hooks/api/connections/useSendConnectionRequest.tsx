import { useMutation, UseMutationResult } from "react-query";
import axiosInstance from "../axiosConfig";
import { IConnectionResponse, ISendConnectionRequest } from "./types";
import { AxiosError } from "axios";



async function createSendRequest(
    postRequest: ISendConnectionRequest
) {
    const response = await axiosInstance.post(
        `/api/connection-requests/send-connection-request`,
        postRequest
    );
    const data = await response.data;
    return data;
}

export function useSendConnectionRequest(): UseMutationResult<
    IConnectionResponse,
    AxiosError,
    ISendConnectionRequest
> {
    return useMutation(createSendRequest);
}
