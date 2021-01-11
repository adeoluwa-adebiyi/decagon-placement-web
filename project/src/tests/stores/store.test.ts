import { UserInfo } from "../../data/entities/user-info";
import { SetUserListAction, SetUserListFetchedAction, UserReducerActionType } from "../../store/actions/user-actions";
import { UserReducerProps } from "../../store/reducers/user-reducer";
import store from "../../store/store";

describe("Tests Redux store functionality", ()=>{

    it("Should correctly set userList values",()=>{
        const list: UserInfo[] = [ {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "brad",
              "last": "gibson"
            },
            "location": {
              "street": "9278 new road",
              "city": "kilcoole",
              "state": "waterford",
              "postcode": "93027",
              "coordinates": {
                "latitude": "20.9267",
                "longitude": "-7.9310"
              },
              "timezone": {
                "offset": "-3:30",
                "description": "Newfoundland"
              }
            },
            "email": "brad.gibson@example.com",
            "login": {
              "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
              "username": "silverswan131",
              "password": "firewall",
              "salt": "TQA1Gz7x",
              "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
              "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
              "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
            },
            "dob": {
              "date": "1993-07-20T09:44:18.674Z",
              "age": 26
            },
            "registered": {
              "date": "2002-05-21T10:59:49.966Z",
              "age": 17
            },
            "phone": "011-962-7516",
            "cell": "081-454-0666",
            "id": {
              "name": "PPS",
              "value": "0390511T"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "IE"
          }];
        store.dispatch(
            <SetUserListAction>{
                type: UserReducerActionType.SET_USER_LIST,
                payload:{
                    userList:[...list]
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userList).toEqual(list);
    });

    it("Should correctly set userListFetched value",()=>{
        store.dispatch(
            <SetUserListFetchedAction>{
                type: UserReducerActionType.SET_USER_LIST_FETCHED,
                payload:{
                    userListFetched:true,
                    page: 67
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userListFetched).toEqual(true);
        expect((store.getState().users as UserReducerProps ).page).toEqual(67);


        store.dispatch(
            <SetUserListFetchedAction>{
                type: UserReducerActionType.SET_USER_LIST_FETCHED,
                payload:{
                    userListFetched:false,
                    page: 67
                }
            }
        );
        expect((store.getState().users as UserReducerProps ).userListFetched).toEqual(false);
        expect((store.getState().users as UserReducerProps ).page).toEqual(67);
    });

});

export {};