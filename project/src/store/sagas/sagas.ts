import { takeLatest, call, put, select } from "@redux-saga/core/effects";
import { FetchUserListAction, UserReducerActionType, setUserInfoList, setUserInfoListFetched } from "../actions/user-actions";
import { RemoteUserInfoRepo } from "../../data/repos/user-info-repo";
import { UserInfoModel } from "../../domain/models/user-info";
import { AppStoreState } from "../store";
import { UserInfoFetchApiParams } from "../../data/apis/user-info-api";


// Interceptor to handle FETCH_USER_LIST EVENT
function* fetchUserList(action: FetchUserListAction){
    try{
    const {page, gender} = action.payload;
    const fetchInfo = (data:UserInfoFetchApiParams) => RemoteUserInfoRepo.getInstance().fetch(data);
    const response: UserInfoModel[] = yield call(fetchInfo,{page, gender});
    yield put(setUserInfoList(response, gender));
    yield put(setUserInfoListFetched(page,true));
    }catch(e){
        const prevPage = yield select((state:AppStoreState)=>state.users.page);
        yield put(setUserInfoListFetched(prevPage,true));
    }
}


// Bundle middleware functions to intercept redux events
export default function* allSagas(): Generator{
    yield takeLatest(UserReducerActionType.FETCH_USER_LIST, fetchUserList);
}