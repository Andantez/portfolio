// import type { Projects } from '../../../data/projects';
import { ProjectStack, ProjectLinks, Flex } from '../../ui';
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
    <Flex
      height="100%"
      alignItems="center"
      flexDirection="columnReverse"
      gap="small"
      directionMediaBreakpoint="rowAt1024"
      paddingMediaBreakpoint="padding2At1024"
    >
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
    </Flex>
  );
};

export default SingleProject;
