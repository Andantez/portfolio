import Image from 'next/image';
import { IconImgProps } from '../../lib/types/icon';
const NextAuth = ({ width = 35, height = 35 }: IconImgProps): JSX.Element => {
  return (
    <Image
      src="/nextAuthLogo.png"
      alt="Next Auth Logo"
      width={width}
      height={height}
    />
  );
};

export default NextAuth;
