import { gridContainer } from '../../../lib/styles/SharedStyles.css';

type GridTypes = {
  children: React.ReactNode;
  gap: keyof typeof gridContainer;
};
const Grid = ({ children, gap }: GridTypes) => {
  return <div className={gridContainer[gap]}>{children}</div>;
};

export default Grid;
