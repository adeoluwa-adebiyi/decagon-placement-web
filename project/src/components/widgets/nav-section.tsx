import { Box, BoxProps } from "@chakra-ui/react";

export interface NavSectionProps extends BoxProps{
    selectedGender: undefined | "male" | "female";
    setGender: Function;
}

const NavSection = (props: NavSectionProps) =>{
    return (
        <Box height="100%">

        </Box>
    );
}

export default NavSection;