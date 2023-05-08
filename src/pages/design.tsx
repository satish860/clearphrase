import { ReactNode } from "react";
import { Box, Flex, Textarea, Text } from "@chakra-ui/react";
import { Center, Stack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function design() {
  const textAreaStyle = {
    height: "60vh",
    width: { base: "80vw", md: "40vw" },
    borderRadius: "md",
    borderColor: "gray.300",
    borderWidth: "1px",
    padding: "2",
    resize: "none",
    _focus: {
      borderColor: "blue.500",
      boxShadow: "0 0 0 1px blue.500",
    },
  };

  return (
    <>
      <Center bg="gray.100" h="100vh">
        <Box
          borderWidth="2px"
          p="4"
          h="80vh"
          w="80vw"
          display="flex"
          alignItems="center"
          bg="white"
          justifyContent="center"
        >
          <Tabs
            variant="soft-rounded"
            h="80vh"
            w="80vw"
            p="5"
            colorScheme="green"
          >
            <TabList>
              <Box px="2" py="2">
                <Text fontWeight="bold">Tones: </Text>
              </Box>
              <Tab>Standard</Tab>
              <Tab>Fluency</Tab>
              <Tab>Formal</Tab>
              <Tab>Simple</Tab>
              <Tab>Creative</Tab>
              <Tab>Summarize</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea placeholder="Textbox 1" sx={textAreaStyle} />
                  <Textarea placeholder="Textbox 2" sx={textAreaStyle} />
                </Flex>
              </TabPanel>
            </TabPanels>
            <Stack
              direction="row"
              spacing={4}
              align="center"
              justifyContent="center"
            >
              <Button
                colorScheme="green"
                variant="solid"
                loadingText="Paraphrasing..."
              >
                Paraphrase
              </Button>
              <Button colorScheme="green" variant="outline">
                Clear All
              </Button>
            </Stack>
          </Tabs>
        </Box>
      </Center>
    </>
  );
}
