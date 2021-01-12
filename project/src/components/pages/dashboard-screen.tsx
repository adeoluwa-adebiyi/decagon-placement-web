import { Box, Stack } from "@chakra-ui/react"
import NavSection from "../widgets/nav-section"

const DashboardScreen = (): JSX.Element=>{
    return (
        <Box backgroundColor="#262A41" height="100%">
            <Stack height="100%" direction="row">
                <Stack id="nav-parent" bg="red" flex={1} height="100%" direction="column" alignSelf="stretch" justifyContent="center" alignItems="center">
                    <NavSection/>
                </Stack>
                <Stack flex={1}  height="100%" direction="column" justifyContent="center" alignItems="center">
                    <p>Router Section</p>
                </Stack>
            </Stack>
        </Box>
    );
}

export default DashboardScreen;