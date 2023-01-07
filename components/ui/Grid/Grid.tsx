import { grid } from '../../../lib/styles/Grid.css';
import type { GridVariants } from '../../../lib/styles/Grid.css';
type GridProps = {
  children: React.ReactNode;
} & GridVariants;

const Grid = ({ children, ...props }: GridProps) => {
  return <div className={grid({ ...props })}>{children}</div>;
};

export default Grid;
