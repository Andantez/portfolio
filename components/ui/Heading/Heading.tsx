import {
  accent,
  pageTitle,
  header,
  section,
} from '../../../lib/styles/SharedStyles.css';

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
      <section className={section}>
        <h1 className={header}>
          <span className={accent}>{accentText}</span> {headingText}
        </h1>
        <div className={pageTitle}>{title}</div>
      </section>
    );
  }
  return (
    <section className={section}>
      <h1 className={header}>
        {headingText}
        <span className={accent}>{accentText}</span>
      </h1>
      <div className={pageTitle}>{title}</div>
    </section>
  );
};

export default Heading;
