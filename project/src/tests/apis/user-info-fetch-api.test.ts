import axios from "axios";
import { BASE_URL } from "../../config/config";
import { USER_INFO_FETCH_FIXTURE_DEFAULT, USER_INFO_FETCH_FIXTURE_FEMALE, USER_INFO_FETCH_FIXTURE_MALE } from "../../data/fixtures/user-info-fetch-fixture";
import { UserInfoFetchApi } from "../../data/apis/user-info-api";
import MockAdapter from "axios-mock-adapter";

let mock: MockAdapter;

describe("Tests functionality of UserInfoFetchApi", ()=>{

    beforeAll(()=>{
        mock = new MockAdapter(axios);
        const fetchDefaultUrl = `${BASE_URL}?page=1&results=10`;
        const fetchMaleUrl = `${BASE_URL}?page=1&gender=male&results=10`;
        const fetchFemaleUrl = `${BASE_URL}?page=1&gender=female&results=10`;
        mock.onGet(fetchDefaultUrl).reply(200, USER_INFO_FETCH_FIXTURE_DEFAULT);
        mock.onGet(fetchMaleUrl).reply(200,USER_INFO_FETCH_FIXTURE_MALE);
        mock.onGet(fetchFemaleUrl).reply(200, USER_INFO_FETCH_FIXTURE_FEMALE)
    });

    it("Should return correct data on default request", async()=>{
        expect(await (new UserInfoFetchApi(axios)).execute({page:1,gender:undefined})).toEqual(USER_INFO_FETCH_FIXTURE_DEFAULT);
    });

    it("Should return correct data on gender male request", async()=>{
        expect(await (new UserInfoFetchApi(axios)).execute({page:1,gender:"male"})).toEqual(USER_INFO_FETCH_FIXTURE_MALE);
    });

    it("Should return correct data on gender female request", async()=>{
        expect(await (new UserInfoFetchApi(axios)).execute({page:1,gender:"female"})).toEqual(USER_INFO_FETCH_FIXTURE_FEMALE);
    });

});