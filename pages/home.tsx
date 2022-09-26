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
    <Center
      px='20%'
    >
      <SimpleGrid
        columns={[1, 1, 2, 2, 3]}
        spacing={5}
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
