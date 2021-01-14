import { Switch } from "@chakra-ui/react";
import { shallow } from "enzyme";
import { CountryVisibleSwitch } from "../../../components/widgets/country-visible-switch";
import store from "../../../store/store";

describe("Tests CountryVisibleSwitch widget for functionality", ()=>{
    
    it("Should render Switch widget", ()=>{
        const wrapper = shallow(
            <CountryVisibleSwitch countryVisible={true} setCountryVisible={()=>{console.log("Hello")}} />
        );
        expect(wrapper.find(Switch)).toHaveLength(1);
    });

});