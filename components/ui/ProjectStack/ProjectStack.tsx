type ProjectStackProps = {
  name: string;
  Icon: null | React.ComponentType;
};
const ProjectStack = ({ name, Icon }: ProjectStackProps) => {
  console.log(name);
  return (
    <div>
      {Icon && <Icon />}
      <p>{name}</p>
    </div>
  );
};

export default ProjectStack;
