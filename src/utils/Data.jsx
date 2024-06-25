import Work1 from '../assets/img/project-1.png';
import Work2 from '../assets/img/project-2.png';
import Work3 from '../assets/img/project-3.png';
import Work4 from '../assets/img/project-4.png';


import Certificate1 from '../assets/img/certificado-digital.jpg';
import Certificate2 from '../assets/img/Certificado_marketing.jpg';
import Certificate3 from '../assets/img/certificado-coder.png';
import Certificate4 from '../assets/img/certificado-js.png';






import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaExternalLinkAlt,  FaLinkedinIn, FaGithub, FaCss3, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript,  } from "react-icons/io5";
import {  } from "react-icons/tb";
import { SiExpress, SiPostman, SiTypescript, SiTailwindcss, SiDbeaver, SiVite  } from "react-icons/si";
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
      title: 'Tailwind Css',
      icon: <SiTailwindcss className='skill__icon'/>
    },
  
    {
      id: 6,
      title: 'React Js',
      icon: <FaReact className='skill__icon'/>
    },
  
    {
      id: 7,
      title: 'Typescript',
      icon: <SiTypescript className='skill__icon'/>
    },
  
    {
      id: 8,
      title: 'Node Js',
      icon: <FaNodeJs className='skill__icon'/>
    },
  
    {
      id: 9,
      title: 'Express',
      icon: <SiExpress className='skill__icon'/>
    },
    
  
    {
      id: 10,
      title: 'My Sql',
      icon: <GrMysql className='skill__icon'/>
    },
  
    {
      id: 11,
      title: 'Dbeaver',
      icon: <SiDbeaver className='skill__icon'/>
    },
  
    {
      id: 12,
      title: 'Postman',
      icon: <SiPostman className='skill__icon'/>
    },
    {
      id: 13,
      title: 'Vite js',
      icon: <SiVite className='skill__icon'/>
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
  },

  {
    id: 4,
    img: Certificate4,
    style: 'image_4'
  }

];

export const networks = [
  {
    id: 1,
    path: 'mailito: sofiaspinelli17@gmail.com',
    title: 'Enviar un correo electrónico a Sofia Spinelli',
    icon: <IoIosMail/>,
  },
  {
    id: 2,
    path: 'tel:+5491165450841',
    title: 'Llamar por teléfono a Sofia Spinelli',
    icon: <FaPhoneVolume/>,
  },
  {
    id: 3,
    path: 'https://www.linkedin.com/in/sofia-spinelli/',
    title: 'Visitar el perfil de Sofia Spinelli en Linkedin',
    icon: <FaLinkedinIn/>,
  },
  {
    id: 4,
    path: 'https://api.whatsapp.com/send?phone=5491165450841',
    title: 'Enviale un whatsapp a Sofia Spinelli',
    icon: <IoLogoWhatsapp/>,
  },
  {
    id: 5,
    path: 'https://github.com/sofiaspinelli',
    title: 'Visitar el perfil de Magali Sofia Spinelli en Github',
    icon: <FaGithub/>,
  },
]

