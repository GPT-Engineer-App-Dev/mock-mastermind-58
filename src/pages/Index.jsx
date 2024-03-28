// Complete the Index page component here
// Use chakra-ui
import { Flex, Heading, VStack, HStack, Spacer, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      <Heading p={4}>Chit Chat App-a-looza</Heading>

      <VStack flex={1} p={4} spacing={4} overflowY="auto">
        <HStack w="100%" justify="flex-end">
          <Spacer />
          <Flex bg="blue.100" p={3} borderRadius="lg" maxW="75%">
            Hey, how's it going?
          </Flex>
        </HStack>

        <HStack w="100%">
          <Flex bg="gray.100" p={3} borderRadius="lg" maxW="75%">
            Not bad, how about you?
          </Flex>
          <Spacer />
        </HStack>

        <HStack w="100%" justify="flex-end">
          <Spacer />
          <Flex bg="blue.100" p={3} borderRadius="lg" maxW="75%">
            Doing well thanks!
          </Flex>
        </HStack>
      </VStack>

      <InputGroup p={4}>
        <Input placeholder="Type a message..." />
        <InputRightElement children={<FaPaperPlane color="green.500" />} />
      </InputGroup>
    </Flex>
  );
};

export default Index;
