import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { GREETING_PROMPT } from "../../config/nav-section";

export interface GreetingPromptProps {
    username: string;
}

const GreetingPrompt = (props: GreetingPromptProps) => {
    return (
        <Box backgroundColor="red">
            <VStack spacing={1} alignItems="start">
                <HStack spacing={0} justifyContent="start">
                    <Heading size="xl" fontWeight="light" color="white">Hello,</Heading>
                    <Heading size="xl" fontWeight="bold" color="white">&nbsp;Emerald</Heading>
                </HStack>
                <Text color="white">{GREETING_PROMPT}</Text>
            </VStack>

        </Box>);
}

export default GreetingPrompt;