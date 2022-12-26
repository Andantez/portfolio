interface HeadingProps {
  mainHeading: string;
  title: string;
}
const Heading = ({ mainHeading, title }: HeadingProps) => {
  return (
    <section>
      <h1>{mainHeading}</h1>
      {/* <div>{title}</div> */}
    </section>
  );
};

export default Heading;
