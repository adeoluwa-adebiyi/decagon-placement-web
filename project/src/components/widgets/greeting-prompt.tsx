import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { GREETING_PROMPT } from "../../config/nav-section";

export interface GreetingPromptProps {
    username: string;
}

const GreetingPrompt = (props: GreetingPromptProps): JSX.Element => {
    const { username } = props;
    return (
        <Box backgroundColor="red">
            <VStack spacing={1} alignItems="start">
                <HStack spacing={0} justifyContent="start">
                    <Heading size="xl" fontWeight="light" color="white">Hello,</Heading>
                    <Heading size="xl" fontWeight="bold" color="white">&nbsp;{username}</Heading>
                </HStack>
                <Text color="white">{GREETING_PROMPT}</Text>
            </VStack>

        </Box>);
}

export default GreetingPrompt;