import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import DashboardScreen from "../../../components/pages/dashboard-screen";
import {SetUserListFetchedAction, UserReducerActionType} from "../../../store/actions/user-actions";
import SplashScreen from "../../../components/pages/splash-screen";
import store from "../../../store/store"
import Loader from "../../../components/widgets/loader";
import MockAdapter from "axios-mock-adapter";
import { BASE_URL } from "../../../config/config";
import HttpClient from "../../../config/http-client";
import { USER_INFO_FETCH_FIXTURE_DEFAULT, USER_INFO_FETCH_FIXTURE_MALE, USER_INFO_FETCH_FIXTURE_FEMALE } from "../../../data/fixtures/user-info-fetch-fixture";

describe("Test functionality of SplashScreen component", ()=>{

    beforeAll(()=>{
        const mock: MockAdapter = new MockAdapter(HttpClient);
        const fetchDefaultUrl = `${BASE_URL}?page=1&results=10`;
        const fetchMaleUrl = `${BASE_URL}?page=1&gender=male&results=10`;
        const fetchFemaleUrl = `${BASE_URL}?page=1&gender=female&results=10`;
        mock.onGet(fetchDefaultUrl).reply(200, USER_INFO_FETCH_FIXTURE_DEFAULT);
        mock.onGet(fetchMaleUrl).reply(200,USER_INFO_FETCH_FIXTURE_MALE);
        mock.onGet(fetchFemaleUrl).reply(200, USER_INFO_FETCH_FIXTURE_FEMALE);
    });


    it("Should render Loader on init", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <SplashScreen/>
                </BrowserRouter>
            </Provider>
        )
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(wrapper.find(DashboardScreen)).toHaveLength(0);
    });


    it("Should render Dashboard on UserInfoList fetched", ()=>{
        store.dispatch({
            type: UserReducerActionType.SET_USER_LIST_FETCHED,
            payload:{
                userListFetched: true
            }
        })
        const wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <SplashScreen/>
                </BrowserRouter>
            </Provider>
        )
        expect(wrapper.find(Loader)).toHaveLength(0);
        expect(wrapper.find(DashboardScreen)).toHaveLength(1);
    });

})