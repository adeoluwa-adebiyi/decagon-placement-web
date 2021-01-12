import { UserInfoModel } from "../../domain/models/user-info";
import { 
    UserReducerAction, 
    UserReducerActionType, 
    SetUserListFetchedAction, 
    SetUserListAction} 
from "../actions/user-actions";


export interface UserReducerProps{
    userList: UserInfoModel[];
    userListFetched: boolean;
    page: number;
}


// Reducer to store userinfo list and data fetched status
export const usersReducer = (state = { userList: [], userListFetched: false, page: 1 }, action: UserReducerAction<unknown>): UserReducerProps => {

    // Contexts are localised to enable

    switch (action.type) {

        // Handle User list fetched event
        case UserReducerActionType.SET_USER_LIST_FETCHED: {
            const { userListFetched, page } = (action as SetUserListFetchedAction).payload;
            return {...state, userListFetched, page};
        }


        // Handle set userlist event
        case UserReducerActionType.SET_USER_LIST:{
            const { userList } = (action as SetUserListAction).payload;
            return { ...state, userList };
        }

        // Obtain all data from store --- default action to read data store
        default:
            return state;
    }
} 