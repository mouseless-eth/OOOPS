export interface CollectionPiece {
  nftName: string,
  physicalName: string,
  shortDescription: string,
  physicalPhotos: string[],
  NFTVideoLocation: string,
  tokenId: number,
}

let nftRoot = 'nft-data';

const collection: CollectionPiece[] = [
  {
    nftName: 'WIND OF CHANGE',
    physicalName: 'OC1',
    shortDescription: 'There is nothing permanent except change',
    physicalPhotos: [

    ],
    NFTVideoLocation: "nft-data/WindsOfChange/video.mp4",
    tokenId: 0,
  },
  {
    nftName: '3NITY',
    physicalName: 'MC8',
    shortDescription: '3nity = Unity',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/3nity/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'FLOWER OF LIFE',
    physicalName: 'MC9',
    shortDescription: 'The flower of life is said to be the blueprint of all creation in the universe',
    physicalPhotos: [],
    NFTVideoLocation: "nft-data/FlowerOfLife/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'CELEBRATIONS',
    physicalName: 'MC11',
    shortDescription: "Don't wait to celebrate just for a special moment. Celebrate every moment while still breathing.",
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/Celebrations/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'INTERNATIONAL LOVE',
    physicalName: 'CM J3',
    shortDescription: 'Why must we create war? Let’s make LOVE instead of WAR.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/InternationalLove/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'PEACE PLEASE',
    physicalName: 'CM J1',
    shortDescription: 'Having peace of mind is the first step for all kinds of peace.',
    physicalPhotos: [
      `${nftRoot}/PeacePlease/`,
    ],
    NFTVideoLocation: "nft-data/PeacePlease/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'RELATIONSHIP OF ART & FASHION',
    physicalName: 'OJ1',
    shortDescription: 'Art and fashion allows us to dress and express ourselves uniquely without the limitations of any trend or season.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/RelationshipOfArtAndFashion/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'DIVINE LOVE',
    physicalName: 'DJ1',
    shortDescription: 'Divine Love is behind all gentle motherly love, it is powerful, limitless and unconditional.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/DivineLove/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'BLACK DEER',
    physicalName: 'MC5',
    shortDescription: 'Why try to look the same if we were born to stand out? Be brave and be proud to be different.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/BlackDeer/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'PEEKABOO',
    physicalName: 'MC4',
    shortDescription: 'Things don’t disappear just because we stop seeing them.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/Peekaboo/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'OXYGEN',
    physicalName: 'MC3',
    shortDescription: 'One thing we all share is that we all breathe in oxygen.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/Oxygen/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'DESERT ROSE',
    physicalName: 'MC2',
    shortDescription: 'Every one of us has a unique self-identity.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/DesertRose/video.mp4",
    tokenId: 0,
  },
  {
    nftName: 'GO WENT GONE',
    physicalName: 'MC1',
    shortDescription: 'It seems like our global environment is racing, but it is racing towards extinction.',
    physicalPhotos: [
      '',
    ],
    NFTVideoLocation: "nft-data/GoWentGone/video.mp4",
    tokenId: 0,
  },
];

export default collection;
