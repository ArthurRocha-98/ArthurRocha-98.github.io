import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Terminal, Bug, CheckCircle2, Code2, Database, GitBranch,
  Braces, Globe, Workflow, ShieldCheck, Sparkles
} from 'lucide-react'
import './App.css'
import Header from './components/Header'
import SectionTitle from './components/SectionTitle'
import { skills, projects, principles } from './data'

const iconMap = {
  'Cypress': <Bug size={19} />,
  'JavaScript': <Braces size={19} />,
  'Java': <Code2 size={19} />,
  'React': <AtomIcon />,
  'PostgreSQL': <Database size={19} />,
  'HTML & CSS': <Globe size={19} />,
  'Git & GitHub': <GitBranch size={19} />,
}

function AtomIcon() {
  return <Workflow size={19} />
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> DISPONÍVEL PARA OPORTUNIDADES</div>
            <p className="hero-kicker">OLÁ, EU SOU QA ENGINEER</p>
            <h1>Qualidade não é uma etapa.<br /><span>É parte do produto.</span></h1>
            <p className="hero-description">
              Atuo com foco em qualidade de software, testes e automação.
              Meu objetivo é ajudar a construir aplicações mais confiáveis,
              funcionais e preparadas para pessoas reais.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos <ArrowUpRight size={17} />
              </a>
              
              <a className="button button-ghost" href="#sobre">
                Conheça meu perfil <ArrowDown size={16} />
              </a>

              <a 
                className="button button-ghost" 
                href={`${import.meta.env.BASE_URL}cv/curriculo.pdf`} 
                download="Arthur Rocha-CV.pdf">
                Baixar CV <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/ArthurRocha-98" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://linkedin.com/in/arthur-rocha-b1388b146/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <span className="social-separator" />
              <span className="mono muted">QA · TESTES · AUTOMAÇÃO</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustração de terminal com verificações de qualidade">
            <div className="glow-orb orb-one" />
            <div className="glow-orb orb-two" />
            <div className="terminal-card">
              <div className="terminal-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>quality-check.spec.js</span>
                <span className="terminal-lock"><ShieldCheck size={14} /></span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="line-no">01</span><span className="code-purple">describe</span><span>(</span><span className="code-green">'software quality'</span><span>, () =&gt; {'{'}</span></div>
                <div className="terminal-line indent"><span className="line-no">02</span><span className="code-purple">it</span><span>(</span><span className="code-green">'should work as expected'</span><span>, () =&gt; {'{'}</span></div>
                <div className="terminal-line indent-2"><span className="line-no">03</span><span className="code-blue">cy</span><span>.</span><span className="code-yellow">visit</span><span>(</span><span className="code-green">'/application'</span><span>)</span></div>
                <div className="terminal-line indent-2"><span className="line-no">04</span><span className="code-blue">cy</span><span>.</span><span className="code-yellow">get</span><span>(</span><span className="code-green">'[data-testid=login]'</span><span>)</span></div>
                <div className="terminal-line indent-2"><span className="line-no">05</span><span className="code-blue">cy</span><span>.</span><span className="code-yellow">should</span><span>(</span><span className="code-green">'be.visible'</span><span>)</span></div>
                <div className="terminal-line indent"><span className="line-no">06</span><span>{'}'})</span></div>
                <div className="terminal-line"><span className="line-no">07</span><span>{'})'}</span></div>
                <div className="terminal-result"><span><CheckCircle2 size={15} /> TESTS PASSED</span><b>3 / 3</b></div>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon"><Bug size={15} /></span><span><b>Bug detected?</b><small>Investigate · Report · Prevent</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-check"><CheckCircle2 size={17} /></span><span><b>Quality verified</b><small>Confidence in every release</small></span></div>
            <div className="hero-grid-label mono">FIG. 01 — QUALITY IN ACTION</div>
          </div>
          <a className="scroll-cue" href="#sobre"><span /> SCROLL PARA EXPLORAR</a>
        </section>

        <section className="about section-wrap section-block" id="sobre">
          <SectionTitle eyebrow="01 / SOBRE MIM" title={<>Pensamento analítico.<br /><span>Olhar para os detalhes.</span></>} />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">Sou um profissional com interesse em qualidade de software e tecnologia, sempre buscando unir visão crítica, conhecimento técnico e atenção à experiência de quem usa o produto.</p>
              <p>Tenho interesse em testes manuais e automatizados, validação de aplicações web, testes de API e banco de dados. Acredito que qualidade é construída em conjunto: com boas perguntas, cenários bem definidos e feedback contínuo.</p>
              <p>Este portfólio reúne estudos, projetos práticos e tecnologias que fazem parte da minha jornada em QA.</p>
              <a className="text-link" href="#contato">Vamos trocar uma ideia <ArrowUpRight size={16} /></a>
            </div>
            <div className="principles">
              {principles.map(([title, text], index) => (
                <div className="principle" key={title}>
                  <span className="principle-index">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ArrowUpRight className="principle-arrow" size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-block" id="habilidades">
          <div className="section-wrap">
            <SectionTitle eyebrow="02 / STACK & FERRAMENTAS" title={<>Ferramentas para <span>elevar a qualidade.</span></>} text="Tecnologias e ferramentas que utilizo nos estudos e projetos de desenvolvimento e qualidade." />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top"><span className="skill-icon">{iconMap[skill.name]}</span><span className="skill-number">0{index + 1}</span></div>
                  <h3>{skill.name}</h3>
                  <p>{skill.type}</p>
                  <div className="skill-status"><span /> {skill.level}</div>
                </article>
              ))}
            </div>
            <div className="skill-note"><Sparkles size={17} /><span>Aprendizado contínuo: explorando novas ferramentas e boas práticas de qualidade.</span></div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projetos">
          <SectionTitle eyebrow="03 / PROJETOS EM DESTAQUE" title={<>Da teoria à <span>prática.</span></>} text="Uma seleção de projetos para demonstrar minha abordagem em qualidade, automação e desenvolvimento." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number mono">{project.number}</div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title} no GitHub`}><ArrowUpRight size={21} /></a>
              </article>
            ))}
          </div>
          <p className="projects-footnote"><Terminal size={15} /> Os cards acima são modelos iniciais. Substitua pelos seus repositórios e projetos reais.</p>
        </section>

        <section className="contact-section section-block" id="contato">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">04 / CONTATO</span>
              <h2>Vamos construir<br /><span>algo confiável?</span></h2>
              <p>Estou aberto a conversar sobre oportunidades, projetos e desafios na área de qualidade de software.</p>
              <a className="button button-primary" href="mailto:seuemail@exemplo.com">Entre em contato <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-links">
              <a href="mailto:seuemail@exemplo.com"><span className="contact-icon"><Mail size={19} /></span><span><small>E-MAIL</small><b>seuemail@exemplo.com</b></span><ArrowUpRight size={17} /></a>
              <a href="https://linkedin.com/in/arthur-rocha-b1388b146/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><small>LINKEDIN</small><b>Meu perfil profissional</b></span><ArrowUpRight size={17} /></a>
              <a href="https://github.com/ArthurRocha-98" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><span><small>GITHUB</small><b>Meus repositórios</b></span><ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#inicio"><span className="brand-mark"><ShieldCheck size={18} /></span><span>qa<span className="brand-dot">.</span>portfolio</span></a>
        <p>Desenvolvido com <span>♥</span>, React e atenção aos detalhes.</p>
        <span className="mono footer-year">© {new Date().getFullYear()} · QA ENGINEER</span>
      </footer>
    </>
  )
}

export default App