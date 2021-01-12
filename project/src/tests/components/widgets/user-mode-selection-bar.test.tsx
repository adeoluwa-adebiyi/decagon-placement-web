import { Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { shallow } from "enzyme";
import { SearchIcon } from "../../../components/widgets/search-icon";
import UserModeSelectBar from "../../../components/widgets/user-mode-selection-bar";
import UserSearchBar from "../../../components/widgets/user-searchbar";
import { SHOW_USERS_LEAD_TEXT, USER_SEARCH_PLACEHOLDER } from "../../../config/nav-section";

describe("Tests UserSearchBar component for functionality", ()=>{

    it("Should render appropriate UserModeSelection widgets", ()=>{
        const wrapper = shallow(
            <UserModeSelectBar />        
            );
        expect(wrapper.find(Text).text()).toEqual(SHOW_USERS_LEAD_TEXT);
    });

});