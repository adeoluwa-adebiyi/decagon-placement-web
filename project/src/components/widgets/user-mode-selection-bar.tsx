import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { SHOW_USERS_LEAD_TEXT } from "../../config/nav-section";
import UserModeSelectButton from "./user-model-select-button";
import {FaMale, FaFemale, FaUsers} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoList } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";


const UserModeSelectBar = ():JSX.Element => {

    const dispatch = useDispatch();

    const selectedGender = useSelector((state:AppStoreState)=>state.users.gender);

    const setGender = (gender:"male"|"female"|undefined) =>{
        if(gender !== selectedGender){
            dispatch(fetchUserInfoList({page:1, gender}));
        }
    }

    return (<Box height="40%">
            <VStack alignItems="start" spacing={10}>
                <Text color="white">{SHOW_USERS_LEAD_TEXT}</Text>
                <HStack spacing={10}>
                    <UserModeSelectButton id="nav-all-users-mode-btn" selected={selectedGender==null} onClick={()=>setGender(undefined)}  icon={FaUsers} buttonTitle="All Users" backgroundColor="#f935a9" />
                    <UserModeSelectButton id="nav-male-users-mode-btn" selected={selectedGender==="male"} onClick={()=>setGender("male")}  icon={FaMale} buttonTitle="Male Users" backgroundColor="#30bbb5" />
                    <UserModeSelectButton id="nav-female-users-mode-btn" selected={selectedGender==="female"} onClick={()=>setGender("female")} icon={FaFemale} buttonTitle="Female Users" backgroundColor="#7946c1" />
                </HStack>
            </VStack>
        </Box>);
}


export default UserModeSelectBar;