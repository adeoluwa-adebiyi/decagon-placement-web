import { AxiosInstance } from "axios";
import { BASE_URL } from "../../config/config";
import { UserInfosResult } from "../entities/user-infos-result";
import { Api } from "./contracts/api-interface";

export interface UserInfoFetchApiParams{
    page: number;
    gender?: "male" | "female" | undefined;
}

export type UserInfoFetchApiResponse = UserInfosResult

export class UserInfoFetchApi implements Api<UserInfoFetchApiParams, Promise<UserInfoFetchApiResponse>>{

    constructor(private httpClient: AxiosInstance){}

    async execute(params: UserInfoFetchApiParams): Promise<UserInfoFetchApiResponse> {
        try{
            const { page, gender} = params;
            const results = 10;
            const URL = `${BASE_URL}${ `?page=${page}`+ `${gender==null?"":`&gender=${gender}`}` + `&results=${results}` }`;
            const response = await this.httpClient.get(URL);
            return response.data;
        }catch(e){
            throw Error("User information fetch failed");
        }
    }

}