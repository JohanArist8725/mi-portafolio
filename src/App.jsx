import profilePhoto from "./assets/kevin-profile-cutout.png";
import {
  contactCards,
  education,
  experience,
  highlights,
  interests,
  navItems,
  profile,
  projectCards,
  skills,
  strengths,
  tools
} from "./portfolioData";
import { ArrowUpRight, Download, Send } from "lucide-react";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span>KS</span>
      </a>
      <nav className="main-nav" aria-label="Navegacion principal">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow">Hola, soy</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p>{profile.intro}</p>
        <div className="hero-actions">
          <a className="button primary" href="#contacto">
            <Send size={18} aria-hidden="true" />
            Contactame
          </a>
          <a className="button ghost" href="#experiencia">
            <ArrowUpRight size={18} aria-hidden="true" />
            Ver experiencia
          </a>
        </div>
      </div>

      <div className="hero-portrait reveal delay-1" aria-label="Foto de Kevin Santiago Aristizabal">
        <img src={profilePhoto} alt="Kevin Santiago Aristizabal" />
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="section">
      <SectionHeading kicker="Intereses" title="Lo que construyo" />
      <div className="feature-grid">
        {interests.map(({ icon: Icon, title, text }) => (
          <article className="feature-card motion-card" key={title}>
            <Icon size={30} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="sobre-mi">
      <SectionHeading kicker="Quien soy" title="Sobre mi" text="Mi perfil en pocas lineas" />
      <div className="about-layout">
        <div className="about-image motion-card">
          <img src={profilePhoto} alt="Retrato profesional de Kevin" />
        </div>
        <div className="about-copy">
          <p>{profile.about}</p>
          <div className="stats">
            {highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="pill-list" aria-label="Fortalezas">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        kicker="Que manejo"
        title="Skills"
        text="Tecnologias que forman parte de mi stack actual"
      />
      <div className="skills-grid">
        {skills.map(({ icon: Icon, name, color }) => (
          <span className="skill-chip motion-card" key={name} style={{ "--skill-color": color }}>
            <Icon size={30} aria-hidden="true" />
            {name}
          </span>
        ))}
      </div>

      <SectionHeading kicker="Herramientas" title="Tools" text="Recursos que uso para trabajar mejor" />
      <div className="tools-grid">
        {tools.map(({ icon: Icon, name }) => (
          <div className="tool-item motion-card" key={name}>
            <Icon size={26} aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section">
      <SectionHeading kicker="Que he hecho" title="Proyectos" />
      <div className="project-grid">
        {projectCards.map(({ icon: Icon, title, stack, text }) => (
          <article className="project-card motion-card" key={title}>
            <div className="project-icon">
              <Icon size={28} aria-hidden="true" />
            </div>
            <a href="#contacto">
              {title}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <small>{stack}</small>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <SectionHeading kicker="Trayectoria" title="Experiencia profesional" />
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.company}>
            <div>
              <p>{job.period}</p>
              <h3>{job.company}</h3>
              <strong>{job.role}</strong>
            </div>
            <div>
              <span>{job.stack}</span>
              <p>{job.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education">
      <SectionHeading kicker="Formacion" title="Estudios" />
      <div className="education-list">
        {education.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <SectionHeading kicker="Trabajemos" title="Contacto" text="Disponible para construir soluciones web utiles y bien hechas." />
      <div className="contact-layout">
        <div className="contact-list">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <Icon size={24} aria-hidden="true" />
                <span>
                  <small>{label}</small>
                  {value}
                </span>
              </>
            );

            return href ? (
              <a className="contact-card" href={href} key={label} target={label === "GitHub" ? "_blank" : undefined} rel={label === "GitHub" ? "noreferrer" : undefined}>
                {content}
              </a>
            ) : (
              <div className="contact-card" key={label}>
                {content}
              </div>
            );
          })}
        </div>

        <form className="contact-form" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label>
            Nombre
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Asunto
            <textarea name="message" rows="5" required />
          </label>
          <button className="button primary" type="submit">
            <Send size={18} aria-hidden="true" />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Interests />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>Hecho con React, Vite y buenas practicas por {profile.name}.</p>
        <a href="#inicio" aria-label="Volver al inicio">
          <Download size={18} aria-hidden="true" />
          Inicio
        </a>
      </footer>
    </>
  );
}

export default App;
