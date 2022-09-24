import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  useDisclosure,
  Link as RouterNavLink,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const webLinks = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
}

// helper
function NavLink({
  index,
  name,
  path,
  onClose,
}: NavLinkProps) {
  return (
    <RouterNavLink
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
      to={path}
    >
      {name}
    </RouterNavLink>
  )
}

export default function TopNav() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='gray.700' px={4} boxShadow="lg">

    </Box>
  );
}

