interface HeadingProps {
  mainHeading: string;
  title: string;
}
const Heading = ({ mainHeading, title }: HeadingProps) => {
  return (
    <div>
      <div>{title}</div>
      <h1>{mainHeading}</h1>
    </div>
  );
};

export default Heading;
