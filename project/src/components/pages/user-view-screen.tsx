import { userInfo } from "os";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { AppStoreState } from "../../store/store";

import {Box, HStack, Text, VStack, Image, Icon, Button} from "@chakra-ui/react";

import {FaEnvelope, FaPhoneAlt, FaArrowLeft} from "react-icons/fa";

export interface UserViewScreenParams{
    index:string
}

export const UserViewScreen = () =>{
    const {index} = useParams<UserViewScreenParams>();
    const userInfoList = useSelector((state:AppStoreState)=>state.users.userList);
    if(!(index) || parseInt(index) >= userInfoList.length){
        return <Box height="100%">
            <VStack>
            <Button onClick={()=>history.goBack()}>
                <HStack spacing={2}>
                    <Icon color="#30bbb5" as={FaArrowLeft}/>
                    <Text color="grey">RESULTS</Text>
                </HStack>
            </Button>
            <Text>User Not found</Text>
            </VStack>
           
        </Box>
    }
    const info = userInfoList[parseInt(index)];

    const history = useHistory();

    const {pictureURL, firstname, lastname, address, email, phone, title, age="N/A", joined_date } = info;

    return (
        <Box height="100%" width="100%" padding={4}>
            <Button onClick={()=>history.goBack()}>
                <HStack spacing={2}>
                    <Icon color="#30bbb5" as={FaArrowLeft}/>
                    <Text color="grey">RESULTS</Text>
                </HStack>
            </Button>
            <Box borderRadius="xl" width="100%" marginTop={10}>
                <HStack width="100%" alignItems="start" spacing={4}>
                    <VStack justifyContent="start" height="100%">
                        <Image src={pictureURL} width={400} borderRadius="full" border="4px solid #30bbb5"/>
                    </VStack>

                    <VStack alignItems="start" width="100%" spacing={4}>
                        <HStack spacing={2}>
                            <Text className="view-card-name" fontWeight="bold" fontSize={30}>{`${title}. ${firstname} ${lastname}`}</Text>
                            <Text fontSize={30}>{age}</Text>
                        </HStack>
                        <Text className="view-card-address" fontWeight="light" fontSize={24} color="grey">{`${address.street.number} ${address.street.name}, ${address.city}, ${address.state}`}</Text>
                        <HStack spacing={4} padding={4} borderLeftRadius="25px" borderRightRadius="25px" bg="#ccc">
                            <Icon as={FaEnvelope} color="grey"/>
                            <Text className="view-card-email">{email}</Text>
                        </HStack>

                        <HStack spacing={4} padding={4} borderLeftRadius="25px" borderRightRadius="25px" bg="#f7d9f2">
                            <Text  className="view-card-phone">JOINED:  {joined_date.split("T")[0]}</Text>
                        </HStack>

                        <HStack spacing={4} padding={4}>
                            <Icon as={FaPhoneAlt} color="grey"/>
                            <Text  className="view-card-phone">{phone}</Text>
                        </HStack>

                    </VStack>
                </HStack>
            </Box>

        </Box>
    )
 }