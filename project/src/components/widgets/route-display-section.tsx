import { Box, Spacer, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CountryKeyEntry } from "../../domain/models/country-key-entry";
import { UserInfoModel } from "../../domain/models/user-info";
import { setCountryFilter } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";
import { FooterMenuSection } from "./footer-menu-section";
import { ResultFilterBar } from "./result-fiterbar";
import { RouteTitleSection } from "./route-title-section";
import { RouterOutlet } from "./router-outlet";


const RouteDisplaySection = (): JSX.Element => {

    const dispatch = useDispatch();
    const setCountry = (country:string)=>{
        dispatch(setCountryFilter(country));
    }
    const currentCountry:string = useSelector((state:AppStoreState)=>state.users.selectedCountry);
    const userInfoList: UserInfoModel[] = useSelector((state:AppStoreState)=>state.users.userList);
    const countryKeyList: CountryKeyEntry[] = [{key:"", name:"Filter by Country"},...userInfoList.map((userInfo)=>{
        return {
            name: userInfo.nat,
            key: userInfo.nat
        }
    })];

    return (
        <Box display="flex" flexDirection="column" borderRadius="xl" maxHeight="100vh" boxSizing="border-box">
            <VStack padding={10} borderRadius="xl" bg="#f7f7ff" flex={1} alignItems="start" justifyContent="start" minHeight="100vh" maxHeight="inherit">
                <VStack flex={1}>
                    <RouteTitleSection />
                </VStack>
                <VStack flex={1} width="100%">
                    <ResultFilterBar countryKeyList={countryKeyList}
                        currentCountry={currentCountry} setCountryFilter={setCountry}
                        countryVisible={true} setCountryVisible={() => { console.log("Hello") }} />
                </VStack>
                <VStack flex={10} maxHeight="70vh" overflowY="scroll">
                    <RouterOutlet />
                </VStack>
                <VStack flex={1} width="100%">
                    <Spacer />
                    <FooterMenuSection />
                </VStack>
            </VStack>
        </Box>
    );
}

export default RouteDisplaySection;