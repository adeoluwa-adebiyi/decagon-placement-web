import { mount } from "enzyme";
import { UserInfoCard } from "../../../components/widgets/user-info-card";
import { UserInfoModel } from "../../../domain/models/user-info";
import { Image } from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { UserInfoViewButton } from "../../../components/widgets/user-info-view-button";

describe("Tests UserInfoCard widget for functionality", ()=>{
    
    it("Should render UserInfoCard widgets", ()=>{
        const info: UserInfoModel = {
            firstname:"Damian",
            lastname:"Marley",
            title:"Mr",
            age:67,
            address:{street:{name:"Lawrence", number:89},coordinates:{latitude:"5",longitude:"67"}, city:"Night City", state:"Phantom", postcode:"78564",timezone:{offset:"", description:""}},
            joined_date:"20-01-2016",
            phone:"7873876653",
            mobile:"474657654",
            email:"user@mail.com",
            pictureURL:"https://profilemail.com",
            nat:"US"
        };
        const wrapper = mount(
                <UserInfoCard info={info} countryVisible={false} index={0}/>        
        );
        expect(wrapper.find(".user-card-name").at(1).text()).toEqual(`${info.firstname} ${info.lastname}`);
        expect(wrapper.find(".user-card-address").at(1).text()).toEqual(`${info.address.street.number} ${info.address.street.name}, ${info.address.city}, ${info.address.state}`);
        expect(wrapper.find(".user-card-email").at(1)).toHaveLength(1);
        expect(wrapper.find(Image).getElement().props.src).toEqual(info.pictureURL);
        expect(wrapper.find(FaEnvelope)).toHaveLength(1);
        expect(wrapper.find(".user-card-email").at(1).text()).toContain(info.email);
        expect(wrapper.find(FaPhoneAlt)).toHaveLength(1);
        expect(wrapper.find(".user-card-phone").at(1).text()).toContain(info.phone);
        expect(wrapper.find(UserInfoViewButton)).toHaveLength(1);
    });

});