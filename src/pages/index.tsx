import CallToActionWithAnnotation from "./components/CallToActionWithAnnotation";
import SimpleThreeColumns from "./components/Features";
import WithSpeechBubbles from "./components/Testimonials";
import SmallWithSocial from "./components/Footer";
import { Flex, Text, Button, Stack, Box } from "@chakra-ui/react";

export default function Landing() {
  return (
    <>
      <Flex bg="white" w="100%" p={4} verticalAlign="center">
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
        <Stack
         direction="row" ml="auto" alignItems="center"
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>

      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <SmallWithSocial />
    </>
  );
}
