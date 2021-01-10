import { shallow } from "enzyme";
import App from "../App";
import SplashScreen from "../components/splash-screen";

describe("Tests App for functionality", ()=>{
    it("Should render SplashScreen", ()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.find(SplashScreen)).toHaveLength(1);
    });
})