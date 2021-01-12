import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { USER_SEARCH_PLACEHOLDER } from "../../config/nav-section";
import { SearchIcon } from "./search-icon";

export interface UserSearchNarProps {
    placeholder: string;
}

const UserSearchBar = (props: UserSearchNarProps) => {
    const { placeholder } = props;
    return (<Box flexDirection="row" alignSelf="stretch">
            <InputGroup padding={2} backgroundColor="rgba(255,255,255,0.1)" size="lg" alignSelf="stretch" borderRadius="xl" border="1px solid transparent">
                <InputLeftAddon bg="transparent" border="none">
                    <SearchIcon/>
                </InputLeftAddon>
                <Input color="white" bg="transparent" border="none" borderLeft="none" type="text" placeholder={placeholder} alignSelf="stretch"/>
            </InputGroup>
        </Box>);
}


export default UserSearchBar;