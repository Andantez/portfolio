import type { Projects } from '../../../data/projects';
import ProjectStack from '../ProjectStack';

// TODO change the html structure
const SingleProject = ({ name, description, stack }: Projects) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      {stack.map((stk) => (
        <ProjectStack key={stk.name} name={stk.name} Icon={stk.icon} />
      ))}
    </div>
  );
};

export default SingleProject;
