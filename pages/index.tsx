import Hero from '../components/Hero';
import { Heading } from '../components/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Heading
          accentText="01."
          accentType="dot"
          headingText="Some things I've build."
          title="Projects"
        />
      </div>
    </>
  );
}
