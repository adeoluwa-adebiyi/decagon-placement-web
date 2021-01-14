import { shallow } from "enzyme";
import { DownloadButton } from "../../../components/widgets/download-button";
import { FooterMenuSection } from "../../../components/widgets/footer-menu-section";
import { Pagination } from "../../../components/widgets/pagination";

describe("Tests FooterMenuSection widget for functionality", ()=>{

    it("Should render Downloadbutton and pagination widget", ()=>{
        const wrapper = shallow(<FooterMenuSection/>);
        expect(wrapper.find(DownloadButton)).toHaveLength(1);
        expect(wrapper.find(Pagination)).toHaveLength(1);
    });

});