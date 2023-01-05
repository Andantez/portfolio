import Image from 'next/image';
import { IconImgProps } from '../../lib/types/icon';
const Devise = ({ width = 35, height = 35 }: IconImgProps): JSX.Element => {
  return (
    <Image src="/devise.png" alt="devise logo" width={width} height={height} />
  );
};

export default Devise;
