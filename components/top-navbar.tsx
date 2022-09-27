import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  Image,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function TopNav() {
  return (
    <Box bg='blackAlpha.50' px={4} boxShadow="lg">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w={['98%', '98%', '98%']}
        mx="auto"
      >
        <HStack
          spacing={0}
        >
          <ChakraLink
            as={Link}
            href='/'
          >
            <Image
              h="50px"
              src="logo.png"
              alt='oops logo'
              _hover={{
                cursor:'pointer'
              }}
            />
          </ChakraLink>
          <Text
            color="blackAlpha.900"
            fontSize='2xl'
            as='b'
          >
            OOOPS
          </Text>
        </HStack>
        <ConnectButton 
          showBalance={false}
          chainStatus="icon"
          accountStatus="address"
        />
      </Flex>
    </Box >
  );
}
