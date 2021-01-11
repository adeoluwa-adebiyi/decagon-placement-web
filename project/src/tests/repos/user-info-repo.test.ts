import { UserInfoFetchApi, UserInfoFetchApiParams } from "../../data/apis/user-info-api";
import { USER_INFO_FETCH_FIXTURE_DEFAULT, USER_INFO_FETCH_FIXTURE_FEMALE, USER_INFO_FETCH_FIXTURE_MALE } from "../../data/fixtures/user-info-fetch-fixture";
import { RemoteUserInfoRepo } from "../../data/repos/user-info-repo";
import { UserInfoRepo } from "../../domain/repos/user-info-repo";
import HttpClient from "../../config/http-client";
import MockAdapter from "axios-mock-adapter";
import { BASE_URL } from "../../config/config";
import { UserInfoDataTransformer } from "../../data/transformers/user-info-data.transformer";
import { UserInfo } from "../../data/entities/user-info";

let userInfoRepo: UserInfoRepo;

describe("Tests UserInfoRepo for functionality", ()=>{

    beforeAll(()=>{
        const mock: MockAdapter = new MockAdapter(HttpClient);
        const fetchDefaultUrl = `${BASE_URL}?page=1&results=10`;
        const fetchMaleUrl = `${BASE_URL}?page=1&gender=male&results=10`;
        const fetchFemaleUrl = `${BASE_URL}?page=1&gender=female&results=10`;
        mock.onGet(fetchDefaultUrl).reply(200, USER_INFO_FETCH_FIXTURE_DEFAULT);
        mock.onGet(fetchMaleUrl).reply(200,USER_INFO_FETCH_FIXTURE_MALE);
        mock.onGet(fetchFemaleUrl).reply(200, USER_INFO_FETCH_FIXTURE_FEMALE);
        userInfoRepo = RemoteUserInfoRepo.getInstance();
    });

    it("Should have a UserFetchApi configured", ()=>{
        expect(userInfoRepo.getApi()).toBeInstanceOf(UserInfoFetchApi);
    });

    it("Should fetch correct list of UserInfoModels", async()=>{
        const transformer: UserInfoDataTransformer = new UserInfoDataTransformer();
        expect(await userInfoRepo.fetch(<UserInfoFetchApiParams>{
            page:1,
            gender:undefined
        })).toEqual(USER_INFO_FETCH_FIXTURE_DEFAULT.results.map((info)=>transformer.transform(<UserInfo>info)));
    });

    it("Should fetch correct list of male UserInfoModels", async()=>{
        const transformer: UserInfoDataTransformer = new UserInfoDataTransformer();
        expect(await userInfoRepo.fetch(<UserInfoFetchApiParams>{
            page:1,
            gender:"male"
        })).toEqual(USER_INFO_FETCH_FIXTURE_MALE.results.map((info)=>transformer.transform(<UserInfo>info)));
    });

    it("Should fetch correct list of female UserInfoModels", async()=>{
        const transformer: UserInfoDataTransformer = new UserInfoDataTransformer();
        expect(await userInfoRepo.fetch(<UserInfoFetchApiParams>{
            page:1,
            gender:"female"
        })).toEqual(USER_INFO_FETCH_FIXTURE_FEMALE.results.map((info)=>transformer.transform(<UserInfo>info)));
    });
});