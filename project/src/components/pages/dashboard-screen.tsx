import { Box, Stack } from "@chakra-ui/react"

const DashboardScreen = (): JSX.Element=>{
    return (
        <Box color="blueviolet.200" height="100%">
            <Stack height="100%" direction="row">
                <Stack flex={1} height="100%" direction="column" alignSelf="stretch" justifyContent="center" alignItems="center">
                    <p>Nav Section</p>
                </Stack>
                <Stack flex={1}  height="100%" direction="column" justifyContent="center" alignItems="center">
                    <p>Router Section</p>
                </Stack>
            </Stack>
        </Box>
    );
}

export default DashboardScreen;