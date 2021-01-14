import { VStack } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import { PageRoute, PAGE_ROUTES } from "../../config/routes";
import { Switch, Redirect } from "react-router-dom";
import { UserListScreen } from "../pages/user-list-screen";
import { UserViewScreen } from "../pages/user-view-screen";

export const RouterOutlet = () => {
    return (
        <VStack id="app-router" flex={1}>
            <Switch>
                {/* {PAGE_ROUTES.map((pageRoute: PageRoute) => {
                    const Component = pageRoute.component;
                    <Route path={pageRoute.path} component={<Component/>}/>
                })} */}
                <Route exact path="/users">
                    <UserListScreen/>
                </Route>
                <Route path="/users/view/:index">
                    <UserViewScreen/>
                </Route>
                <Redirect from="" to="/users"/>
            </Switch>
        </VStack>
    );
}