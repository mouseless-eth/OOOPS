import {
  AvatarComponent,
} from '@rainbow-me/rainbowkit';

const CustomAvatar: AvatarComponent = ({ address, size }) => {
  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor: 'black',
      }}
    >
    </div>
  );
};

export default CustomAvatar;
