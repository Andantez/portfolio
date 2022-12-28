import { Button, Heading } from '../ui';

const heading = "I'm Kaloyan, Front-End developer";

const Hero = () => {
  return (
    <div>
      <Heading mainHeading={heading} title="Hello" />
      <p>
        Coder, Conceptual thinker with passion for UI effects and animations who
        loves to build creative things
      </p>
      <Button label="My Work" />
    </div>
  );
};

export default Hero;
