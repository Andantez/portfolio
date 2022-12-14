import SingleProject from './SingleProject';
import { projects } from '../../data';
import meowPortal from '../../public/meowPortal.png';
import adrastos from '../../public/adrastos.png';
import tintsAndShades from '../../public/tintsAndShades.png';

const HomepageProjects = () => {
  const [firstProject, secondProject, thirdProject] = projects;
  return (
    <>
      <SingleProject
        name={firstProject.name}
        description={firstProject.description}
        stack={firstProject.stack}
        image={meowPortal}
        panelColor="blue"
      />
      <SingleProject
        name={secondProject.name}
        description={secondProject.description}
        stack={secondProject.stack}
        image={adrastos}
        panelColor="red"
      />
      <SingleProject
        name={thirdProject.name}
        description={thirdProject.description}
        stack={thirdProject.stack}
        image={tintsAndShades}
        panelColor="darkGrey"
      />
    </>
  );
};

export default HomepageProjects;
