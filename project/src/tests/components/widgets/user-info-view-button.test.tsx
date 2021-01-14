import { Button, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { mount, shallow } from "enzyme";
import { UserInfoViewButton } from "../../../components/widgets/user-info-view-button";

describe("Tests UserInfoViewButton widget for functionality", ()=>{
    
    it("Should render appropriate button and direction icon", ()=>{
        const wrapper = mount(
            <UserInfoViewButton/>        
        );
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Icon)).toHaveLength(1);
        expect(wrapper.find(FaArrowRight)).toHaveLength(1);
    });

});