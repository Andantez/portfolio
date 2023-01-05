import { stackWrapper } from './ProjectStack.css';

type ProjectStackProps = {
  name: string;
  Icon: null | React.ComponentType;
};
const ProjectStack = ({ name, Icon }: ProjectStackProps) => {
  return (
    <div className={stackWrapper}>
      {Icon && <Icon />}
      <p>{name}</p>
    </div>
  );
};

export default ProjectStack;
