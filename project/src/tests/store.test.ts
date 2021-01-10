import { SetUserListAction, SetUserListFetchedAction, UserReducerActionType } from "../store/actions/user-actions";
import { UserReducerProps } from "../store/reducers/user-reducer";
import store from "../store/store";

describe("Tests Redux store functionality", ()=>{

    it("Should correctly set userList values",()=>{
        store.dispatch(
            <SetUserListAction>{
                type: UserReducerActionType.SET_USER_LIST,
                payload:{
                    userList:[{name:"Thompson"}]
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userList).toEqual([{name:"Thompson"}]);
    });

    it("Should correctly set userListFetched value",()=>{
        store.dispatch(
            <SetUserListFetchedAction>{
                type: UserReducerActionType.SET_USER_LIST_FETCHED,
                payload:{
                    userListFetched:true,
                    page: 67
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userListFetched).toEqual(true);
        expect((store.getState().users as UserReducerProps ).page).toEqual(67);


        store.dispatch(
            <SetUserListFetchedAction>{
                type: UserReducerActionType.SET_USER_LIST_FETCHED,
                payload:{
                    userListFetched:false,
                    page: 67
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userListFetched).toEqual(false);
        expect((store.getState().users as UserReducerProps ).page).toEqual(67);
    });

});

export {};