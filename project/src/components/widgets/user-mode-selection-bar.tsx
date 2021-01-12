import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { SHOW_USERS_LEAD_TEXT } from "../../config/nav-section";
import UserModeSelectButton from "./user-model-select-button";
import {FaMale, FaFemale, FaUsers} from "react-icons/fa"


const UserModeSelectBar = () => {
    return (<Box height="40%">
            <VStack alignItems="start" spacing={10}>
                <Text color="white">{SHOW_USERS_LEAD_TEXT}</Text>
                <HStack spacing={10}>
                    <UserModeSelectButton icon={FaUsers} buttonTitle="All Users" backgroundColor="#f935a9" />
                    <UserModeSelectButton icon={FaMale} buttonTitle="Male Users" backgroundColor="#30bbb5" />
                    <UserModeSelectButton icon={FaFemale} buttonTitle="Female Users" backgroundColor="#7946c1" />
                </HStack>
            </VStack>
        </Box>);
}


export default UserModeSelectBar;