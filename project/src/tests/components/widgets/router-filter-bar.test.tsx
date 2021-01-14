import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { CountryFilterBar } from "../../../components/widgets/country-filter-bar";
import { CountryVisibleSwitch } from "../../../components/widgets/country-visible-switch";
import { ResultFilterBar } from "../../../components/widgets/result-fiterbar";
import { SearchInputFilter } from "../../../components/widgets/search-input-filter";
import store from "../../../store/store";

describe("Tests ResultFilterBar widget for functionality", ()=>{
    
    it("Should render ResultFilterBar widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <ResultFilterBar countryVisible={true} setCountryVisible={()=>{console.log("Hello")}} countryKeyList={[]} currentCountry={""} setCountryFilter={(data:string)=>{console.log("Hello")}}/>
            </Provider>
        );
        // expect(wrapper.find(Text).text()).toEqual("Filter by");
        expect(wrapper.find(SearchInputFilter)).toHaveLength(1);
        expect(wrapper.find(CountryFilterBar)).toHaveLength(1);
        expect(wrapper.find(CountryVisibleSwitch)).toHaveLength(1);
    });

});