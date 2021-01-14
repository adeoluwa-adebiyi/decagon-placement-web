import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export type UserInfoViewButtonProps = ButtonProps;

export const UserInfoViewButton= (props: UserInfoViewButtonProps): JSX.Element=>{
    return (
        <Button boxShadow="xl" _active={{boxShadow:"0 0 10px #cccc"}} bg="#30bbb5" {...props}>
            <Icon color="white" as={FaArrowRight}/>
        </Button>
    )
}