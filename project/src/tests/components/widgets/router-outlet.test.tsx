import { Switch } from "react-router-dom";
import { shallow } from "enzyme";
import { RouterOutlet } from "../../../components/widgets/router-outlet";

describe("Tests RouterOutlet widget for functionality", ()=>{
    
    it("Should render ROuter Switch", ()=>{
        const wrapper = shallow(
            <RouterOutlet/>        
        );
        expect(wrapper.find(Switch)).toHaveLength(1);
    });

});