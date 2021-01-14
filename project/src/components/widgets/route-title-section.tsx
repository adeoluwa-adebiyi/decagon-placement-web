import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStoreState } from "../../store/store";
import { useEffect, useState } from "react";
import { PAGE_ROUTES } from "../../config/routes";
import { MALE_USERS_TITLE, FEMALE_USERS_TITLE, ALL_USERS_TITLE } from "../../config/page-titles";


export const RouteTitleSection = ()=>{
    
    const history = useHistory();
    const gender:string|undefined = useSelector((state:AppStoreState)=>state.users.gender); 
    const [title, setTitle] = useState("");

    useEffect(()=>{
        if(history.location.pathname === PAGE_ROUTES[0].path){
            switch(gender){
                case "male":
                    setTitle(MALE_USERS_TITLE);
                    break;
                
                case "female":
                    setTitle(FEMALE_USERS_TITLE);
                    break;

                default:
                    setTitle(ALL_USERS_TITLE);
                    break;
            }
            console.log("GENDER: "+gender);
        }else{
            setTitle(PAGE_ROUTES.filter(route=>route.path.includes(history.location.pathname)?route.title:null)[PAGE_ROUTES.filter(route=>route.path.includes(history.location.pathname)?route.title:null).length-1]?.title??"Page");
        }
    }, [gender, history.location.pathname]);

    return (
        <Box paddingLeft={4} paddingRight={4}>
            <Text fontSize={30} fontWeight="bold">{title}</Text>
        </Box>
    )
}