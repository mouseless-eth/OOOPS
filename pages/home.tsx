import * as React from 'react';
import type { NextPage } from 'next'
import {
  Text,
  SimpleGrid,
  Flex,
  Heading,
  VStack,
  Image
} from '@chakra-ui/react';
import GalleryItem from '../components/galleryItem';
import collection from '../public/data/collection';

const Home: NextPage = () => {
  return (
    <Flex
      px='15%'
      py='5%'
      flexDir='column'
    >
      <Image
        src='all-collections.png'
        alt='all collections'
      />
      <VStack>
        <Heading>
          The Collection
        </Heading>
        <Text>
          Each NFT represents ownership over it's corresponding physical piece of clothing
        </Text>
      </VStack>
      <SimpleGrid
        columns={[1, 1, 2, 2, 3]}
        spacing={5}
        pt={4}
      >
        {collection.map(piece => {
          return <GalleryItem
            key={piece.toString()}
            collection={piece}
          />
        })}
      </SimpleGrid>
    </Flex>
  )
}

export default Home
