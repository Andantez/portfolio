import Link from 'next/link';
import { projectLinksWrapper, projectLink } from './ProjectLinks.css';
type ProjectLinksProps = {
  liveUrl: string; // temporary the type will be string
  sourceUrl: string;
};

// the default value  of live and source is temporary
const ProjectLinks = ({
  liveUrl = '/',
  sourceUrl = '/',
}: ProjectLinksProps) => {
  return (
    <div className={projectLinksWrapper}>
      <Link className={projectLink} href={liveUrl}>
        Visit Live
      </Link>
      <Link className={projectLink} href={sourceUrl}>
        Source Code
      </Link>
    </div>
  );
};

export default ProjectLinks;
