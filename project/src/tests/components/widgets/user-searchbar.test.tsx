import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { shallow } from "enzyme";
import { SearchIcon } from "../../../components/widgets/search-icon";
import UserSearchBar from "../../../components/widgets/user-searchbar";
import { USER_SEARCH_PLACEHOLDER } from "../../../config/nav-section";

describe("Tests UserSearchBar component for functionality", ()=>{

    it("Should render appropriate UserSearchBar widgets", ()=>{
        const wrapper = shallow(
            <UserSearchBar placeholder={USER_SEARCH_PLACEHOLDER}/>        
            );
        expect(wrapper.find(InputGroup)).toHaveLength(1);
        expect(wrapper.find(InputLeftAddon)).toHaveLength(1);
        expect(wrapper.find(SearchIcon)).toHaveLength(1);
        expect(wrapper.find(Input).getElement().props.placeholder).toEqual(USER_SEARCH_PLACEHOLDER);
    })

});