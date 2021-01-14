import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { DOWNLOAD_RESULT_TEXT } from "../../config/nav-section";
import { FaCloudDownloadAlt } from "react-icons/fa";


export const DownloadButton = (): JSX.Element=>{
    return <Button _hover={{bg:"purple.900"}} bg="purple.300" borderLeftRadius="20px" borderRightRadius="20px">
        <HStack spacing={2}>
            <Icon color="white" as={FaCloudDownloadAlt}/>
            <Text color="white">{DOWNLOAD_RESULT_TEXT}</Text>
        </HStack>
    </Button>
}