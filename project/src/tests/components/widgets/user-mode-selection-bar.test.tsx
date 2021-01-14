import { Text } from "@chakra-ui/react";
import { mount } from "enzyme";
import UserModeSelectBar from "../../../components/widgets/user-mode-selection-bar";
import { SHOW_USERS_LEAD_TEXT } from "../../../config/nav-section";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("Tests UserSearchBar component for functionality", ()=>{

    it("Should render appropriate UserModeSelection widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <UserModeSelectBar />
            </Provider>
            );
        // expect(wrapper.find(Text).at(0).text()).toEqual(SHOW_USERS_LEAD_TEXT);
        expect(wrapper.find("#nav-all-users-mode-btn").at(1)).toHaveLength(1);
        expect(wrapper.find("#nav-male-users-mode-btn").at(2)).toHaveLength(1);
        expect(wrapper.find("#nav-female-users-mode-btn").at(3)).toHaveLength(1);
    });

});