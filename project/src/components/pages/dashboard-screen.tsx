import { Box, Container, Stack } from "@chakra-ui/react"
import NavSection from "../widgets/nav-section"
import RouteDisplaySection from "../widgets/route-display-section"

const DashboardScreen = (): JSX.Element=>{
    return (
        <Box boxSizing="border-box" backgroundColor="#262A41" display="flex" flex={1} flexDirection="column" width="100%" height="100vh" maxHeight="100vh">
            <Stack height="100%" direction="row">
                <Stack id="nav-parent" bg="red" flex={1} height="100%" direction="column" alignSelf="stretch" justifyContent="center" alignItems="center">
                    <NavSection/>
                </Stack>
                <Stack flex={1}  height="100vh" maxHeight="100vh" direction="column" justifyContent="center" alignItems="center">
                   <RouteDisplaySection/>
                </Stack>
            </Stack>
        </Box>
    );
}

export default DashboardScreen;