import { mount } from "enzyme"
import { Provider } from "react-redux";
import store from "../../../store/store";
import { DownloadButton } from "../../../components/widgets/download-button";
import { Button } from "@chakra-ui/react";

describe("Tests DownloadButton widget", ()=>{
    it("Should render appropriate widgets", ()=>{
        const wrapper = mount(
            <Provider store={store}>
                <DownloadButton/>
            </Provider>
        );
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).text()).toEqual("Download results");
    });
})