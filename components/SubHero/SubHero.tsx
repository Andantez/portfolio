import { Heading } from '../ui';
import { gridContainer } from '../../lib/styles/SharedStyles.css';

const SubHero = () => {
  return (
    <div className={gridContainer.withoutGap}>
      <Heading
        accentType="number"
        accentText="01."
        headingText="Some things I've build."
        title="Projects"
      />
    </div>
  );
};

export default SubHero;
