type Title = 'Projects' | 'About' | 'Contact';
type AccentText = '.' | '01.' | '02.' | '03.';
type HeadingProps = {
  accentType: 'dot' | 'number';
  accentText: AccentText;
  headingText: string;
  title: Title;
};
const Heading = ({
  accentType,
  accentText,
  headingText,
  title,
}: HeadingProps) => {
  if (accentType === 'number') {
    return (
      <section>
        <h1>
          <span>{accentText}</span> {headingText}
        </h1>
        <div>{title}</div>
      </section>
    );
  }
  return (
    <section>
      <h1>
        {headingText}
        <span>{accentText}</span>
      </h1>
      <div>{title}</div>
    </section>
  );
};

export default Heading;
