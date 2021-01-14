import { mount } from "enzyme";
import { Pagination } from "../../../components/widgets/pagination";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Tests Pagination widget for functionality", ()=>{

    it("Should render Pagination component widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <Pagination/>
            </Provider>);
        expect(wrapper.find("#pageination-left").at(1)).toHaveLength(1);
        expect(wrapper.find("#pageination-right").at(2)).toHaveLength(1);
    });

})