import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  Image,
  useDisclosure,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';

const webLinks = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
  { name: 'Link1', path: '/link1' },
  { name: 'Link2', path: '/link2' },
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
    <Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow="lg">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w={['98%', '98%', '98%']}
        mx="auto"
      >
        <HStack>
          <Image
            h="50px"
            src="logo.png"
            alt='oops logo'
          />
          <Text
            color="gray.500"
          >
            Only One On Planets
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
