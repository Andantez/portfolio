import Hero from '../components/Hero';
import { Grid, Heading } from '../components/ui';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SubHero /> */}
      <Grid gap='withoutGap'>
        <Heading
          accentType="number"
          accentText="01."
          headingText="Some things I've build."
          title="Projects"
        />
      </Grid>
    </>
  );
}
