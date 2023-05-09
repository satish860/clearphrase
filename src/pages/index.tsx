import CallToActionWithAnnotation from "./components/CallToActionWithAnnotation";
import SimpleThreeColumns from "./components/Features";
import WithSpeechBubbles from "./components/Testimonials";
import SmallWithSocial from "./components/Footer";
import { Flex, Text, Button, Stack, Link } from "@chakra-ui/react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import Header from "./components/Header";

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
        <Header />
      </Flex>

      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <SmallWithSocial />
    </>
  );
}
