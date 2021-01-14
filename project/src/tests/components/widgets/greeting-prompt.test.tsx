import { Heading, Text } from "@chakra-ui/react";
import { shallow } from "enzyme";
import GreetingPrompt from "../../../components/widgets/greeting-prompt";

describe("Tests GreetingPrompt component for functionality", ()=>{

    it("Should render appropriate user Greeting message", ()=>{
        const expectedGreetingHeader = "Hello, Emerald";
        const expectedPromptMsg = "Welcome to your dashbaord, kindly sort through the user base"
        const wrapper = shallow(
            <GreetingPrompt username="Emerald"/>        
            );
        expect(wrapper.find(Heading).map((h)=>h.text().trim())).toEqual(expectedGreetingHeader.split(" "));
        expect(wrapper.find(Text).text()).toEqual(expectedPromptMsg);
    })

});