import {
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  Users
} from "lucide-react";
import {
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact
} from "react-icons/si";
import { TbApi, TbDatabaseSearch } from "react-icons/tb";

export const profile = {
  name: "Kevin Santiago Aristizabal",
  role: "Full Stack Developer",
  intro:
    "Desarrollador Full Stack con 4 años de experiencia creando, manteniendo y optimizando aplicaciones web escalables.",
  about:
    "Trabajo en frontend, backend, bases de datos e integraciones REST con enfoque en soluciones mantenibles, rendimiento y buenas practicas. Me gusta convertir necesidades de negocio en interfaces claras, servicios solidos y experiencias web confiables.",
  location: "Bogota, D.C.",
  email: "jdaristizabal8725@gmail.com",
  phone: "+57 3202678913",
  github: "github.com/JohanArist8725"
};

export const navItems = [
  ["Inicio", "inicio"],
  ["Sobre mi", "sobre-mi"],
  ["Skills", "skills"],
  ["Experiencia", "experiencia"],
  ["Contacto", "contacto"]
];

export const highlights = [
  { value: "4+", label: "anos de experiencia" },
  { value: "3", label: "roles profesionales" },
  { value: "12+", label: "tecnologias clave" }
];

export const interests = [
  {
    icon: Layers3,
    title: "Frontend",
    text:
      "Construyo interfaces responsivas con React, JavaScript, CSS moderno, jQuery y AJAX, cuidando la usabilidad y la experiencia final."
  },
  {
    icon: ServerCog,
    title: "Backend",
    text:
      "Desarrollo modulos, servicios y logica de negocio con PHP, Laravel, Python, Go e integraciones sobre APIs REST."
  },
  {
    icon: Database,
    title: "Datos",
    text:
      "Trabajo con bases SQL, modelado, consultas y optimizacion para que las aplicaciones sean claras, rapidas y sostenibles."
  }
];

export const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "jQuery", icon: SiJquery, color: "#0769ad" },
  { name: "AJAX", icon: TbApi, color: "#22d3ee" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Go", icon: SiGo, color: "#00add8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "SQL", icon: TbDatabaseSearch, color: "#f59e0b" }
];

export const tools = [
  { icon: SiGithub, name: "GitHub" },
  { icon: SiGit, name: "Git" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiPostman, name: "Postman" },
  { icon: TbApi, name: "APIs REST" }
];

export const strengths = [
  "Pensamiento analitico",
  "Resolucion de problemas",
  "Trabajo en equipo",
  "Aprendizaje continuo",
  "Orientacion a resultados"
];

export const experience = [
  {
    company: "Leanware",
    role: "Desarrollador Full Stack Web",
    period: "Ene 2025 - Jul 2026",
    description:
      "Implementacion de soluciones web completas con frontend, backend, bases de datos SQL, integraciones, optimizacion y soporte tecnico.",
    stack: "Frontend + Backend | SQL | Integraciones"
  },
  {
    company: "Grupo Cubo LTDA.",
    role: "Desarrollador Backend",
    period: "Dic 2023 - Dic 2024",
    description:
      "Construccion y mantenimiento de servicios y modulos con PHP, Laravel, Go y Python, integrando APIs, logica de negocio y consultas SQL.",
    stack: "PHP | Laravel | Go | Python | SQL"
  },
  {
    company: "Slabcode",
    role: "Frontend Developer",
    period: "Dic 2022 - Nov 2023",
    description:
      "Desarrollo de interfaces modernas con React, JavaScript, jQuery, AJAX y CSS responsivo, consumo de APIs REST y mejora de experiencia de usuario.",
    stack: "React | JavaScript | jQuery | AJAX | CSS"
  }
];

export const education = [
  "Tecnologo ADSI - SENA | 2020-2022",
  "Diplomado Desarrollo de Software - 200 h",
  "Diplomado Python - 200 h"
];

export const contactCards = [
  { icon: Mail, label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Telefono", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}` },
  { icon: MapPin, label: "Ubicacion", value: profile.location, href: null },
  { icon: Users, label: "GitHub", value: profile.github, href: `https://${profile.github}` }
];

export const projectCards = [
  {
    icon: Rocket,
    title: "Aplicaciones web Full Stack",
    stack: "React | Laravel | SQL | APIs REST",
    text:
      "Soluciones completas para operaciones web: interfaces, servicios, consultas, integraciones y soporte."
  },
  {
    icon: Code2,
    title: "Integraciones y servicios",
    stack: "PHP | Go | Python | REST",
    text:
      "Construccion de modulos backend, automatizacion de procesos e integracion entre plataformas."
  },
  {
    icon: Database,
    title: "Gestion de datos",
    stack: "PostgreSQL | MySQL | SQL",
    text:
      "Modelado, consultas y optimizacion para aplicaciones que necesitan datos consistentes y faciles de consultar."
  }
];
