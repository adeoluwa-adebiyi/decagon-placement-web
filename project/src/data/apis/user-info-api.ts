import { AxiosInstance } from "axios";
import { UserInfosResult } from "../entities/user-infos-result";
import { Api } from "./contracts/api-interface";

export interface UserInfoFetchApiParams{
    page: number;
    gender: string;
}

export interface UserInfoFetchApiResponse extends UserInfosResult{}

export class UserInfoFetchApi implements Api<UserInfoFetchApiParams, UserInfoFetchApiResponse>{

    constructor(private httpClient: AxiosInstance){}

    execute(params: UserInfoFetchApiParams): UserInfoFetchApiResponse {
        const {} = params;
        throw new Error("Method not implemented.");
    }

}