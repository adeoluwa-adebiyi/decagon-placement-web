import { VStack, Box, Text, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IconType } from "react-icons";


export interface UserModeSelectButtonProps extends React.ComponentProps<"div"> {
    icon: IconType;
    backgroundColor: string;
    buttonTitle: string;
    selected?: boolean;
}


const UserModeSelectButton = (props: UserModeSelectButtonProps):JSX.Element => {
    const { backgroundColor = "green.600", icon, buttonTitle, selected = false, ...otherProps } = props;
    const { onClick } = otherProps;

    const ifSelected = ()=>{
        if(selected)
            return {padding:50,boxShadow:"0 0 10px #cccc"};
        else{
            return {padding:10};
        }
    }
    return (
        <VStack spacing={5} {...otherProps}>
            <Box display="flex" flexDirection="column" justifyContent="center" width={20}
                height={20} bg={backgroundColor} borderRadius="xl" 
                onClick={onClick} _active={{ padding: 50 }} _hover={{ padding: 30, boxShadow:"0 0 10px #cccc" }} {...ifSelected()}>

                <HStack justifyContent="center">
                    <Icon as={icon} color="white" />
                </HStack>

            </Box>
            <Text fontSize={10} color="white">{buttonTitle}</Text>
        </VStack>
    );
}

export default UserModeSelectButton;