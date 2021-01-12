import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import DashboardScreen from "../../components/pages/dashboard-screen";
import {SetUserListFetchedAction, UserReducerActionType} from "../../store/actions/user-actions";
import SplashScreen from "../../components/pages/splash-screen";
import store from "../../store/store"
import Loader from "../../components/widgets/loader";

describe("Test functionality of SplashScreen component", ()=>{


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