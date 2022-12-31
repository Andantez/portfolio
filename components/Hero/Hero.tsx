import { NavLink } from '../ui';
import { heroParagraph } from './Hero.css';
import {
  gridContainer,
  pageTitle,
  accent,
  header,
  section,
} from '../../lib/styles/SharedStyles.css';
const Hero = () => {
  return (
    <div className={gridContainer.withGap}>
      <section className={section}>
        <h1 className={header}>
          I&apos;m <span className={accent}>Kaloyan</span>, Front-End developer
        </h1>
        <div className={pageTitle}>Hello</div>
      </section>
      <p className={heroParagraph}>
        Coder, Conceptual thinker with passion for UI effects and animations who
        loves to build creative things
      </p>
      <NavLink label="View Projects" href="/projects" textSize="md" />
    </div>
  );
};

export default Hero;
