// import type { Projects } from '../../../data/projects';
import { ProjectStack, Grid, ProjectLinks } from '../../ui';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import {
  projectInfo,
  projectName,
  projectDescription,
  projectStack,
  projectImgWrapper,
} from './SingleProject.css';
import type { Stack } from '../../../data/projects';

type ProjectProps = {
  name: string;
  description: string;
  stack: Stack;
  image: StaticImageData;
};
const SingleProject = ({
  name,
  description,
  stack,
  image,
}: ProjectProps): JSX.Element => {
  return (
    <Grid gap="withGap" mediaBreakpoint="atLargeSizeScreen">
      <article className={projectInfo}>
        <h2 className={projectName}>{name}</h2>
        <p className={projectDescription}>{description}</p>
        <div className={projectStack}>
          {stack.map((stk) => (
            <ProjectStack key={stk.name} name={stk.name} Icon={stk.icon} />
          ))}
        </div>
        <ProjectLinks liveUrl="/" sourceUrl="/" />
      </article>
      <div className={projectImgWrapper}>
        <Image src={image} alt={name} priority style={{ height: 'auto' }} />
      </div>
    </Grid>
  );
};

export default SingleProject;
