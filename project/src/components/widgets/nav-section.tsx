import { VStack } from "@chakra-ui/react";
import { USER_SEARCH_PLACEHOLDER } from "../../config/nav-section";
import GreetingPrompt from "../widgets/greeting-prompt";
import UserModeSelectBar from "./user-mode-selection-bar";
import UserSearchBar from "./user-searchbar";


const NavSection = (): JSX.Element =>{
    return (
        <VStack alignItems="start" spacing={10}>
            <GreetingPrompt username="Emerald"/>
            <UserSearchBar placeholder={USER_SEARCH_PLACEHOLDER}/>
            <UserModeSelectBar/>
        </VStack>
    );
}

export default NavSection;