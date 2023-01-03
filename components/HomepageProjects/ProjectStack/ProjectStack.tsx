type ProjectStackProps = {
  name: string;
  Icon: null | (() => JSX.Element);
};
const ProjectStack = ({ name, Icon }: ProjectStackProps) => {
  console.log(name);
  return (
    <div>
      <p>{name}</p>
      {Icon && <Icon />}
    </div>
  );
};

export default ProjectStack;
