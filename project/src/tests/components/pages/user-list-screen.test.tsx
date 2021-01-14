import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { UserListScreen } from "../../../components/pages/user-list-screen";
import { UserInfoCard } from "../../../components/widgets/user-info-card";
import { setUserInfoList } from "../../../store/actions/user-actions";
import store from "../../../store/store";


describe("Tests UserListScreen component for functionality", ()=>{

    it("Should render appropriate amount of cards", ()=>{

        store.dispatch(setUserInfoList([{
            firstname:"Damian",
            lastname:"Marley",
            title:"Mr",
            age:67,
            address:{street:{number:78, name:"89 Lawrence"},coordinates:{latitude:"5",longitude:"67"}, city:"Night City", state:"Phantom", postcode:"78564",timezone:{offset:"", description:""}},
            joined_date:"20-01-2016",
            phone:"7873876653",
            mobile:"474657654",
            email:"user@mail.com",
            pictureURL:"https://profilemail.com",
            nat:"US"
        },
        {
            firstname:"Damian",
            lastname:"Marley",
            title:"Mr",
            age:67,
            address:{street:{number:78, name:"89 Lawrence"},coordinates:{latitude:"5",longitude:"67"}, city:"Night City", state:"Phantom", postcode:"78564",timezone:{offset:"", description:""}},
            joined_date:"20-01-2016",
            phone:"7873876653",
            mobile:"474657654",
            email:"user@mail.com",
            pictureURL:"https://profilemail.com",
            nat:"US"
        }
    ],"male"));
    
    const wrapper = mount(
        <Provider store={store}>
            <UserListScreen/>
        </Provider>
        );
        expect(wrapper.find(UserInfoCard)).toHaveLength(2);
    })

});