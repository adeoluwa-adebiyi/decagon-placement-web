import { takeLatest, call, put, select } from "@redux-saga/core/effects";
import { FetchUserListAction, UserReducerActionType, setUserInfoList, setUserInfoListFetched } from "../actions/user-actions";
import { RemoteUserInfoRepo } from "../../data/repos/user-info-repo";
import { UserInfoFetchApiResponse } from "../../data/apis/user-info-api";
import { UserInfoModel } from "../../domain/models/user-info";
import { AppStoreState } from "../store";


// Interceptor to handle FETCH_USER_LIST EVENT
function* fetchUserList(action: FetchUserListAction){
    try{
    const {page} = action.payload;
    const fetchInfo = (data:any) => RemoteUserInfoRepo.getInstance().fetch(data);
    const response: UserInfoModel[] = yield call(fetchInfo,{page});
    yield put(setUserInfoList(response));
    yield put(setUserInfoListFetched(page,true));
    }catch(e){
        const prevPage = yield select((state:AppStoreState)=>state.users.page);
        yield put(setUserInfoListFetched(prevPage,true));
    }
}


// Bundle middleware functions to intercept redux events
export default function* allSagas(){
    yield takeLatest(UserReducerActionType.FETCH_USER_LIST, fetchUserList);
}