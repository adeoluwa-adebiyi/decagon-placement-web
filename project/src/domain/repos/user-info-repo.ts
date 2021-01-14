import { Api } from "../../data/apis/contracts/api-interface";
import { UserInfoFetchApi, UserInfoFetchApiParams } from "../../data/apis/user-info-api";
import { UserInfoModel } from "../models/user-info";
import { FetchAbleRepo } from "./contracts/repo-interface";

export type UserInfoRepo = FetchAbleRepo<UserInfoFetchApi, UserInfoFetchApiParams,UserInfoModel>