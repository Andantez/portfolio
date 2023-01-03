import SingleProject from './SingleProject';
import { projects } from '../../data';

//  html structure is not final to be changed
const HomepageProjects = () => {
  return (
    <div>
      {projects.map((project) => (
        <SingleProject key={project.name} {...project} />
      ))}
    </div>
  );
};

export default HomepageProjects;
