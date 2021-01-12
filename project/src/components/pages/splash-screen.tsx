import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreState } from "../../store/store";
import { fetchUserInfoList } from "../../store/actions/user-actions";
import { withRouter} from "react-router-dom";
import DashboardScreen from "./dashboard-screen";
import Loader from "../widgets/loader";

const SplashScreen = ():JSX.Element=>{

    const users = useSelector((state:AppStoreState) => state.users);

    const dispatch = useDispatch();

    const [dashboardVisible, setDashboardVisible] = useState(false);

    useEffect(()=>{
        dispatch(fetchUserInfoList({page:1}));
    },[])

    useEffect(()=>{
        if(users.userListFetched){
           setDashboardVisible(true);
        }
    },[users]);

    return (
        <React.Fragment>
            {!dashboardVisible && <Loader/>}
            {dashboardVisible && <DashboardScreen/>}
        </React.Fragment>

    )
}

export default withRouter(SplashScreen);