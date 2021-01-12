import { UserInfoModel } from "../../domain/models/user-info";
import { Action } from "./action-interface";

// UserReducerAction event type definitions
export enum UserReducerActionType {
    GET_USER_LIST="GET_USER_LIST",
    FETCH_USER_LIST="FETCH_USER_LIST",
    SET_USER_LIST_FETCHED="SET_USER_LIST_FETCHED",
    SET_USER_LIST="SET_USER_LIST"
}

//Define UserReducer event generic type
export type UserReducerAction<PayloadType> = Action<UserReducerActionType, PayloadType>

//Definition of FetchUserList event payload
export interface FetchUserListPayloadType{
    page: number;
    gender?: "male" | "female" | undefined;
}

//Definition of SetUserListFetched event payload
export interface SetUserListFetchedActionPayloadType{
    userListFetched: boolean;
    page: number;
}

//Definition of SetUserList event payload
export interface SetUserListActionPayloadType{
    userList: Array<UserInfoModel>;
}


//Defintion of FetchUser event
export interface FetchUserListAction extends UserReducerAction<FetchUserListPayloadType>{
    type: UserReducerActionType.FETCH_USER_LIST;
    payload: FetchUserListPayloadType;
}


//Definition of SetUserListFetched event
export interface SetUserListFetchedAction extends UserReducerAction<SetUserListFetchedActionPayloadType>{
    type: UserReducerActionType.SET_USER_LIST_FETCHED;
    payload: SetUserListFetchedActionPayloadType
}

//Definition of SetUserList event
export interface SetUserListAction extends UserReducerAction<SetUserListActionPayloadType>{
    type: UserReducerActionType.SET_USER_LIST;
    payload: SetUserListActionPayloadType;
}


export const fetchUserInfoList = (params: FetchUserListPayloadType): FetchUserListAction =>{
    const {page=1, gender=null} = params;
    return <FetchUserListAction>{
        type:UserReducerActionType.FETCH_USER_LIST,
        payload:{
            page,
            gender: gender==null?undefined:gender
        }
    }
}

export const setUserInfoList = (userInfoList: UserInfoModel[]): SetUserListAction => {
    return <SetUserListAction>{
        type: UserReducerActionType.SET_USER_LIST,
        payload:{
            userList: userInfoList
        }
    }
}

export const setUserInfoListFetched = (page:number, fetched:boolean): SetUserListFetchedAction =>{
    return <SetUserListFetchedAction>{
        type: UserReducerActionType.SET_USER_LIST_FETCHED,
        payload:{
            page,
            userListFetched: fetched
        }
    }
}