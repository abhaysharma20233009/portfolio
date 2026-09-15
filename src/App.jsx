import {
  ArrowUpRight,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import video from "./assets/bg.mp4";
import swiskillsImg from "./assets/swiskills.png";
import shopCircuitImg from "./assets/shop-circuit.png";
import "./App.css";

const profile = {
  name: "Abhay Sharma",
  headline: "Software Engineer & Competitive Programmer",
  education: "CSE @ MNNIT Allahabad '27",
  internship: "SDE Intern @ Arista Networks",
  email: "abhaysharma21102006@gmail.com",

  // Replace these if required.
  github: "https://github.com/abhaysharma20233009",
  linkedin: "#",
  leetcode: "https://leetcode.com/",
  codeforces: "https://codeforces.com/",
};

const projects = [
  {
    title: "Shop Circuit",
    label: "FLAGSHIP PROJECT",
    image: shopCircuitImg,
    description:
      "A student and campus marketplace platform where users can buy, sell, and rent products.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Socket.IO",
      "Tailwind CSS",
    ],
    features: [
      "Authentication",
      "Buy / Sell / Rent",
      "Real-time chat",
      "Notifications",
      "Search & filtering",
      "Student / shopkeeper / admin roles",
      "Admin dashboard",
      "Product management",
    ],
    live: "https://shop-circuit.onrender.com/",
    github: "https://github.com/abhaysharma20233009/Shop-Circuit",
  },
  {
    title: "SwiSkills",
    label: "SKILLS PLATFORM",
    image: swiskillsImg,
    description:
      "A skills-based platform designed around skill discovery, user profiles, ratings, and interactive learning experiences.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB"],
    features: [
      "12+ features",
      "15+ skills / categories",
      "User skill profiles",
      "Ratings",
      "Interactive platform experience",
    ],
    live: "https://swiskills.onrender.com/",
    github: "https://github.com/abhaysharma20233009/swiskills",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "System Design",
    ],
  },
  {
    title: "Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "Linux"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], main[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Go to homepage"
          >
            <span className="brand-mark">AS</span>
            <span>Abhay Sharma</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["home", "About"],
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["skills", "Skills"],
              ["cp", "CP"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <main id="home" className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          src={video}
          aria-hidden="true"
        />

        <div className="hero-overlay" />
        <div className="hero-grid" />

        <div className="hero-content section-container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
            </div>

            <p className="hero-kicker">Hi, I'm</p>

            <h1>
              Abhay <span>Sharma</span>
            </h1>

            <h2>{profile.headline}</h2>

            <div className="hero-meta">
              <span>{profile.education}</span>
              <i />
              <span>{profile.internship}</span>
            </div>

            <p className="hero-description">
              I enjoy building scalable software, solving challenging
              algorithmic problems, and designing reliable systems with a
              strong focus on backend engineering and real-world products.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("projects")}
              >
                View Projects
                <ArrowUpRight size={17} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
                <Mail size={17} />
              </button>
            </div>

            <div className="social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Code2 size={18} />
                <span>LeetCode</span>
              </a>

              <a
                href={profile.codeforces}
                target="_blank"
                rel="noreferrer"
                aria-label="Codeforces"
              >
                <Trophy size={18} />
                <span>Codeforces</span>
              </a>

              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="terminal-wrap">
            <div className="terminal-glow" />

            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="terminal-title">
                  abhay@portfolio:~ <span>— bash</span>
                </span>
              </div>

              <div className="terminal-body">
                <TerminalLine command="whoami">
                  <strong>abhay-sharma</strong>
                </TerminalLine>

                <TerminalLine command="focus">
                  <strong>DSA + Systems + Full Stack</strong>
                </TerminalLine>

                <TerminalLine command="leetcode">
                  <strong className="terminal-number">1977</strong>
                </TerminalLine>

                <TerminalLine command="codeforces">
                  <strong className="terminal-number">1411</strong>
                </TerminalLine>

                <div className="terminal-prompt">
                  <span>$</span> abhay@portfolio:~{" "}
                  <span className="cursor" />
                </div>
              </div>
            </div>

            <div className="hero-side-note">
              <span>01</span>
              <p>Turning ideas into<br />reliable systems.</p>
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollTo("cp")}
          aria-label="Scroll down"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronRight size={15} />
        </button>
      </main>

      {/* ================= CP ================= */}
      <section id="cp" className="section cp-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="COMPETITIVE PROGRAMMING"
            title="Problem Solving at Scale"
            description="Competitive programming keeps me sharp — helping me think clearly, optimize solutions, and approach unfamiliar problems systematically."
          />

          <div className="rating-grid">
            <RatingCard
              platform="LeetCode"
              rating="1977"
              subtitle="Problem Solving Rating"
              icon={<Code2 size={25} />}
              href={profile.leetcode}
            />

            <RatingCard
              platform="Codeforces"
              rating="1411"
              subtitle="Competitive Programming Rating"
              icon={<Trophy size={25} />}
              href={profile.codeforces}
            />
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Engineering Experience"
            description="Hands-on experience working on production networking software."
          />

          <div className="experience-card">
            <div className="experience-main">
              <div className="experience-topline">
                <span className="company-symbol">A</span>

                <div>
                  <h3>Arista Networks</h3>
                  <p>Software Development Intern</p>
                </div>

                <span className="experience-tag">SDE INTERN</span>
              </div>

              <div className="experience-line" />

              <p className="experience-description">
                Worked on Arista EOS with a focus on Quality of Service (QoS),
                configuration, CLI development, packet field rewriting, and
                system-level configuration/data flow.
              </p>

              <div className="experience-details">
                <div>
                  <span>DOMAIN</span>
                  <strong>Networking / QoS</strong>
                </div>

                <div>
                  <span>PLATFORM</span>
                  <strong>Arista EOS</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Systems Engineering</strong>
                </div>
              </div>
            </div>

            <div className="experience-work">
              <h4>Engineering Work</h4>

              <ul>
                <li>
                  <ShieldCheck size={16} />
                  QoS configuration and CLI development
                </li>
                <li>
                  <Network size={16} />
                  Packet QoS field rewriting
                </li>
                <li>
                  <Layers3 size={16} />
                  IP / Ethernet / MPLS packet fields
                </li>
                <li>
                  <Zap size={16} />
                  Traffic Class and Drop Precedence
                </li>
                <li>
                  <Server size={16} />
                  Configuration/data flow across system components
                </li>
                <li>
                  <Code2 size={16} />
                  Testing and validation
                </li>
                <li>
                  <Cpu size={16} />
                  Hardware / chip programming exposure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Featured Projects"
            description="Real-world applications built with modern technologies and a focus on useful product experiences."
          />

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <SectionHeading
            eyebrow="TECH STACK"
            title="Technologies & Tools"
            description="The technologies and computer science foundations I work with."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-title">
                    <Icon size={17} />
                    <span>{group.title}</span>
                  </div>

                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SYSTEM DESIGN ================= */}
      <section id="systems" className="section systems-section">
        <div className="section-container">
          <div className="system-layout">
            <div className="system-copy">
              <SectionHeading
                eyebrow="SYSTEM DESIGN / ENGINEERING"
                title="How I Think About Systems"
                description="I am interested in building software that remains reliable as usage, data, and system complexity grow."
              />

              <div className="system-interests">
                {[
                  "Scalable Backend Architecture",
                  "Real-time Systems",
                  "Distributed Systems",
                  "Caching",
                  "Message Queues",
                  "API Design",
                  "Database Design",
                  "Microservices",
                  "WebSockets",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* ================= EDUCATION + STATS ================= */}
      <section className="section compact-section">
        <div className="section-container">
          <div className="compact-grid">
            <div className="education-card">
              <div className="card-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span className="mini-label">EDUCATION</span>
                <h3>MNNIT Allahabad</h3>
                <p>B.Tech — Computer Science & Engineering</p>
                <strong>2027</strong>
              </div>
            </div>

            <div className="stats-row">
              <Stat value="1977" label="LeetCode Rating" />
              <Stat value="1411" label="Codeforces Rating" />
              <Stat value="2027" label="Graduation" />
              <Stat value="SDE" label="Arista Internship" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <div className="contact-orbit orbit-one" />
        <div className="contact-orbit orbit-two" />

        <div className="section-container">
          <div className="contact-content">
            <div className="eyebrow">
              <Sparkles size={14} />
              GET IN TOUCH
            </div>

            <h2>
              Let's build
              <span> something great.</span>
            </h2>

            <p>
              Interested in software engineering, backend systems,
              competitive programming, or building useful products?
              Let's connect.
            </p>

            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                LeetCode
              </a>

              <a
                href={profile.codeforces}
                target="_blank"
                rel="noreferrer"
              >
                <Trophy size={17} />
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="section-container footer-inner">
          <div>
            <strong>Abhay Sharma</strong>
            <span>
              Software Engineer · Competitive Programmer · Full-Stack Developer
            </span>
          </div>

          <div className="footer-right">
            <span>Built with React</span>
            <span>•</span>
            <span>Vite</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span className="footer-heart">♡</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function TerminalLine({ command, children }) {
  return (
    <div className="terminal-line">
      <div>
        <span className="terminal-symbol">$</span>
        <span>{command}</span>
      </div>
      <div className="terminal-result">{children}</div>
    </div>
  );
}

function RatingCard({ platform, rating, subtitle, icon, href }) {
  return (
    <div className="rating-card">
      <div className="rating-card-top">
        <div className="rating-platform">
          <span className="platform-icon">{icon}</span>
          <strong>{platform}</strong>
        </div>

        <ExternalLink size={16} />
      </div>

      <div className="rating-number">{rating}</div>
      <p>{subtitle}</p>

      <a href={href} target="_blank" rel="noreferrer">
        View Profile
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <article className={`project-card ${reverse ? "reverse" : ""}`}>
      <div className="project-image">
        <div className="project-image-overlay" />
        <img src={project.image} alt={`${project.title} project`} />

        <div className="project-image-label">
          <Globe size={14} />
          PROJECT PREVIEW
        </div>
      </div>

      <div className="project-content">
        <span className="project-label">{project.label}</span>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-features">
          {project.features.map((feature) => (
            <div key={feature}>
              <span className="feature-dot" />
              {feature}
            </div>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-btn primary"
          >
            Live Demo
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="architecture">
      <div className="architecture-header">
        <span>ARCHITECTURE</span>
        <span className="architecture-live">
          <i />
          SYSTEM VIEW
        </span>
      </div>

      <div className="architecture-flow">
        <ArchitectureNode
          icon={<Globe size={19} />}
          title="Client"
          subtitle="Web / Mobile"
        />

        <ArchitectureArrow />

        <ArchitectureNode
          icon={<Network size={19} />}
          title="API Gateway"
          subtitle="Routing"
        />

        <ArchitectureArrow />

        <ArchitectureNode
          icon={<Server size={19} />}
          title="Services"
          subtitle="Business Logic"
        />

        <div className="architecture-branch">
          <ArchitectureNode
            icon={<Zap size={18} />}
            title="Cache"
            subtitle="Redis"
          />

          <ArchitectureNode
            icon={<Database size={18} />}
            title="Database"
            subtitle="PostgreSQL / MongoDB"
          />

          <ArchitectureNode
            icon={<Layers3 size={18} />}
            title="Message Queue"
            subtitle="Async Events"
          />
        </div>
      </div>
    </div>
  );
}

function ArchitectureNode({ icon, title, subtitle }) {
  return (
    <div className="architecture-node">
      <span>{icon}</span>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </div>
  );
}

function ArchitectureArrow() {
  return <div className="architecture-arrow">→</div>;
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default App;
