import { mount } from "enzyme";
import { Provider } from "react-redux";
import { ResultFilterBar } from "../../../components/widgets/result-fiterbar";
import RouteDisplaySection from "../../../components/widgets/route-display-section";
import { RouteTitleSection } from "../../../components/widgets/route-title-section";
import { RouterOutlet } from "../../../components/widgets/router-outlet";
import store from "../../../store/store";
import { BrowserRouter } from "react-router-dom";
import { FooterMenuSection } from "../../../components/widgets/footer-menu-section";

describe("Tests RouteDisplaySection component for functionality", ()=>{
    
    it("Should render appropriate RouteDisplaySection widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <RouteDisplaySection/>
                </BrowserRouter>
            </Provider>
            );
        expect(wrapper.find(RouteTitleSection)).toHaveLength(1);
        expect(wrapper.find(ResultFilterBar)).toHaveLength(1);
        expect(wrapper.find(RouterOutlet)).toHaveLength(1);
        expect(wrapper.find(FooterMenuSection)).toHaveLength(1);

    });

});