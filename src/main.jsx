import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Personal Library System', type: 'Web application', description: 'A simple library manager to organize books, track availability, and manage member records.', tags: ['PHP', 'MySQL', 'CRUD'], tone: 'mint', link: 'https://github.com/' },
  { number: '02', title: 'Perfume Storefront', type: 'E-commerce concept', description: 'A clean product browsing experience for a modern, unisex fragrance brand.', tags: ['React', 'CSS', 'Responsive'], tone: 'lilac', link: 'https://github.com/' },
  { number: '03', title: 'Developer Dashboard', type: 'UI / dashboard', description: 'A focused dashboard concept for viewing project progress, tasks, and useful metrics.', tags: ['React', 'UI Design', 'JavaScript'], tone: 'peach', link: 'https://github.com/' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <hHeader className="site-header">
      <a className="profile" href="#home" onClick={closeMenu}>
        <img
    src="/my-photo.jpg"
    alt="My profile"
    className="profile-photo"/><span>MY PORTFOLIO</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </hHeader>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I'M MYO KYAW THU</p>
          <h1>Building digital<br />experiences <span>that matter.</span></h1>
          <p className="hero-text">I'm an aspiring web developer who enjoys turning ideas into clean, useful, and thoughtful digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Get in touch <ArrowDownRight size={17} /></a></div>
          <div className="hero-meta"><div><strong>03+</strong><span>Practice projects</span></div><div><strong>Always</strong><span>Learning & improving</span></div></div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract portfolio artwork">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><span className="core-symbol">&lt;/&gt;</span><span className="core-label">IDEAS → IMPACT</span></div>
          <div className="float-card code-card"><span className="card-dot" /><span className="card-dot" /><span className="card-dot" /><div className="code-lines"><i /><i /><i /><i /><i /></div><b>clean code, curious mind.</b></div>
          <div className="float-card sparkle-card"><Sparkles size={18} /><span>Made with<br /><b>curiosity</b></span></div>
          <span className="art-caption">DESIGN · DEVELOP · ITERATE</span>
        </div>
        <a className="scroll-hint" href="#about"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2>Curious by nature.<br /><span>Developer by choice.</span></h2></div>
        <div className="about-content"><p className="large-copy">I enjoy learning how websites work, solving problems, and building projects that make everyday tasks a little easier.</p><p>I'm currently growing my skills in front-end development and web technologies. I value clear communication, thoughtful design, and learning something new with every project.</p><a className="inline-link" href="#contact">A little more about me <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-heading"><p className="eyebrow">02 / WHAT I DO</p><h2>Tools I use to<br /><span>bring ideas to life.</span></h2></div>
        <div className="skill-grid">
          <article className="skill-card"><div className="skill-icon"><Code2 /></div><p className="skill-number">01</p><h3>Web development</h3><p>Building responsive interfaces and learning the fundamentals of reliable web applications.</p><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span></div></article>
          <article className="skill-card"><div className="skill-icon"><Layers3 /></div><p className="skill-number">02</p><h3>Backend basics</h3><p>Working with server-side logic, forms, databases, and core application features.</p><div className="tags"><span>PHP</span><span>MySQL</span><span>CRUD</span></div></article>
          <article className="skill-card"><div className="skill-icon"><Sparkles /></div><p className="skill-number">03</p><h3>UI & problem solving</h3><p>Keeping layouts clear, experiences intuitive, and solutions practical for real users.</p><div className="tags"><span>Responsive UI</span><span>Figma basics</span><span>Git</span></div></article>
        </div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="projects-top"><div className="section-heading"><p className="eyebrow">03 / SELECTED WORK</p><h2>Small steps.<br /><span>Real progress.</span></h2></div><p className="projects-intro">A few practice projects that show what I'm learning. Replace these examples with your own live demos and repositories.</p></div>
        <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}>
          <div className={`project-visual ${project.tone}`}><span className="project-big-number">{project.number}</span><div className="mock-window"><div className="mock-top"><i /><i /><i /></div><div className="mock-body"><div className="mock-sidebar" /><div className="mock-content"><b /><b /><div className="mock-blocks"><i /><i /><i /></div></div></div></div><span className="visual-caption">SELECTED PROJECT</span></div>
          <div className="project-info"><div className="project-type">{project.type} <span>↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div>
        </article>)}</div>
      </section>

      <section className="contact section-wrap" id="contact"><div className="contact-panel"><div><p className="eyebrow">04 / CONTACT</p><h2>Have a project<br />in <span>mind?</span></h2><p className="contact-copy">I'm open to internships, collaboration, and opportunities to learn with a team. Let's connect.</p></div><a className="contact-email" href="mailto:myokyawthu182001@gmail.com">myokyawthu182001@gmail.com <ArrowUpRight /></a><div className="contact-decoration">LET'S<br />BUILD.</div></div></section>
    </main>

    <footer className="footer section-wrap"><a className="logo" href="#home"><span className="logo-mark">M.</span><span>MY PORTFOLIO</span></a><span>Designed with curiosity · Built with React</span><div className="socials"><a href="https://github.com/" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a></div><span className="copyright">© 2026</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
