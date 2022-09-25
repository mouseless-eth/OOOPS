import * as React from 'react';
import {
  Box,
  Image,
} from '@chakra-ui/react';
import { CollectionPiece } from '../public/data/collection';
import HoverVideoPlayer from 'react-hover-video-player';

interface Props {
  collection: CollectionPiece;
}

export default function GalleryItem({ collection }: Props) {
  const {
    nftName,
    physicalName,
    shortDescription,
    NFTVideoLocation,
    physicalPhotos,
    tokenId,
  } = collection;

  return (
    <Box>
      <Box>
        <HoverVideoPlayer
          videoSrc={NFTVideoLocation}
        />
      </Box>
    </Box>
  );
}
