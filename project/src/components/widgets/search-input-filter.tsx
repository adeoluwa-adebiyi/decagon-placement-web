import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterText } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";
import { SearchIcon } from "./search-icon";


export interface SearchInputFilterProps{
    placeholder:string;
}

export const SearchInputFilter = (props: SearchInputFilterProps): JSX.Element=>{

    const filterTextValue = useSelector((state:AppStoreState)=>state.users.filterText);
    const dispatch = useDispatch();
    

    const { placeholder } = props;
    return(
    <Box display="flex" flexDirection="row" flex={3}>
        <InputGroup padding={2} backgroundColor="#e2e3ec" size="sm" alignSelf="stretch" borderRadius="25px" border="1px solid transparent" width="100%">
            <InputLeftAddon bg="transparent" border="none">
                <SearchIcon/>
            </InputLeftAddon>
            <Input _focus={{border:"none"}} value={filterTextValue} onChange={(e)=>dispatch(setFilterText(e.target.value))} color="black" bg="transparent" border="none" borderLeft="none" type="text" placeholder={placeholder} alignSelf="stretch"/>
        </InputGroup>
    </Box>
    );
}