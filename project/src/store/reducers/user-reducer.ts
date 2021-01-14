import { UserInfoModel } from "../../domain/models/user-info";
import { 
    UserReducerAction, 
    UserReducerActionType, 
    SetUserListFetchedAction, 
    SetUserListAction,
    SetFilterTextAction,
    SetCountryVisibleAction,
    SetCountryFilterAction} 
from "../actions/user-actions";


export interface UserReducerProps{
    userList: UserInfoModel[];
    userListFetched: boolean;
    page: number;
    gender?: undefined | "male" | "female";
    countryVisible: boolean;
    filterText: string;
    selectedCountry:string;
}


// Reducer to store userinfo list and data fetched status
export const usersReducer = (state = { userList: [], userListFetched: false, page: 1, countryVisible:false, filterText:"", selectedCountry:"" }, action: UserReducerAction<unknown>): UserReducerProps => {

    // Contexts are localised to enable

    switch (action.type) {

        // Handle User list fetched event
        case UserReducerActionType.SET_USER_LIST_FETCHED: {
            const { userListFetched, page } = (action as SetUserListFetchedAction).payload;
            return {...state, userListFetched, page};
        }


        // Handle set userlist event
        case UserReducerActionType.SET_USER_LIST:{
            const { userList, gender } = (action as SetUserListAction).payload;
            return { ...state, userList, gender };
        }

        case UserReducerActionType.SET_COUNTRY_VISIBLE:{
            const { countryVisible } = (action as SetCountryVisibleAction).payload;
            return {...state, countryVisible};
        }

        case UserReducerActionType.SET_FILTER_TEXT:{
            const {filterText} = (action as SetFilterTextAction).payload;
            return {...state, filterText};
        }

        case UserReducerActionType.SET_COUNTRY_FILTER:{
            const {selectedCountry} = (action as SetCountryFilterAction).payload;
            return {...state, selectedCountry};
        }

        // Obtain all data from store --- default action to read data store
        default:
            return state;
    }
} 