import React from 'react';
import {
  Box,
  Text,
  Stack,
} from '@chakra-ui/react';
import { CollectionPiece } from '../public/data/collection';
import HoverVideoPlayer from 'react-hover-video-player';

interface Props {
  collection: CollectionPiece;
}

const GalleryItem = ({ collection }: Props) => {
  const {
    nftName,
    //physicalName,
    shortDescription,
    NFTVideoLocation,
    //physicalPhotos,
    //tokenId,
  } = collection;

  return (
    <Box
      p={4}
      borderWidth={2}
      borderColor="blackAlpha.800"
      borderRadius={5}
    >
      <Box
      >
        <HoverVideoPlayer
          videoSrc={NFTVideoLocation}
          focused={true}
        />
      </Box>
      <Stack
        justify='center'
        pt={1}
      >
        <Text
          align='center'
          fontSize='xl'
          as='b'
          w='100%'
        >
          {nftName}
        </Text>
        <Text
          align='center'
          fontSize='sm'
        >
          {shortDescription}
        </Text>
      </Stack>
    </Box>
  );
}

export default GalleryItem;
