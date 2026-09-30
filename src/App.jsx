import profilePicture from './Professional Pic.jpeg';

const projects = [
  {
    title: 'Modern UI Dashboard',
    description: 'A responsive React dashboard with charts, cards, and clean user interactions.',
    url: '#projects',
  },
  {
    title: 'E-commerce Landing Page',
    description: 'A polished product showcase with animations and easy navigation.',
    url: '#projects',
  },
  {
    title: 'Personal Blog Template',
    description: 'A content-focused template optimized for readability and speed.',
    url: '#projects',
  },
];

const education = [
  {
    degree: 'Diploma in Information & Communication Technology (NQF Level 6)',
    school: 'Walter Sisulu University',
    year: '2020 - 2023',
    description: 'Design, develop, implement, configure, deploy and debug systems and applications.',
  },
  {
    degree: 'Occupational Certificate: Systems Development (NQF Level 5)',
    school: 'MICT SETA',
    year: '2025',
    description: 'Focus on systems design and development, including application development and technical implementation.',
  },
  {
    degree: 'National Senior Certificate (Grade 12)',
    school: 'Manzana High School',
    year: '2019',
    description: 'Bachelor pass',
  },
];

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML & CSS',
  'Responsive Design',
  'Vite',
  'Git',
  'UI/UX',
];

const experience = [
  {
    role: 'Lead Facilitator',
    company: 'Lindamahle Innovation Center',
    period: '2024 - 2025',
    description: `Led and mentored students in Systems Development and Software Engineering projects, guiding them through the full software development lifecycle including system analysis, design, coding, testing, and deployment. Supervised the development of a School Inventory Management System and a Bed & Breakfast (BnB) website while providing technical support, project guidance, and practical training in programming, web development, and database concepts.`,
  },
  {
    role: 'Junior Sales & Technical Manager',
    company: 'Madiri Business Enterprise (Pty) Ltd',
    period: '2025 - Present',
    description: `Supported both sales and technical operations by managing RFQs (Requests for Quotations), coordinating client requirements, and contributing to systems and software development initiatives. Assisted in delivering technical solutions, preparing quotations and proposals, providing client support, and bridging business needs with technical implementation to ensure efficient service delivery and project execution. Managed RFQs and technical enquiries, reviewing specifications and translating requirements into suitable configurations. Worked across ICT solution areas including end-user computing, software licensing, cybersecurity, backup/data protection, cloud, and enterprise technology.`,
  },
];

const certifications = [
  {
    title: 'Microsoft Certified Fabric Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2025',
  },
  {
    title: 'Microsoft Certified Azure Data Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2024',
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco',
    year: '2024',
  },
];

const socialMedia = [
  { platform: 'GitHub', url: 'https://github.com/sibabalwe-rayi-anthony', icon: '🔗' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sibabalwe-rayi-anthony', icon: '💼' },
  { platform: 'Instagram', url: 'https://instagram.com/sibabalwe.rayi', icon: '📸' },
  { platform: 'Email', url: 'mailto:sibaanthony1@gmail.com', icon: '✉️' },
];

const styles = `
  :root {
    font-family: Inter, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #e5eefb;
    background: #081120;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background:
      radial-gradient(circle at top, rgba(59, 130, 246, 0.2), transparent 30%),
      linear-gradient(180deg, #081120 0%, #0d1728 100%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .page-shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 32px 20px 64px;
  }

  .hero-section {
    padding: 32px 0 28px;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 28px;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 24px;
    box-shadow: 0 24px 80px rgba(15, 23, 42, 0.35);
    padding: 36px;
  }

  .eyebrow {
    margin: 0 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.72rem;
    font-weight: 700;
    color: #7dd3fc;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    line-height: 1.05;
  }

  .hero-description {
    max-width: 620px;
    margin: 18px 0 0;
    font-size: 1.08rem;
    color: #cbd5e1;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 20px;
    border-radius: 999px;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .button:hover,
  .social-link:hover,
  .project-link:hover {
    transform: translateY(-1px);
  }

  .button.primary {
    background: linear-gradient(135deg, #38bdf8, #2563eb);
    color: white;
    box-shadow: 0 16px 30px rgba(37, 99, 235, 0.35);
  }

  .button.secondary {
    border: 1px solid rgba(148, 163, 184, 0.4);
    color: #e2e8f0;
    background: rgba(15, 23, 42, 0.25);
  }

  .hero-image-container {
    display: flex;
    justify-content: center;
  }

  .hero-image {
    width: min(360px, 100%);
    aspect-ratio: 1;
    border-radius: 28px;
    object-fit: cover;
    box-shadow: 0 20px 45px rgba(14, 165, 233, 0.2);
    border: 4px solid rgba(125, 211, 252, 0.25);
  }

  main {
    display: grid;
    gap: 24px;
  }

  .section-card {
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.2);
  }

  .section-card h2 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: clamp(1.7rem, 3vw, 2.2rem);
  }

  .section-card p {
    margin: 0;
    color: #cbd5e1;
  }

  .section-header {
    margin-bottom: 18px;
  }

  .section-header p {
    margin-top: 4px;
  }

  .skills-grid,
  .project-grid,
  .education-grid,
  .experience-grid,
  .certifications-grid,
  .social-grid {
    display: grid;
    gap: 18px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .skills-grid span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: 12px 16px;
    border-radius: 14px;
    background: rgba(59, 130, 246, 0.12);
    border: 1px solid rgba(125, 211, 252, 0.22);
    color: #e0f2fe;
    font-weight: 600;
  }

  .project-grid,
  .education-grid,
  .experience-grid,
  .certifications-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .project-card,
  .education-card,
  .experience-card,
  .certification-card {
    padding: 20px;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.18);
  }

  .project-card h3,
  .education-card h3,
  .experience-card h3,
  .certification-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .project-link {
    display: inline-block;
    margin-top: 16px;
    color: #7dd3fc;
    font-weight: 700;
  }

  .education-school,
  .experience-company,
  .certification-issuer {
    font-weight: 700;
    color: #dbeafe;
    margin-bottom: 8px;
  }

  .education-year,
  .experience-period,
  .certification-year {
    margin-bottom: 8px;
    font-size: 0.92rem;
    color: #7dd3fc;
  }

  .social-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    min-height: 62px;
    padding: 12px 16px;
    border-radius: 14px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.18);
    color: #e2e8f0;
    font-weight: 600;
  }

  .social-icon {
    font-size: 1.2rem;
  }

  .contact-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer {
    padding: 28px 0 0;
    text-align: center;
    color: #a5b4cf;
  }

  @media (max-width: 768px) {
    .hero-content,
    .contact-section {
      grid-template-columns: 1fr;
      display: grid;
    }

    .page-shell {
      padding-left: 14px;
      padding-right: 14px;
    }

    .section-card {
      padding: 20px 18px;
    }
  }
`;

function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="page-shell">
        <header className="hero-section">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Full-Stack Developer</p>
              <h1>Hi, I'm Sibabalwe Rayi.</h1>
              <p className="hero-description">
                I build clean, modern web experiences with React, JavaScript, and thoughtful design.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Work with me
                </a>
                <a className="button secondary" href="#projects">
                  View projects
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <img src={profilePicture} alt="Sibabalwe Rayi" className="hero-image" />
            </div>
          </div>
        </header>

        <main>
          <section id="about" className="section-card">
            <h2>About Me</h2>
            <p>
              I’m a full-stack developer passionate about building accessible, high-performance websites
              and apps. I enjoy turning ideas into polished digital products using React, CSS, and modern
              tooling.
            </p>
          </section>

          <section id="skills" className="section-card">
            <div className="section-header">
              <h2>Skills</h2>
              <p>Technical strengths I use every day to build fast and usable experiences.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section id="projects" className="section-card">
            <div className="section-header">
              <h2>Projects</h2>
              <p>Selected work that demonstrates my design and development capabilities.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="project-link" href={project.url}>
                    View details
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="section-card">
            <div className="section-header">
              <h2>Education</h2>
              <p>My academic background and professional certifications.</p>
            </div>
            <div className="education-grid">
              {education.map((edu) => (
                <article key={edu.degree} className="education-card">
                  <h3>{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-year">{edu.year}</p>
                  <p className="education-description">{edu.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="section-card">
            <div className="section-header">
              <h2>Experience</h2>
              <p>Professional roles where I’ve built and shipped web solutions.</p>
            </div>
            <div className="experience-grid">
              {experience.map((item) => (
                <article key={`${item.role}-${item.company}`} className="experience-card">
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-period">{item.period}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="section-card">
            <div className="section-header">
              <h2>Certifications</h2>
              <p>Verified training and certifications that back my technical skills.</p>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <article key={cert.title} className="certification-card">
                  <h3>{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-year">{cert.year}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="social" className="section-card">
            <div className="section-header">
              <h2>Connect with Me</h2>
              <p>Find me on these platforms and let's connect.</p>
            </div>
            <div className="social-grid">
              {socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-label">{social.platform}</span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="section-card contact-section">
            <div>
              <h2>Let’s build something together</h2>
              <p>
                I’m available for freelance and full-time opportunities. Reach out and let’s talk about
                your next project.
              </p>
            </div>
            <a className="button primary" href="mailto:sibaanthony1@gmail.com">
              Email me
            </a>
          </section>
        </main>

        <footer className="footer">
          <p>© 2026 Sibabalwe Rayi. Designed with React.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
