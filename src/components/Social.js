import React from 'react';
import { HStack, Icon, Heading, Flex, VStack } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Social = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:800px)');
  return (
    <Flex textAlign="center">
      <VStack>
        <Heading
          fontWeight="bold"
          fontFamily="Rajdhani, sans-serif"
          color="gray.400"
          size="2xl"
          textAlign="center"
          p={isNotSmallerScreen ? '12' : '0'}
        >
          Contact me:
        </Heading>
        <HStack
          spacing={isNotSmallerScreen ? '6' : '4'}
          alignItems="center"
          m="4"
          p="4"
        >
          <Icon
            as={FaLinkedin}
            boxSize="40px"
            bg="gray.700"
            rounded="12px"
            p="10px"
            color="white"
            _hover={{
              bg: 'gray.600',
            }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/'
              )
            }
          />
          <Icon
            as={FaGithub}
            boxSize="40px"
            bg="gray.700"
            rounded="12px"
            p="10px"
            color="white"
            _hover={{
              bg: 'gray.600',
            }}
            onClick={() => window.open('https://github.com/DanMartinez01')}
          />
        </HStack>
      </VStack>
    </Flex>
  );
};
export default Social;
