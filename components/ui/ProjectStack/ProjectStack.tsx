import { IconImgProps, IconSvgProps } from '../../../lib/types/icon';
import { stackWrapper } from './ProjectStack.css';

type ProjectStackProps = {
  name: string;
  Icon:
    | null
    | React.ElementType<IconSvgProps>
    | React.ElementType<IconImgProps>;
};
const ProjectStack = ({ name, Icon }: ProjectStackProps): JSX.Element => {
  return (
    <div className={stackWrapper}>
      {Icon && <Icon width={150} height={150} />}
      <p>{name}</p>
    </div>
  );
};

export default ProjectStack;
