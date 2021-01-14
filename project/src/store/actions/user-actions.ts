import { UserInfoModel } from "../../domain/models/user-info";
import { Action } from "./action-interface";

// UserReducerAction event type definitions

export enum UserReducerActionType {
    GET_USER_LIST = "GET_USER_LIST",
    FETCH_USER_LIST = "FETCH_USER_LIST",
    SET_USER_LIST_FETCHED = "SET_USER_LIST_FETCHED",
    SET_USER_LIST = "SET_USER_LIST",
    SET_COUNTRY_VISIBLE = "SET_COUNTRY_VISIBLE",
    SET_FILTER_TEXT = "SET_FILTER_TEXT",
    SET_COUNTRY_FILTER = "SET_COUNTRY_FILTER"
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
    gender: "male" | "female" | undefined;
}

export interface SetCountryVisiblePayloadType{
    countryVisible:boolean;
}

export interface SetFilterTextPayloadType{
    filterText: string;
}

export interface SetCountryFilterPayloadType{
    selectedCountry: string;
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

export interface SetCountryVisibleAction extends UserReducerAction<SetCountryVisiblePayloadType>{
    type: UserReducerActionType.SET_COUNTRY_VISIBLE;
    payload: SetCountryVisiblePayloadType;
}

export interface SetFilterTextAction extends UserReducerAction<SetFilterTextPayloadType>{
    type: UserReducerActionType.SET_FILTER_TEXT;
    payload: SetFilterTextPayloadType;
}

export interface SetCountryFilterAction extends UserReducerAction<SetCountryFilterPayloadType>{
    type: UserReducerActionType.SET_COUNTRY_FILTER;
    payload: SetCountryFilterPayloadType;
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

export const setUserInfoList = (userInfoList: UserInfoModel[],gender:"male"|"female"|undefined): SetUserListAction => {
    return <SetUserListAction>{
        type: UserReducerActionType.SET_USER_LIST,
        payload:{
            userList: userInfoList,
            gender
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


export const setFilterText = (text:string):SetFilterTextAction =>{
    return <SetFilterTextAction>{
        type: UserReducerActionType.SET_FILTER_TEXT,
        payload:{
            filterText: text
        }
    }
}


export const setCountryVisible = (visible: boolean): SetCountryVisibleAction =>{
    return <SetCountryVisibleAction>{
        type: UserReducerActionType.SET_COUNTRY_VISIBLE,
        payload:{
            countryVisible: visible
        }
    }
}

export const setCountryFilter = (selectedCountry:string): SetCountryFilterAction =>{
    return {
        type: UserReducerActionType.SET_COUNTRY_FILTER,
        payload:{
            selectedCountry
        }
    }
}