import { Info } from "./info";
import { UserInfo } from "./user-info";

export interface UserInfosResult {
    results: UserInfo[];
    info:    Info;
}