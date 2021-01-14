import { Switch, Box, Text, HStack } from "@chakra-ui/react";


export interface CountryVisibleSwitchProps {
    countryVisible: boolean;
    setCountryVisible: (data: boolean) => void;
}

export const CountryVisibleSwitch = (props: CountryVisibleSwitchProps):JSX.Element => {
    const { countryVisible, setCountryVisible } = props;
    return (
        <Box display="flex" flexDirection="row" flex={2}>
            <HStack width={"100%"} alignItems="center" justifyContent="end">
                <Switch colorScheme="teal" value={JSON.stringify(countryVisible)} size="lg" onChange={(e) => setCountryVisible(!JSON.parse(e.target.value))} alignSelf="stretch" />
                <Text fontWeight="bold" flex={1}>Show Country</Text>
            </HStack>
        </Box>
    );
}