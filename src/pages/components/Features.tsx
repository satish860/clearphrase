import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ImChrome } from 'react-icons/im';
import { CgWebsite } from 'react-icons/cg';
import {  IoIosDesktop } from 'react-icons/io';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={CgWebsite} w={10} h={10} color="green"/>}
          title={'Web Interface'}
          text={
            "Clearphrase's intuitive web interface makes it easy to adjust the tone of your writing from any device with an internet connection."
          }
        />
        <Feature
          icon={<Icon as={ImChrome} w={10} h={10} color="green" />}
          title={'Chrome Extension'}
          text={
            "With Clearphrase's Chrome extension, you can seamlessly edit your tone without ever leaving your browser."
          }
        />
        <Feature
          icon={<Icon as={IoIosDesktop} w={10} h={10} color="green" />}
          title={'Context menu on Desktop'}
          text={
           "Clearphrase's context menu integration on Windows lets you quickly adjust your tone within your favourite writing apps."
          }
        />
      </SimpleGrid>
    </Box>
  );
}