import * as React from 'react';
import Navbar from '../components/top-navbar';
import { ChakraProvider } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import CustomAvatar from '../components/RainbowKit/customAvatar';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} avatar={CustomAvatar}>
          <Navbar />
          {children}
          {/* Footer */}
          {/* Add more things here if needed */}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
