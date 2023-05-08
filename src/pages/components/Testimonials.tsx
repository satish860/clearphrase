import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Users Speak</Heading>
          <Text>We have been working with users from various fields</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Job!</TestimonialHeading>
              <TestimonialText>
                The mode option appears to be a cool feature that allows for
                customized user preferences.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={""}
              name={"Azharudeen"}
              title={""}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Replacement</TestimonialHeading>
              <TestimonialText>
                This works so well, this paraphrases a not so good sentence, a
                very good alternattive to grammarly. Works like bliss
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C5603AQGaPCCoKwVckg/profile-displayphoto-shrink_400_400/0/1605114569814?e=1689206400&v=beta&t=6bG0oftNtQOFw2If1Nyw4rrsWp7cJVFRniyg3Xn3z1s"
              }
              name={"Puneeth S Vishwanath"}
              title={"Agile Coach at AirBus"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C4E03AQEVyGEEJu2EUg/profile-displayphoto-shrink_400_400/0/1632155148530?e=1689206400&v=beta&t=yQYj0HpPdhaP40VHJK95KffAI4ZDeZ7iAtwKlKTAGcY"
              }
              name={"Suganya Sridharan"}
              title={"Assistant Consultant at TCS"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
