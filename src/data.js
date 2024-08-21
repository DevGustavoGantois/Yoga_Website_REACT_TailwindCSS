// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.png';
import CourseImage2 from '../src/assets/img/courses/course-2.png';
import CourseImage3 from '../src/assets/img/courses/course-3.png';

export const navigation = [
  {
    name: 'Home',
    href: '#Home',
  },
  {
    name: 'Classes',
    href: '#Classes',
  },
  {
    name: 'Características',
    href: '#Caracteristicas',
  },
  {
    name: 'Contato',
    href: '#Contato',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Anos de experiência',
    desc: 'Temos 5 anos de experiência neste campo de yoga. Dando as melhores instruções.',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Clientes satisfeitos',
    desc: 'Temos mais de cinco mil clientes em todo o mundo. Eles estão muito satisfeitos.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Treinadores experientes',
    desc: 'Temos mais de quinze treinadores dedicados e experientes em ioga e meditação.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Aulas Mensais',
    desc: 'Yoga é uma disciplina de prática física, mental e espiritual. Oferecemos mais de 24 aulas mensalmente.',
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: 'Treinamento e imersão em Yoga Resortivo',
    desc: 'Aqui estão algumas dicas para novos candidatos a emprego que desejam conseguir o emprego dos sonhos e brilhar na carreira.',
    link: 'Começar',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'Treinamento e imersão em Yoga Resortivo',
    desc: 'Aqui estão algumas dicas para novos candidatos a emprego que desejam conseguir o emprego dos sonhos e brilhar na carreira.',
    link: 'Começar',
    delay: '800',
  },
  {
    image: CourseImage3,
    title: 'Treinamento e imersão em Yoga Resortivo',
    desc: 'Aqui estão algumas dicas para novos candidatos a emprego que desejam conseguir o emprego dos sonhos e brilhar na carreira.',
    link: 'Começar',
    delay: '900',
  },
];

export const pricing = [
  {
    title: 'Aula individual de ioga',
    price: '25R$.',
    list: [
      {
        icon: BsCheck,
        name: 'Pague conforme usar',
      },
      {
        icon: BsCheck,
        name: 'Perfeito para não residentes',
      },
      {
        icon: BsCheck,
        name: 'Acesso a todas as aulas',
      },
    ],
    buttonText: 'Reserve agora',
    buttonIcon: BsChevronRight,
    delay: '600',
  },
  {
    title: 'Aula individual de ioga',
    price: '60R$.',
    list: [
      {
        icon: BsCheck,
        name: 'Pague conforme usar',
      },
      {
        icon: BsCheck,
        name: 'Perfeito para não residentes',
      },
      {
        icon: BsCheck,
        name: 'Acesso a todas as aulas',
      },
      {
        icon: BsCheck,
        name: 'Acesso a todos os mentores',
      },
    ],
    buttonText: 'Reserve agora',
    buttonIcon: BsChevronRight,
    delay: '800',
  },
  {
    title: 'Aula individual de ioga',
    price: '150R$.',
    list: [
      {
        icon: BsCheck,
        name: 'Pague conforme usar',
      },
      {
        icon: BsCheck,
        name: 'Perfeito para não residentes',
      },
      {
        icon: BsCheck,
        name: 'Acesso a todas as aulas',
      },
      {
        icon: BsCheck,
        name: 'Acesso a todos os mentores',
      },
    ],
    buttonText: 'Reserve agora',
    buttonIcon: BsChevronRight,
    delay: '900',
  },
];
