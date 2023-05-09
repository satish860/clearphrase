import React, { useState } from "react";
import { Box, Flex, Textarea, Text, Show } from "@chakra-ui/react";
import { Center, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

type SelectedItem = {
  tone: string;
  dialect: string;
};

type ApiResponse = {
  result: string;
};

export default function Phraser() {
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

  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>({
    tone: "Standard",
    dialect: "British",
  });

  const [sentence, setSentence] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const callApi = (item: SelectedItem) => {
    if (!sentence) return;
    setLoading(true);
    fetch("/api/Parapharser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tone: item.tone, sentence }),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => setApiResult(data.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const clearAll = () => {
    setSentence("");
    setApiResult("");
  };

  const handleItemClick = (tone: string, dialect: string) => {
    console.log(tone, dialect);
    setSelectedItem({ tone, dialect });
    callApi({ tone, dialect });
  };

  const handleApiCall = () => {
    if (!selectedItem) {
      return;
    }
    callApi(selectedItem);
  };

  const handleSentenceChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSentence(event.target.value);
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
          <Tabs variant="unstyled" h="80vh" w="80vw" p="5" colorScheme="green">
            <Show above="sm">
              <TabList>
                <Box px="2" py="2">
                  <Text fontWeight="bold">Tones: </Text>
                </Box>
                <Tab onClick={() => handleItemClick("Standard", "British")}>
                  Standard
                </Tab>
                <Tab onClick={() => handleItemClick("Fluency", "British")}>
                  Fluency
                </Tab>
                <Tab onClick={() => handleItemClick("Formal", "British")}>
                  Formal
                </Tab>
                <Tab onClick={() => handleItemClick("Simple", "British")}>
                  Simple
                </Tab>
                <Tab onClick={() => handleItemClick("Creative", "British")}>
                  Creative
                </Tab>
                <Tab onClick={() => handleItemClick("Summarize", "British")}>
                  Summarize
                </Tab>
              </TabList>
            </Show>
            <Show below="sm">
                <Select defaultValue="Standard" placeholder="Tones">
                  <option
                    onClick={() => handleItemClick("Standard", "British")}>
                    Standard
                  </option>
                  <option onClick={() => handleItemClick("Fluency", "British")}>
                    Fluency
                  </option>
                  <option onClick={() => handleItemClick("Formal", "British")}>
                    Formal
                  </option>
                  <option onClick={() => handleItemClick("Simple", "British")}>
                    Simple
                  </option>
                  <option
                    onClick={() => handleItemClick("Creative", "British")}>
                    Creative
                  </option>
                  <option
                    onClick={() => handleItemClick("Summarize", "British")}>
                    Summarize
                  </option>
                </Select>
            </Show>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="green.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Textarea
                    placeholder="To Rewrite text,enter or paste your Text here."
                    sx={textAreaStyle}
                    value={sentence}
                    maxLength={2000}
                    onChange={handleSentenceChange}
                  />
                  <Textarea
                    sx={textAreaStyle}
                    value={apiResult}
                    disabled={loading}
                    readOnly={true}
                  />
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
                onClick={handleApiCall}
              >
                Paraphrase
              </Button>
              <Button colorScheme="green" variant="outline" onClick={clearAll}>
                Clear All
              </Button>
            </Stack>
          </Tabs>
        </Box>
      </Center>
    </>
  );
}
