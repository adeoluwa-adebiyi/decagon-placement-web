import { Dob } from "./dob";
import { Login } from "./login";
import { Name } from "./name";
import { Picture } from "./pciture";
import { ID } from "./user-id";
import { Location } from "./location";

export interface UserInfo {
    gender:     string;
    name:       Name;
    location:   Location;
    email:      string;
    login:      Login;
    dob:        Dob;
    registered: Dob;
    phone:      string;
    cell:       string;
    id:         ID;
    picture:    Picture;
    nat:        string;
}