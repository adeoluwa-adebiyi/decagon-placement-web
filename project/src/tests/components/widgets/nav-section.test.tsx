import { shallow } from "enzyme";
import { Provider } from "react-redux";
import GreetingPrompt from "../../../components/widgets/greeting-prompt";
import NavSection from "../../../components/widgets/nav-section";
import UserModeSelectBar from "../../../components/widgets/user-mode-selection-bar";
import UserSearchBar from "../../../components/widgets/user-searchbar";
import store from "../../../store/store";

describe("Tests NavSection component for functionality", ()=>{

    it("Should render appropriate NavSection widgets", ()=>{
        const wrapper = shallow(
            <NavSection selectedGender={undefined} setGender={(gender:string)=>{}}/>        
            );
        expect(wrapper.find(GreetingPrompt)).toHaveLength(1);
        expect(wrapper.find(UserSearchBar)).toHaveLength(1);
        expect(wrapper.find(UserModeSelectBar)).toHaveLength(1);
    })

});