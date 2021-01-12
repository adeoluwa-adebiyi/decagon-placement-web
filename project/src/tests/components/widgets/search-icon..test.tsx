import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { shallow } from "enzyme";
import { SearchIcon } from "../../../components/widgets/search-icon";
import { Search2Icon } from "@chakra-ui/icons";
import { USER_SEARCH_PLACEHOLDER } from "../../../config/nav-section";

describe("Tests UserSearchBar component for functionality", ()=>{

    it("Should render appropriate Search icon", ()=>{
        const wrapper = shallow(
            <SearchIcon/>        
            );
        expect(wrapper.find(Search2Icon)).toHaveLength(1);
    })

});