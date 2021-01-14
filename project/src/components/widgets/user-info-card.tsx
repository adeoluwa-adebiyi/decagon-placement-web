import { Box, Circle, HStack, Image, VStack, Text, Icon } from "@chakra-ui/react";
import { UserInfoModel } from "../../domain/models/user-info";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { UserInfoViewButton } from "./user-info-view-button";
import { useHistory } from "react-router-dom";

export interface UserInfoCardProps {
    info: UserInfoModel;
    countryVisible: boolean;
    index: number;
}

//shadow bde8e8
export const UserInfoCard = (props: UserInfoCardProps):JSX.Element => {

    const { info, countryVisible, index } = props;
    const { pictureURL, firstname, lastname, address, email,phone, nat } = info;
    let street;
    if(address.street){
        street = address.street.name;
    }else{
        street = address.street;
    }
    const history = useHistory();
    const viewUser = ()=>{
        history.push("/users/view/"+index)
    };
    return <Box padding="6" borderRadius="xl" boxShadow="lg" bg="white" display="flex" flexDirection="row" alignSelf="stretch">
        <HStack spacing={10} justifyContent="start" alignSelf="stretch" width="100%">
            <Circle border="4px solid #30bbb5">
                <Image   borderRadius="full" boxSize="100px" className="user-card-image" src={pictureURL} />
            </Circle>
            <VStack alignItems="start" alignSelf="stretch" width="100%">

                <Text className="user-card-name" fontWeight="bold" fontSize="16">{`${firstname} ${lastname}`}</Text>
                <Text className="user-card-address" fontWeight="bold" fontSize="14" fontStyle="italic" color="gray">{`${address.street.number} ${street}, ${address.city}, ${address.state}`}</Text>
                <HStack flex={1} alignSelf="stretch" justifyContent="space-between">
                    
                    <HStack spacing={1}>
                        <Icon as={FaEnvelope} color="gray"/>
                        <Text className="user-card-email">{email}</Text>
                    </HStack>

                    <HStack spacing={1}>
                        <Icon as={FaPhoneAlt} color="gray"/>
                        <Text  className="user-card-phone">{phone}</Text>
                    </HStack>


                    <UserInfoViewButton onClick={viewUser}/>

                </HStack>

                {countryVisible && <Text>Country: {nat}</Text>}

            </VStack>
        </HStack>
    </Box>;
}