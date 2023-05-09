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
      <Header />
     <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <SmallWithSocial />
    </>
  );
}
