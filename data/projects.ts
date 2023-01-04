import {
  ReactJS,
  NextJS,
  Framer,
  Devise,
  MongoDB,
  NextAuth,
  PostgreSQL,
  Rails,
  Ruby,
  SWR,
  Sass,
  StyledComponents,
} from '../components/icons';

type Stack = {
  name: string;
  icon: null | (() => JSX.Element);
};
export type Projects = {
  name: string;
  description: string;
  stack: Stack[];
};
const projects: Projects[] = [
  {
    name: 'Meow Portal',
    description:
      'This app gives you extensive information regarding cat breeds and their characteristics to help you choose the right breed for your lifestyle.  You can compare cat breeds based on their characteristics and learn some interesting facts on the way. If you register you can also view the gallery which allows you to browse  and save your favourite pictures for future reference.',
    stack: [
      { name: 'React', icon: ReactJS },
      { name: 'Next.js', icon: NextJS },
      { name: 'NextAuth.js', icon: NextAuth },
      { name: 'SWR', icon: SWR },
      { name: 'MongoDB', icon: MongoDB },
      { name: 'Framer Motion', icon: Framer },
      { name: 'Styled Components', icon: StyledComponents },
    ],
  },
  {
    name: 'Adrastos',
    description: `An online social platform for gamers where people can go to to 
      share their experience or ask for advice. This project was made with my fellow team members as a final project of Le-Wagon boot camp.`,
    stack: [
      { name: 'Ruby', icon: Ruby },
      { name: 'Ruby on Rails', icon: Rails },
      { name: 'PostgreSQL', icon: PostgreSQL },
      { name: 'Devise', icon: Devise },
      { name: 'Sass', icon: Sass },
    ],
  },
  {
    name: 'Tints and Shades',
    description:
      'A tool for your creative projects that helps you generate tints and shades of given colour.',
    stack: [
      { name: 'React', icon: ReactJS },
      { name: 'Styled Components', icon: StyledComponents },
      { name: 'Value.js', icon: null },
    ],
  },
];

export default projects;
