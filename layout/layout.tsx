import * as React from 'react';
import Navbar from '../components/top-navbar';
import { ChakraProvider } from '@chakra-ui/react'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
      {/* Footer */}
      {/* Add more things here if needed */}
    </ChakraProvider>
  );
}
