import Hero from '../components/Hero';
import HomepageProjects from '../components/HomepageProjects';
import { Grid, Heading } from '../components/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <Grid gap="withGap" mediaBreakpoint="atLargeSizeScreen">
        <Heading
          accentType="number"
          accentText="01."
          headingText="Some things I've build."
          title="Projects"
        />
        {/* TODO add paragraph here  */}
      </Grid>
      <HomepageProjects />
    </>
  );
}
