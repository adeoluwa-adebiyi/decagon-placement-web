import { UserInfoModel } from "../../domain/models/user-info";
import { UserInfoRepo } from "../../domain/repos/user-info-repo";
import { UserInfoFetchApi, UserInfoFetchApiParams } from "../apis/user-info-api";
import HttpClient from "../../config/http-client";
import { UserInfo } from "../entities/user-info";
import { UserInfoDataTransformer } from "../transformers/user-info-data.transformer";


export class RemoteUserInfoRepo implements UserInfoRepo{

    constructor(
        private api?: UserInfoFetchApi,
    ){}

    static INSTANCE?: UserInfoRepo | null = null;

    static getInstance(): UserInfoRepo{
        if(this.INSTANCE == null){
            this.INSTANCE = new RemoteUserInfoRepo(new UserInfoFetchApi(HttpClient));
        }
        return this.INSTANCE;
    }

    async fetch(params: UserInfoFetchApiParams): Promise<UserInfoModel[]> {
        const transformer: UserInfoDataTransformer = new UserInfoDataTransformer();
        const response = await this.api!.execute(params);
        return response.results.map((info: UserInfo)=> transformer.transform(info));
    }

    getApi(): UserInfoFetchApi {
        return this.api!;
    }
}