import { NavLink } from '../ui';
import { heroParagraph, section, name, header, title } from './Hero.css';
import { gridContainer } from '../../lib/styles/SharedStyles.css';
const Hero = () => {
  return (
    <div className={gridContainer.withGap}>
      <section className={section}>
        <h1 className={header}>
          I&apos;m <span className={name}>Kaloyan</span>, Front-End developer
        </h1>
        <div className={title}>Hello</div>
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
