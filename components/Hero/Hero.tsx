import { NavLink } from "../ui";
import { hero, heroParagraph, section, name, header } from "./Hero.css";

const Hero = () => {
  return (
    <div className={hero}>
      <section className={section}>
        <h1 className={header}>
          I&apos;m <span className={name}>Kaloyan</span>, Front-End developer
        </h1>
        {/* <div>Hello</div> */}
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
