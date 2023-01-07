import Hero from '../components/Hero';
import HomepageProjects from '../components/HomepageProjects';
import { Grid, Heading } from '../components/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <Grid
        gap="small"
        height="100%"
        padding="smallLeftAndRight"
        columnsMediaBreakpoint={600}
        placeContent="center"
      >
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
