import { HStack, Box } from "@chakra-ui/react";
import { DownloadButton } from "./download-button";
import { Pagination } from "./pagination";

export const FooterMenuSection = (): JSX.Element => {
    return  <Box width="100%" alignSelf="stretch" paddingLeft={4} paddingRight={4}>
        <HStack justifyContent="space-between" flex={1}>
            <DownloadButton/>
            <Pagination/>
        </HStack>
    </Box>
}