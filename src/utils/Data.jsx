import Work1 from '../assets/img/project-1.png';
import Work2 from '../assets/img/project-2.png';
import Work3 from '../assets/img/project-3.png';
import Work4 from '../assets/img/project-4.png';
import Work5 from '../assets/img/project-5.png';

import Certificate1 from '../assets/img/certificado_digitalhouse.png';
import Certificate2 from '../assets/img/Certificado_marketing.jpg';
import Certificate3 from '../assets/img/certificado-coder.png';


/* import Theme1 from '../assets/theme/purple.png';
import Theme2 from '../assets/theme/red.png';
import Theme3 from '../assets/theme/blueviolet.png';
import Theme4 from '../assets/theme/blue.png';
import Theme5 from '../assets/theme/goldenrod.png';
import Theme6 from '../assets/theme/magenta.png';
import Theme7 from '../assets/theme/yellowgreen.png';
import Theme8 from '../assets/theme/orange.png';
import Theme9 from '../assets/theme/green.png';
import Theme10 from '../assets/theme/yellow.png'; */


import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaExternalLinkAlt,  FaLinkedinIn, FaGithub, FaCss3, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiExpress, SiPostman, SiAstro, SiHandlebarsdotjs, SiTypescript, SiTailwindcss  } from "react-icons/si";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";

import { GrMysql } from "react-icons/gr";


export const links = [
  {
    id: 1,
    name: 'Sobre mi',
    section: 'about',
  },
  {
    id: 2,
    name: 'Proyectos',
    section: 'projects'
  },
  {
    id: 3,
    name: 'Skills',
    section: 'skills'
  },
  {
    id: 4,
    name: 'Certificaciones',
    section: 'certificate'
  },
  {
    id: 5,
    name: 'Contacto',
    section: 'contact'
  }
]

export const projects = [
  {
      id: 1,
      img: Work1,
      title: 'Formar Web',
      skills: [
        {type: <FaHtml5 /> },
        {type: <FaCss3Alt/> },
        {type: <FaReact/> },
        {type: <SiTypescript/> },
        {type: <IoLogoJavascript/> },
        
        
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://github.com/FormarImpactDevs/client-fundacion-formar-web.git'
        },
        {
          id: 2,
          icon: <FaExternalLinkAlt/>,
          path: 'http://fundacionformar.ar/'
        }
      ],
  
  
  },
  {
      id: 2,
      img: Work2,
      title: 'Quality Travel',
      skills: [
        {type:<FaHtml5 />},
        {type: <SiTailwindcss />},
        {type: <IoLogoJavascript />},
        {type: <SiTypescript/> },
        {type: <FaNodeJs />},
        {type: <GrMysql/>}
        
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://github.com/formar-it/quality-travel.git'
        }
      ],
    },
  {
      id: 3,
      img: Work3,
      title: 'Gypsy Store',
      skills: [
        {type:<FaHtml5 />},
        {type: <FaCss3Alt/> },
        {type: <IoLogoJavascript />},
        {type: <FaSass />},
        {type: <FaBootstrap />}
        
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://github.com/Sofiaspinelli/gypsystore.git'
        },
        {
          id: 2,
          icon: <FaExternalLinkAlt/>,
          path: 'https://sofiaspinelli.github.io/gypsystore/'

        }
      ],
  },
   {
    id: 4,
    img: Work4,
    title: 'Utriper',

    skills: [
      {type:<FaHtml5 />},
        {type: <SiTailwindcss />},
        {type: <IoLogoJavascript />},
        {type: <SiTypescript/> },
        {type: <TbBrandVite /> },
      
    ],
    links: [
      {
        id: 1,
        icon: <FaGithub />,
        path: 'https://github.com/Global-Triper/com.utriper.landing.git'
      },
      {
        id: 2,
        icon: <FaExternalLinkAlt/>,
        path: 'https://utriper.com/operators'
      }
    ],
},
{
  id: 5,
  img: Work5,
  title: 'Beer Bar',

  skills: [
    {type:<IoLogoJavascript />},
    {type:<FaHtml5 />},
    {type: <FaCss3Alt/> },
    {type: <FaNodeJs />},
    {type: <SiExpress />},
    {type: <GrMysql/>}
    
  ],
  links: [
    {
      id: 1,
      icon: <FaGithub />,
      path: 'https://github.com/Sofiaspinelli/Beerbar-Grupo-6.git'
    },
    {
      id: 2,
      icon: <FaExternalLinkAlt/>,
      path: ''
    }
  ],
},
  
]

export const skills = [
  {
    id: 1,
    title: 'Html',
    icon: <FaHtml5 className='skill__icon'/>,
  },
  
  {
      id: 2,
      title: 'Css',
      icon: <FaCss3Alt className='skill__icon'/>
  },
  
    {
      id: 3,
      title: 'Sass',
      icon: <FaSass className='skill__icon'/>
    },
  
    {
      id: 4,
      title: 'JavaScript',
      icon: <IoLogoJavascript className='skill__icon'/>
    },
  
    {
      id: 5,
      title: 'React Js',
      icon: <FaReact className='skill__icon'/>
    },
  
    {
      id: 6,
      title: 'React Native',
      icon: <TbBrandReactNative className='skill__icon'/>
    },
  
    {
      id: 7,
      title: 'Node Js',
      icon: <FaNodeJs className='skill__icon'/>
    },
  
    {
      id: 8,
      title: 'Express',
      icon: <SiExpress className='skill__icon'/>
    },
    {
      id: 9,
      title: 'Handlebars',
      icon: <SiHandlebarsdotjs className='skill__icon'/>
    },
  
    {
      id: 10,
      title: 'Mongo DB',
      icon: <SiMongodb className='skill__icon'/>
    },
  
    {
      id: 11,
      title: 'Firebase',
      icon: <IoLogoFirebase className='skill__icon'/>
    },
  
    {
      id: 12,
      title: 'Postman',
      icon: <SiPostman className='skill__icon'/>
    },
  
  
]

export const certificates = [
  {
    id: 1,
    img: Certificate1,
    style: 'image_1'
  },

  {
    id: 2,
    img: Certificate2,
    style: 'image_2'
  },

  {
    id: 3,
    img: Certificate3,
    style: 'image_3'
  }

];

export const networks = [
  {
    id: 1,
    path: 'mailto:sofiaspinelli17@gmail.com',
    title: 'Enviar un correo electrónico a Magali Sofia Spinelli',
    icon: <IoIosMail/>,
  },
  {
    id: 2,
    path: 'tel:+5491165450841',
    title: 'Llamar por teléfono a Magali Sofia Spinelli',
    icon: <FaPhoneVolume/>,
  },
  {
    id: 3,
    path: 'https://www.linkedin.com/in/sofiaspinelli',
    title: 'Visitar el perfil de Magali Sofia Spinelli en Linkedin',
    icon: <FaLinkedinIn/>,
  },
  {
    id: 4,
    path: 'https://api.whatsapp.com/send?phone=5491165450841',
    title: 'Enviale un whatsapp a Magali Sofia Spinelli',
    icon: <IoLogoWhatsapp/>,
  },
  {
    id: 5,
    path: 'https://github.com/sofiaspinelli',
    title: 'Visitar el perfil de Magali Sofia Spinelli en Github',
    icon: <FaGithub/>,
  },
]
/* 
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
 */
