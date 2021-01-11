import { takeLatest } from "@redux-saga/core/effects";
import { FetchUserListAction, UserReducerActionType } from "../actions/user-actions";


// Interceptor to handle FETCH_USER_LIST EVENT
function* fetchUserList(action: FetchUserListAction){
    const {page} = action.payload;
    yield "testData";
    // const response = yield UserInfoRepo.getInstance().fetchUserInfoList({page});
}



// Bundle middleware functions to intercept redux events
export default function* allSagas(){
    yield takeLatest(UserReducerActionType.FETCH_USER_LIST, fetchUserList);
}