import { Flex, Text, Button, Stack } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex bg="white" w="100%" p={4} verticalAlign="center" as="header" position="fixed">
        <Text fontSize="3xl">Clear</Text>
        <Text fontSize="3xl" color="green.600" transform={"rotate(-20deg)"}>
          P
        </Text>
        <Text fontSize="3xl" color="green.600">
          hrase
        </Text>
        <Text fontSize="3xl" color="black">
          .io
        </Text>
        <Stack direction="row" ml="auto" alignItems="center"></Stack>
      </Flex>
    </>
  );
}
