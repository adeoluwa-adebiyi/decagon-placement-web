import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { mount } from "enzyme";
import { SearchIcon } from "../../../components/widgets/search-icon";
import UserSearchBar from "../../../components/widgets/user-searchbar";
import { USER_SEARCH_PLACEHOLDER } from "../../../config/nav-section";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("Tests UserSearchBar component for functionality", ()=>{

    it("Should render appropriate UserSearchBar widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <UserSearchBar placeholder={USER_SEARCH_PLACEHOLDER}/>        
            </Provider>
            );
        expect(wrapper.find(InputGroup)).toHaveLength(1);
        expect(wrapper.find(InputLeftAddon)).toHaveLength(1);
        expect(wrapper.find(SearchIcon)).toHaveLength(1);
        expect(wrapper.find(Input).getElement().props.placeholder).toEqual(USER_SEARCH_PLACEHOLDER);
    })

});