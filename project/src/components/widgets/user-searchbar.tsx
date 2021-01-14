import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterText } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";
import { SearchIcon } from "./search-icon";

export interface UserSearchNarProps {
    placeholder: string;
}

const UserSearchBar = (props: UserSearchNarProps):JSX.Element => {
    const { placeholder } = props;
    const filterTextValue = useSelector((state:AppStoreState)=>state.users.filterText);
    const dispatch = useDispatch();
    return (<Box flexDirection="row" alignSelf="stretch">
            <InputGroup padding={2} backgroundColor="rgba(255,255,255,0.1)" size="lg" alignSelf="stretch" borderRadius="xl" border="1px solid transparent">
                <InputLeftAddon bg="transparent" border="none">
                    <SearchIcon/>
                </InputLeftAddon>
                <Input value={filterTextValue} onChange={(e)=>dispatch(setFilterText(e.target.value))} _focus={{border:"none"}} color="white" bg="transparent" border="none" borderLeft="none" type="text" placeholder={placeholder} alignSelf="stretch"/>
            </InputGroup>
        </Box>);
}


export default UserSearchBar;