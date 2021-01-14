import { transformParser } from "@chakra-ui/react";
import { USER_INFO_FETCH_FIXTURE_DEFAULT } from "../../data/fixtures/user-info-fetch-fixture";
import { UserInfoDataTransformer } from "../../data/transformers/user-info-data.transformer";
import { fetchUserInfoList, FetchUserListAction, setUserInfoList, setUserInfoListFetched, SetUserListAction, SetUserListFetchedAction, UserReducerActionType } from "../../store/actions/user-actions"

describe("Tests UserAction creators for functionality", () => {
    it("FetchUserInfoListAction creator should create valid actions ", () => {
        expect(fetchUserInfoList({ page: 1 })).toEqual(<FetchUserListAction>{
            type: UserReducerActionType.FETCH_USER_LIST,
            payload: {
                page: 1,
                gender: undefined
            }
        })

        expect(fetchUserInfoList({ page: 400, gender: "male" })).toEqual(<FetchUserListAction>{
            type: UserReducerActionType.FETCH_USER_LIST,
            payload: {
                page: 400,
                gender: "male"
            }
        })
    });

    it("SetUserListAction creator should create valid actions ", () => {
        const transformer: UserInfoDataTransformer = new UserInfoDataTransformer();
        expect(setUserInfoList(USER_INFO_FETCH_FIXTURE_DEFAULT.results.map((info)=> transformer.transform(info)))).toEqual(<SetUserListAction>{
            type: UserReducerActionType.SET_USER_LIST,
            payload: {
                userList: USER_INFO_FETCH_FIXTURE_DEFAULT.results.map((info)=> transformer.transform(info))
            }
        });
    });

    it("SetUserListFetchedAction creator should create valid actions ", () => {
        expect(setUserInfoListFetched(1,true)).toEqual(<SetUserListFetchedAction>{
            type: UserReducerActionType.SET_USER_LIST_FETCHED,
            payload: {
                userListFetched: true,
                page:1
            }
        });
    });
})