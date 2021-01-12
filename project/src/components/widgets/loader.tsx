import React from "react"
import { Box, Spinner, Stack } from "@chakra-ui/react";

const Loader = () => {
    return (<Box height="100%">
        <Stack height="100%" alignSelf="stretch" justifyContent="center" alignItems="center" direction="column">
            <Spinner size="xl"/>
        </Stack>
    </Box>);
}

export default Loader;