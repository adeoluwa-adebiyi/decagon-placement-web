import { Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterUsersByText } from "../../domain/filters/user-info-filter";
import { CountryKeyEntry } from "../../domain/models/country-key-entry";
import { UserInfoModel } from "../../domain/models/user-info";
import { fetchUserInfoList } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";
import { UserInfoCard } from "../widgets/user-info-card";

export const UserListScreen = (): JSX.Element=>{

    const userInfos = useSelector((state:AppStoreState)=>state.users.userList);

    const filterText = useSelector((state: AppStoreState)=>state.users.filterText);

    const countryVisible = useSelector((state: AppStoreState)=>state.users.countryVisible);

    const selected = useSelector((state:AppStoreState)=>state.users.selectedCountry);

    const filterCountry = (userInfo: UserInfoModel)=>{
        if(selected==="" || !selected){
            return userInfo;
        }
        return userInfo.nat===selected?userInfo:null;
    }

    const users = useSelector((state:AppStoreState) => state.users);

    const dispatch = useDispatch();

    const [dashboardVisible, setDashboardVisible] = useState(false);


    useEffect(()=>{
        if(!users.userListFetched)
            dispatch(fetchUserInfoList({page:1}));
    },[])

    return (
        <Box padding={4} height="100%">
            <VStack spacing={10}>
                {filterUsersByText(userInfos, filterText).filter(filterCountry).map((data, index)=><UserInfoCard key={index} info={data} index={index} countryVisible={countryVisible}/>)}
            </VStack>
        </Box>

    );
}