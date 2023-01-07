import { grid } from '../../../lib/styles/Grid.css';
import type { GridVariants } from '../../../lib/styles/Grid.css';
type GridProps = {
  children: React.ReactNode;
} & GridVariants;

// export const GridTest = ({children,...props}: GridTestProps) => {
//   return ( <div className={gridTest({...props})}>{children}</div> );
// }

const Grid = ({ children, ...props }: GridProps) => {
  return <div className={grid({ ...props })}>{children}</div>;
};

export default Grid;
