import {
  Blocks,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  TerminalSquare,
  Users
} from "lucide-react";

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
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "jQuery",
  "AJAX",
  "PHP",
  "Laravel",
  "Python",
  "Go",
  "PostgreSQL",
  "MySQL",
  "SQL"
];

export const tools = [
  { icon: GitBranch, name: "GitHub" },
  { icon: TerminalSquare, name: "Git" },
  { icon: Blocks, name: "Docker" },
  { icon: Globe2, name: "Linux" },
  { icon: Code2, name: "Postman" },
  { icon: BrainCircuit, name: "APIs REST" }
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
