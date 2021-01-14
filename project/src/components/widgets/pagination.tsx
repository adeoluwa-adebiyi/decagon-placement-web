import { Button, HStack, Icon } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoList } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";

export const Pagination = (): JSX.Element =>{

    const currentPage = useSelector((state:AppStoreState)=>state.users.page);

    const dispatch = useDispatch();

    const fetchPrevPage = ()=>{
        if(currentPage > 1){
            dispatch(fetchUserInfoList({page:currentPage-1}));
        }
    }

    const fetchNextPage = ()=>{
        dispatch(fetchUserInfoList({page:currentPage+1}));
    }

    return (
        <HStack>
            <Button onClick={()=>fetchPrevPage()} id="pageination-left" backgroundColor="#e2e3ec" _groupActive={{backgroundColor:"black"}}>
                <Icon color="black" _groupActive={{color:"white"}} as={FaAngleLeft}/>
            </Button>
            <Button onClick={()=>fetchNextPage()} id="pageination-right" _groupActive={{backgroundColor:"black"}}>
                <Icon color="black" _groupActive={{color: "white"}} as={FaAngleRight}/>
            </Button>
        </HStack>
    );

}