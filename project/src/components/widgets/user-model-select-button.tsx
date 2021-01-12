import { VStack, IconProps, Box, Text, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaMale, FaUserAlt, FaFemale  } from "react-icons/fa";
import { IconType } from "react-icons";


export interface UserModeSelectButtonProps extends React.ComponentProps<"div"> {
    icon: IconType;
    backgroundColor: string;
    buttonTitle: string;
}


const UserModeSelectButton = (props: UserModeSelectButtonProps) =>{
    const { backgroundColor="green.600", icon, buttonTitle,...otherProps } = props;
    const {onClick} = otherProps;
    return (
        <VStack spacing={5} {...otherProps}>
            <Box display="flex" flexDirection="column" justifyContent="center" width={20} 
                height={20} bg={backgroundColor} borderRadius="xl" padding={10} 
                onClick={onClick} _active={{padding:50}} _hover={{padding:50}}>

                <HStack justifyContent="center">
                    <Icon as={icon} color="white"/>
                </HStack>

            </Box>
            <Text fontSize={10} color="white">{buttonTitle}</Text>
        </VStack>
    );
}

export default UserModeSelectButton;