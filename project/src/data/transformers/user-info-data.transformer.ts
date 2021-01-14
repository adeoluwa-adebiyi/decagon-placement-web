import { UserInfoModel } from "../../domain/models/user-info";
import { UserInfo } from "../entities/user-info";
import { Transformer } from "./contracts/transformer-interface";


export class UserInfoDataTransformer implements Transformer<UserInfo, UserInfoModel>{

    transform(data: UserInfo): UserInfoModel {
        return <UserInfoModel>{
            title: data.name.title,
            firstname: data.name.first,
            lastname: data.name.last,
            address: data.location,
            email: data.email,
            joined_date: data.registered.date,
            phone: data.phone,
            pictureURL: data.picture.medium,
            nat: data.nat
        }
    }

}