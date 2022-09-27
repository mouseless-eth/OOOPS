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

const webLinks = [
  { name: 'About', path: '/about' },
  { name: 'Physical', path: '/physical' },
];

interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

// helper
function NavLink({
  name,
  path,
  onClose,
}: NavLinkProps) {
  return (
    <ChakraLink
      as={Link}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
      _activeLink={{
        color: 'blue.500',
      }}
      onClick={() => onClose()}
      href={path}
    >
      {name}
    </ChakraLink>
  );
}

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          {webLinks.map((link) => (
            <NavLink
              key={link.toString()}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))}
        </HStack>
      </Flex>
    </Box >
  );
}
