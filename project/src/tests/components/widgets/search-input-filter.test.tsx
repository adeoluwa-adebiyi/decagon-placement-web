import { Input, InputGroup, Switch } from "@chakra-ui/react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { SearchIcon } from "../../../components/widgets/search-icon";
import { SearchInputFilter } from "../../../components/widgets/search-input-filter";
import store from "../../../store/store";

describe("Tests SearchInputFilter widget for functionality", ()=>{
    
    it("Should render SearchInputFilter widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <SearchInputFilter placeholder="Find in list"/>
            </Provider>
        );
        expect(wrapper.find(InputGroup)).toHaveLength(1);
        expect(wrapper.find(Input)).toHaveLength(1);
        expect(wrapper.find(SearchIcon)).toHaveLength(1);
    });

});