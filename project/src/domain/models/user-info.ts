import { Location } from "../../data/entities/location";

export interface UserInfoModel{
    title: string;
    firstname: string;
    lastname: string;
    age: number;
    address: Location;
    email:string;
    joined_date: string;
    phone: string;
    mobile: string;
    pictureURL: string;
    nat: string;
}