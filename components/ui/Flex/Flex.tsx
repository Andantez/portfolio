import { FlexVariants, flex } from './Flex.css';

type FlexProps = {
  children: React.ReactNode;
} & FlexVariants;
const Flex = ({ children, ...props }: FlexProps) => {
  return <div className={flex({ ...props })}>{children}</div>;
};

export default Flex;
