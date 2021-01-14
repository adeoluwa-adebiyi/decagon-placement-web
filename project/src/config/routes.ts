import { UserListScreen } from "../components/pages/user-list-screen";
import { UserViewScreen } from "../components/pages/user-view-screen";
import { USER_VIEW_TITLE } from "./page-titles";

export interface PageRoute{
    title?:string;
    path:string;
    component: ()=>JSX.Element;
}


export const PAGE_ROUTES =[
    <PageRoute>{
        path: "/users",
        component:UserListScreen
    },
    <PageRoute>{
        title: USER_VIEW_TITLE,
        path: "/users/view/:index",
        component:UserViewScreen
    }
]