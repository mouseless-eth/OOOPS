import * as React from 'react';
import type { NextPage } from 'next'
import {
  Text,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import GalleryItem from '../components/galleryItem';
import collection from '../public/data/collection';

const Home: NextPage = () => {
  return (
    <Center>
      <SimpleGrid
        columns={3}
      >
        {collection.map(piece => {
          return <GalleryItem
            collection={piece}
          />
        })}
      </SimpleGrid>
    </Center>
  )
}

export default Home
